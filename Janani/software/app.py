from flask import Flask, render_template, request, redirect, session, url_for, jsonify, send_from_directory
import json
import os


app = Flask(__name__)
app.secret_key = "janani_secret"

PROFILE_DATA_FILE = "profile_data.json"

# Valid QR codes (representing Bluetooth modules only)
valid_qr = ['QR001', 'QR002', 'QR003']

# Valid doctor codes
doctor_codes = {
    'DR123': 'Dr. Janani',
    'DR456': 'Dr. Meera'
}

@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/verify_qr', methods=['POST'])
def verify_qr():
    data = request.get_json()
    code = data.get('code', '').strip().upper()
    print("Scanned QR code:", code)

    if code in valid_qr:
        session['qr'] = code
        return jsonify({'status': 'success'})  # No user data sent — doctor fills that next
    
    return jsonify({'status': 'fail'})

@app.route('/static/assets/illustrations/<filename>')
def serve_animation(filename):
    return send_from_directory('static/assets/illustrations/animations_json', filename)

@app.route('/doctor', methods=['GET', 'POST'])
def doctor():
    if 'qr' not in session:
        return redirect(url_for('landing'))

    if request.method == 'POST':
        data = request.get_json()
        code = data.get('doctor_code', '').strip().upper()

        if code in doctor_codes:
            session['doctor'] = doctor_codes[code]
            return jsonify({'status': 'success'})
        else:
            return jsonify({'status': 'fail', 'message': 'Invalid doctor code'})

    return render_template('doctor.html')


@app.route('/doctor_questions')
def doctor_questions():
    # Ensure the doctor is logged in and QR is verified
    if 'doctor' not in session or 'qr' not in session:
        return redirect(url_for('landing'))

    return render_template('doctor_questions.html')


@app.route("/save_profile", methods=["POST"])
def save_profile():
    data = request.get_json()

    with open(PROFILE_DATA_FILE, "w") as file:
        json.dump(data, file)

    return jsonify({"status": "success"})




@app.route('/dashboard')
def dashboard():
    if 'user' not in session and 'patient_profile' not in session:
        return redirect(url_for('landing'))

    patient = session.get('patient_profile')
    return render_template('dashboard.html', patient=patient)
    
@app.route('/videos')
def videos():
    return render_template('videos.html')
    
@app.route('/reports')
def reports():
    return render_template('reports.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')
    
@app.route('/profile')
def profile():
    return render_template('profile.html')
    
@app.route("/get_profile_data")
def get_profile_data():
    if os.path.exists(PROFILE_DATA_FILE):
        with open(PROFILE_DATA_FILE, "r") as file:
            try:
                data = json.load(file)
                return jsonify({"status": "success", "data": data})
            except json.JSONDecodeError:
                return jsonify({"status": "error", "message": "Corrupt data"})
    else:
        return jsonify({"status": "error", "message": "No profile found"})

    
@app.route('/edit_profile', methods=['GET', 'POST'])
def edit_profile():
    if 'qr' not in session:  # ✅ Use 'qr' instead of 'user'
        return redirect(url_for('landing'))  # ✅ Redirect to 'landing', not 'login'

    if request.method == 'POST':
        # Save updated profile data
        session['profile'] = {
            'name': request.form['name'],
            'age': request.form['age'],
            'location': request.form['location'],
            'stage': request.form['stage']
        }
        return redirect(url_for('dashboard'))

    # Pre-fill form with existing data if available
    profile = session.get('profile', {})
    return render_template(
        'edit_profile.html',
        name=profile.get('name', ''),
        age=profile.get('age', ''),
        location=profile.get('location', ''),
        stage=profile.get('stage', 'First Trimester')
    )

@app.route('/reliever')
def reliever():
    return render_template('reliever.html')
    
@app.route('/chat')
def chat():
    return render_template('chat.html')


@app.route('/set_lang/<lang>')
def set_lang(lang):
    if lang in app.config['LANGUAGES']:
        session['lang'] = lang
    return redirect(request.referrer or url_for('landing'))

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('landing'))

if __name__ == "__main__":
    app.run(debug=True)


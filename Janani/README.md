# 🌼 Janani – AI-Powered Maternal Health Platform

**Janani** is a multilingual, interactive web application that provides support for pregnant women, doctors, and healthcare workers. Built with a strong focus on emotional wellbeing, medical tracking, and personalized interaction, Janani is part of the **Samsung Solve for Tomorrow 2025** initiative.

---

## 🗂️ Project Structure

Janani/
└── software/
├── app.py # Main Flask backend
├── janani.png # Logo
├── profile_data.json # User profile storage
├── README.md # Project documentation
├── data/
│ └── animations_json/ # Lottie animations or JSON data
├── templates/
│ ├── dashboard.html
│ ├── videos.html
│ ├── chat.html
│ ├── reports.html
│ ├── profile.html
│ ├── edit_profile.html
│ ├── settings.html
│ ├── contact.html
│ ├── reliever.html
│ ├── landing.html
│ ├── doctor.html
│ ├── doctor_questions.html
│ └── trash/ # Old unused files
└── static/
├── assets/
│ └── janani.png # Favicon or images
├── css/
│ ├── dashboard.css
│ └── reliever.css
├── js/
│ ├── dashboard.js
│ ├── reliever.js
│ ├── chat.js
├── qr_codes/ # Future QR-related assets
└── doctor_questions.js # Special JS for doctor questions

---

## 🌟 Key Pages

### 🚀 `landing.html`
- QR code scanning (camera + upload)
- Language selection dropdown
- Beautiful onboarding illustration
- Navigation to main dashboard

### 📊 `dashboard.html`
- Health vitals overview (BP, Heart Rate, Glucose, Weight)
- Dynamic Chart.js graphs
- Fully responsive summary layout
- Personal welcome header

### 🎥 `videos.html`
- Embedded YouTube videos in user's selected language
- Simple grid view
- Easy learning through visual content

### 💬 `chat.html` – *Talk to Janani*
- Clean chat interface
- Ask medical or personal questions
- Real-time responses planned (AI backend to be integrated)
- Beautiful Tailwind styling with avatars and banner

### 📄 `reports.html`
- Tabular report view
- Auto-filled vitals with date
- Clean structure for exporting/printing

### 🧘 `reliever.html`
- Interactive relaxing disc with rotation animation
- Background soothing music (`soothing-music.mp3`)
- Game menu triggered from bottom-right favicon
- Fully animated and immersive UI

### 👤 `profile.html`
- Displays user details in keyword:value table format
- Read-only display with "Edit Profile" CTA

### 📝 `edit_profile.html`
- Form with prefilled fields (Name, Age, Trimester, etc.)
- Built using Tailwind, modular and editable
- Future integration with `profile_data.json`

### ⚙️ `settings.html`
- Language selection dropdown
- Enable/disable notification checkbox
- Logout button with icon

### ☎️ `contact.html`
- Support email and phone number
- Emergency help message

### 👨‍⚕️ `doctor.html`
- Doctor code verification page
- Separate secured access

### 🧾 `doctor_questions.html`
- Multi-step animated form for doctors to fill patient data
- Includes personal details, vitals, pregnancy stage, notes
- Lottie animation placeholders (ready for GSAP/AOS integration)
- Connected to `doctor_questions.js`

---

## 🧪 Technologies Used

| Category       | Stack                          |
|----------------|-------------------------------|
| Frontend       | HTML, Tailwind CSS, JavaScript |
| Backend        | Flask (Python)                 |
| Charts         | Chart.js                       |
| Icons & Assets | Font Awesome, Flaticon         |
| Animations     | GSAP, AOS, (Lottie soon)       |
| Audio          | HTML5 `<audio>` tag            |
| Media Handling | Camera + QR support (upcoming) |

## Setup
1. Install Flask
2. Open the folder in the terminal. Run `python app.py`
3. Open `http://localhost:5000/`
4. Once entered, click on the scan button, use the qr code placed in assets or generate a qr with the code QR001.
5. In the next page, use the code DR123. You will be directed to question forms. Here you will be asked some questions about the patient.
6. Finally the app will be opened. Since it is in early stage, there isn't much to see. But we can remodel it to our needs without much efforts. 
7. We have various sections inside like: Dashboard, Videos, Chat, Stress relievers, Settings, Contact etc.,
8. Our main priority in the end is to raise the interest in people to take pregnancy seriously and to take care from the beginning. BEcause prevention is always better than cure.
9. This app and kit might not be useful all the times. But it is already proved by the research that there is a need of such kit to prevent the following:

   - Over 50% of pregnant women in India don’t get full antenatal checkups
   - Many cases of high BP and gestational diabetes go undetected
   - Rural areas face delays in emergency care
   - A simple tracking system can reduce maternal risks by up to 35%

10. Our kit helps bridge this gap at the basic level.

##🔬 Based on Actual Research:

   - NFHS-5 Report (2021): Only 58.1% of pregnant women had at least 4 ANC visits.
   - Lancet Global Health (2020): Delayed diagnosis of gestational diabetes and hypertension is a major cause of maternal complications in India.
   - WHO Report: Regular BP, weight, and sugar monitoring can reduce maternal risk by 30–35% in low-resource settings.

In the end, we are only trying to give a chance to those who truly want to bring change. It’s up to them whether they follow it or not.

---

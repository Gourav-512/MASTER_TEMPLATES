# WINIKS — Dental Master Template
## Quick Setup & Customization Guide

---

## What This Template Includes

| Feature | Status |
|---------|--------|
| Premium responsive design (blue/medical palette) | ✅ |
| Mobile-first layout | ✅ |
| Hero with trust signals | ✅ |
| About Clinic section | ✅ |
| Doctor Profile section | ✅ |
| Services grid (8 services) | ✅ |
| Why Choose Us grid | ✅ |
| Clinic Gallery | ✅ |
| Patient Reviews | ✅ |
| Appointment Request Form | ✅ |
| "Appointment Request Only" disclaimer | ✅ |
| Contact Form | ✅ |
| Google Maps embed | ✅ |
| Google Review CTA | ✅ |
| WhatsApp CTAs | ✅ |
| Floating mobile CTA (Call / WhatsApp / Book) | ✅ |
| Google Apps Script backend | ✅ |
| Google Sheets integration (Appointments / Contacts) | ✅ |
| Email notifications | ✅ |
| Scroll animations | ✅ |
| SEO meta tags | ✅ |
| Dentist LocalBusiness Schema | ✅ |
| Cloudflare Pages ready | ✅ |

---

## How to Create a New Client Website

```
1. Copy this entire folder:
   _MASTER_TEMPLATES/Dental/

2. Paste it here:
   CLIENTS/Dental/[ClinicName]/

3. Open script.js → BUSINESS object → replace all values

4. Open script.js → DOCTOR object → replace with real doctor info

5. Edit SERVICES array if needed (remove/add services client offers)

6. Open index.html → update SEO meta title and description

7. Set up Google Sheet + Apps Script (see below)

8. Deploy to Cloudflare Pages
```

---

## Customizing script.js — BUSINESS Object

```js
const BUSINESS = {
  name:          'SmileCare Dental Clinic',  // ← Clinic name
  tagline:       'Your smile, our priority.',// ← Short tagline
  phone:         '+91 98765 43210',          // ← Phone (display format)
  whatsapp:      '919876543210',             // ← WhatsApp (digits only)
  address:       '[Full Address, City, PIN]',// ← Full clinic address
  mapsUrl:       'https://maps.google.com/? ...', // ← Google Maps directions URL
  mapsEmbedUrl:  '',                         // ← Google Maps iframe embed src
  email:         'info@clinic.in',           // ← Contact email
  openingHours:  'Mon–Sat: 9 AM – 8 PM',    // ← Opening hours text
  instagram:     'https://...',              // ← Instagram URL ('' to hide)
  facebook:      'https://...',              // ← Facebook URL ('' to hide)
  youtube:       '',                         // ← YouTube URL ('' to hide)
  googleReviewUrl: '',                       // ← Google Review URL
  appsScriptUrl: '',                         // ← Apps Script Web App URL
};
```

---

## Customizing script.js — DOCTOR Object

```js
const DOCTOR = {
  name:          'Dr. [Full Name]',
  degree:        'BDS, MDS — [Specialization]',
  bio:           'Doctor bio here...',
  credentials: [
    { icon: '🎓', text: 'BDS — [College], [University]' },
    { icon: '🏅', text: 'MDS — [Specialization]' },
    { icon: '📋', text: 'Registered with Dental Council of India' },
    { icon: '💼', text: '[X]+ Years Clinical Experience' },
  ],
  yearsExperience: '10+',
  patientCount:    '1000+',
  badgeText:       'Verified Dentist',
};
```

---

## Customizing Services

Find `const SERVICES = [...]` in `script.js`.

Only include services the client actually offers.

```js
{
  icon: '🦷',
  name: 'Dental Cleaning',
  desc: 'Short, accurate description of the service.',
}
```

Remove services the clinic does NOT offer.

---

## Important: Appointment Disclaimer

This template correctly displays:

> "This is an appointment **request**. The clinic will contact you to confirm the date and time."

Do NOT remove this disclaimer.

The system does NOT confirm appointments automatically.

---

## Google Sheets Setup

1. Create a new Google Sheet at [sheets.google.com](https://sheets.google.com)
2. Name it: `[ClinicName] — WINIKS Forms`
3. The Apps Script creates these tabs automatically:
   - **Appointments** — all appointment requests
   - **Contacts** — general messages

Appointment Status values:
- `NEW` → Just received
- `CONTACTED` → Called patient
- `CONFIRMED` → Appointment confirmed
- `COMPLETED` → Patient visited
- `CANCELLED` → Cancelled

---

## Google Apps Script Setup

1. Open the Google Sheet → **Extensions** → **Apps Script**
2. Delete existing code → paste entire `backend/Code.gs`
3. Update CONFIG:
   ```js
   const CONFIG = {
     notificationEmail: 'your@email.com',
     businessName:      'Clinic Name',
     doctorName:        'Dr. Name',
   };
   ```
4. **Deploy** → **New Deployment** → **Web App**
   - Execute as: **Me**
   - Access: **Anyone**
5. Copy the **Web App URL**
6. Paste into `script.js` → `BUSINESS.appsScriptUrl`

---

## Google Review Link

1. Open [Google Business Profile](https://business.google.com)
2. Click **Get more reviews**
3. Copy the review link
4. Paste into `BUSINESS.googleReviewUrl`

The review CTA buttons activate automatically.

---

## Cloudflare Pages Deployment

1. Login to [Cloudflare Pages](https://pages.cloudflare.com)
2. Create Project → Direct Upload
3. Upload client folder contents
4. Share `name.pages.dev` as the demo link

---

## File Structure

```
Dental/
├── index.html       ← Main website
├── style.css        ← Design system
├── script.js        ← Configuration + logic
├── assets/
│   ├── logo.svg     ← Replace with clinic logo
│   └── images/      ← Add clinic photos
├── backend/
│   └── Code.gs      ← Google Apps Script
└── README.md        ← This file
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Form shows error | Verify `BUSINESS.appsScriptUrl` is correct |
| No email received | Check `notificationEmail` in Code.gs, check spam |
| Map not showing | Set correct `mapsEmbedUrl` from Google Maps embed |
| Review button hidden | Set `googleReviewUrl` to valid review URL |
| WhatsApp broken | Ensure `whatsapp` is digits only, no `+` or spaces |

---

*WINIKS — Local Business Digital Growth System*

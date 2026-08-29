# WINIKS — Bakery Master Template
## Quick Setup & Customization Guide

---

## What This Template Includes

| Feature | Status |
|---------|--------|
| Premium responsive design | ✅ |
| Mobile-first layout | ✅ |
| Product tabs (Cakes, Pastries, Cookies, Cupcakes) | ✅ |
| Custom Cake Enquiry Form | ✅ |
| Contact Form | ✅ |
| Google Apps Script backend | ✅ |
| Google Sheets integration | ✅ |
| Email notifications | ✅ |
| WhatsApp CTAs | ✅ |
| Google Maps embed | ✅ |
| Google Review CTA | ✅ |
| Floating mobile CTA | ✅ |
| Scroll animations | ✅ |
| SEO meta tags | ✅ |
| LocalBusiness Schema | ✅ |
| Cloudflare Pages ready | ✅ |

---

## How to Create a New Client Website

```
1. Copy this entire folder:
   _MASTER_TEMPLATES/Bakery/

2. Paste it here:
   CLIENTS/Bakery/[ClientBusinessName]/

3. Open script.js → BUSINESS object → replace all values

4. Open index.html → replace SEO meta title & description

5. Replace images (optional — emoji fallback works fine for demo)

6. Set up Google Sheet & Apps Script (see below)

7. Deploy to Cloudflare Pages
```

---

## Step-by-Step: Customizing script.js

Open `script.js`. Find the `BUSINESS` object at the top:

```js
const BUSINESS = {
  name:        'Sweet Cravings Bakery',    // ← Business name
  tagline:     'Handcrafted with love...', // ← Tagline
  phone:       '+91 98765 43210',          // ← Phone number (display)
  whatsapp:    '919876543210',             // ← WhatsApp number (no + or spaces)
  address:     '12, Main Street...',       // ← Full address
  mapsUrl:     'https://maps.google.com/?q=...', // ← Google Maps directions link
  mapsEmbedUrl: '',                        // ← Google Maps iframe embed URL
  email:       'hello@business.com',       // ← Email
  openingHours: 'Mon–Sat: 8:00 AM – 9:00 PM', // ← Opening hours
  instagram:   'https://instagram.com/...', // ← Instagram URL ('' to hide)
  facebook:    'https://facebook.com/...',  // ← Facebook URL ('' to hide)
  youtube:     '',                          // ← YouTube URL ('' to hide)
  googleReviewUrl: '',                      // ← Google Review URL ('' to hide)
  appsScriptUrl:   '',                      // ← Apps Script Web App URL
};
```

**WhatsApp number format:** Country code + number, no spaces, no `+`
- Example: `919876543210` (India +91 98765 43210)

---

## Step-by-Step: Google Maps Embed

1. Go to [maps.google.com](https://maps.google.com)
2. Search for the client's business
3. Click **Share** → **Embed a map**
4. Copy only the `src="..."` URL from the iframe code
5. Paste it into `BUSINESS.mapsEmbedUrl` in script.js

For the Directions button:
1. Same search on Google Maps
2. Copy the URL from your browser address bar
3. Paste into `BUSINESS.mapsUrl`

---

## Step-by-Step: Google Sheets Setup

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: `[BusinessName] — WINIKS Forms`
4. The Apps Script will automatically create these tabs on first submission:
   - **CakeEnquiries** — custom cake orders
   - **Contacts** — general messages

Status values you can use in the sheet:
- `NEW` — Just received
- `CONTACTED` — Called / WhatsApped the customer
- `CONFIRMED` — Order confirmed
- `COMPLETED` — Order delivered
- `CANCELLED` — Order cancelled

---

## Step-by-Step: Google Apps Script Setup

1. Open the Google Sheet you created
2. Click **Extensions** → **Apps Script**
3. Delete any existing code
4. Copy the entire contents of `backend/Code.gs`
5. Paste it into the Apps Script editor
6. Update `CONFIG` at the top:
   ```js
   const CONFIG = {
     notificationEmail: 'your@email.com',    // ← Your notification email
     businessName: 'Client Business Name',   // ← Client name
     ...
   };
   ```
7. Click **Deploy** → **New Deployment**
8. Type: **Web App**
9. Execute as: **Me**
10. Who has access: **Anyone**
11. Click **Deploy**
12. Copy the **Web App URL**
13. Paste it into `script.js` → `BUSINESS.appsScriptUrl`

**Important:** Every time you change `Code.gs`, you must create a **New Deployment** (not re-deploy the existing one) to update the live URL.

---

## Step-by-Step: Google Review URL

1. Go to [Google Business Profile](https://business.google.com)
2. Find your client's business
3. Click **Get more reviews** → Copy the link
4. Paste it into `BUSINESS.googleReviewUrl`

If the client doesn't have a verified Google Business Profile yet, leave `googleReviewUrl: ''` — the review buttons will be automatically hidden.

---

## Step-by-Step: Cloudflare Pages Deployment

1. Create a [Cloudflare](https://cloudflare.com) account (free)
2. Go to **Pages** → **Create a Project** → **Direct Upload**
3. Upload the entire client folder contents (not the folder itself)
4. Set the project name (becomes `name.pages.dev`)
5. Click **Deploy**
6. Share `name.pages.dev` with the client as the demo link

For custom domain:
1. Client purchases domain (Namecheap, GoDaddy, etc.)
2. Transfer nameservers to Cloudflare
3. In Cloudflare Pages → Custom Domains → Add your domain

---

## Updating Products

Open `script.js` → find `const PRODUCTS = { ... }`.

Each product has:
```js
{
  icon: '🎂',              // emoji icon
  name: 'Product Name',
  desc: 'Short description.',
  price: 'From ₹599',     // ← Set to '' to hide price
  wa: 'WhatsApp message', // ← Pre-filled WhatsApp message for this product
}
```

To add a new product: add a new object to the appropriate array.
To remove a product: delete its object from the array.

---

## Testing Forms

### Test in Demo Mode (no Apps Script URL):
- Fill and submit any form
- Should show success with `DEMO-` reference ID
- No actual data is saved in demo mode

### Test with Apps Script:
1. Deploy Apps Script (see above)
2. Add URL to `BUSINESS.appsScriptUrl`
3. Submit a test form
4. Check the Google Sheet for the entry
5. Check your `notificationEmail` inbox for the notification

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Form shows error | Check `BUSINESS.appsScriptUrl` is correct and deployed |
| Map not showing | Check `BUSINESS.mapsEmbedUrl` is correct iframe src URL |
| WhatsApp not working | Ensure `whatsapp` is digits only, no spaces or `+` |
| Review button not showing | Set `BUSINESS.googleReviewUrl` to a valid URL |
| Emails not received | Check `notificationEmail` in `Code.gs` CONFIG, check spam folder |
| Apps Script error | Open Apps Script → View → Logs for error details |

---

## File Structure

```
Bakery/
├── index.html      ← Main website (HTML structure)
├── style.css       ← All styles (design system)
├── script.js       ← Configuration + behaviour + forms
├── assets/
│   ├── logo.svg    ← Replace with client's logo
│   └── images/     ← Add client's product photos here
├── backend/
│   └── Code.gs     ← Google Apps Script (copy to Apps Script editor)
└── README.md       ← This file
```

---

*WINIKS — Local Business Digital Growth System*

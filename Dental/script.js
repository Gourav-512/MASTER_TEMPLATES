/* ================================================================
   WINIKS — DENTAL MASTER TEMPLATE
   script.js
   ================================================================ */

'use strict';

// ================================================================
// SECTION 1: BUSINESS CONFIGURATION
// ================================================================
// ⚠️  CUSTOMISE THIS SECTION FOR EACH CLIENT.
// ================================================================

const BUSINESS = {
    name: 'SmileCare Dental Clinic',
    tagline: 'Your smile, our priority.',
    phone: '+91 98765 43210',      // ← Replace with clinic phone
    whatsapp: '919876543210',         // ← Replace: no + or spaces
    address: '[Street], [Area], [City], [State] — [PIN]',
    mapsUrl: 'https://maps.google.com/?q=SmileCare+Dental+Clinic',
    mapsEmbedUrl: '',                    // ← Google Maps embed iframe src
    email: 'info@smilecare.in',
    openingHours: 'Mon–Sat: 9:00 AM – 8:00 PM · Sun: By Appointment',
    instagram: 'https://instagram.com/smilecare_dental',  // ← '' to hide
    facebook: 'https://facebook.com/smilecare_dental',   // ← '' to hide
    youtube: '',                    // ← '' to hide
    googleReviewUrl: '',                   // ← e.g. "https://g.page/r/XXXXX/review"
    appsScriptUrl: '',                    // ← Apps Script Web App URL
    year: new Date().getFullYear(),
};

// ================================================================
// SECTION 2: DOCTOR / CLINIC DETAILS
// ================================================================

const DOCTOR = {
    name: 'Dr. [Doctor Name]',
    degree: 'BDS, MDS — [Specialization]',
    bio: 'Dr. [Name] brings [X]+ years of clinical experience in general and cosmetic dentistry. With a patient-centric approach and a commitment to continuing education, Dr. [Name] ensures every patient receives evidence-based, comfortable, and personalised dental care.',
    credentials: [
        { icon: '🎓', text: 'BDS — [College Name], [University]' },
        { icon: '🏅', text: 'MDS — [Specialization or Course]' },
        { icon: '📋', text: 'Registered with Dental Council of India' },
        { icon: '💼', text: '[X]+ Years Clinical Experience' },
    ],
    yearsExperience: '[X]+',
    patientCount: '[X]+',
    badgeText: 'Verified Dentist',
};

// ================================================================
// SECTION 3: SERVICES DATA
// ================================================================

const SERVICES = [
    {
        icon: '🦷',
        name: 'Dental Cleaning',
        desc: 'Professional scaling and polishing to remove plaque, tartar, and surface stains. Recommended every 6 months.',
    },
    {
        icon: '🔬',
        name: 'Root Canal Treatment',
        desc: 'Pain-free endodontic treatment to save infected or badly damaged teeth and eliminate root canal infection.',
    },
    {
        icon: '✨',
        name: 'Teeth Whitening',
        desc: 'Professional-grade in-clinic whitening for a brighter, more confident smile in a single visit.',
    },
    {
        icon: '🏗️',
        name: 'Dental Implants',
        desc: 'Permanent, natural-looking replacement for missing teeth. Long-lasting, functional, and comfortable.',
    },
    {
        icon: '😁',
        name: 'Braces & Aligners',
        desc: 'Metal braces and clear aligner options for straightening teeth and correcting bite issues.',
    },
    {
        icon: '👶',
        name: 'Pediatric Dentistry',
        desc: 'Gentle and child-friendly dental care for infants, toddlers, and teenagers.',
    },
    {
        icon: '💎',
        name: 'Cosmetic Dentistry',
        desc: 'Veneers, bonding, smile makeovers and aesthetic procedures to enhance the appearance of your smile.',
    },
    {
        icon: '🚨',
        name: 'Emergency Care',
        desc: 'Prompt dental care for toothaches, broken teeth, swelling and other urgent dental situations.',
    },
];

// ================================================================
// SECTION 4: WHY US DATA
// ================================================================

const WHY_US = [
    {
        icon: '🏥',
        title: 'Modern Equipment',
        desc: 'Digital X-rays, sterilised instruments, and up-to-date clinical technology for accurate, comfortable care.',
    },
    {
        icon: '😷',
        title: 'Strict Sterilisation',
        desc: 'WHO-compliant sterilisation protocols. Instruments are autoclave-sterilised before each use.',
    },
    {
        icon: '💬',
        title: 'Patient-First Approach',
        desc: 'We take time to listen, explain treatment options clearly and address all concerns before proceeding.',
    },
    {
        icon: '🧒',
        title: 'Family & Child Care',
        desc: 'A welcoming environment for patients of all ages, including nervous or first-time visitors.',
    },
    {
        icon: '📋',
        title: 'Transparent Pricing',
        desc: 'Clear, upfront treatment plans with no hidden charges. We discuss costs before beginning any treatment.',
    },
    {
        icon: '🚑',
        title: 'Emergency Availability',
        desc: 'Emergency dental cases are given priority appointments during clinic hours.',
    },
];

// ================================================================
// SECTION 5: GALLERY DATA
// ================================================================

const GALLERY_ITEMS = [
    { icon: '🏥', label: 'Clinic Reception' },
    { icon: '🪑', label: 'Treatment Room' },
    { icon: '🔬', label: 'Sterilisation Room' },
    { icon: '💻', label: 'Digital X-ray' },
    { icon: '😁', label: 'After Treatment' },
    { icon: '🦷', label: 'Dental Equipment' },
    { icon: '🌟', label: 'Smile Makeover' },
    { icon: '👨‍⚕️', label: 'Doctor at Work' },
];

// ================================================================
// SECTION 6: REVIEWS DATA
// ================================================================

const REVIEWS = [
    {
        stars: 5,
        text: '"I was terrified of dentists before visiting SmileCare. Dr. [Name] was incredibly patient and explained every step. The root canal was completely painless. I haven\'t looked back since!"',
        author: 'Rahul M.',
        date: 'July 2026',
        initial: 'R',
    },
    {
        stars: 5,
        text: '"Brought my 6-year-old for her first dental visit. The team was so gentle and made it a positive experience. My daughter was not scared at all!"',
        author: 'Meena S.',
        date: 'August 2026',
        initial: 'M',
    },
    {
        stars: 5,
        text: '"Excellent clinic. Clean, modern, and professional. Had my teeth whitening done here. The results are fantastic. Highly recommend to everyone."',
        author: 'Ankit P.',
        date: 'June 2026',
        initial: 'A',
    },
];

// ================================================================
// SECTION 7: DOM UTILITIES
// ================================================================

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function waURL(number, message = '') {
    return `https://wa.me/${number}${message ? '?text=' + encodeURIComponent(message) : ''}`;
}

function setEl(id, value, isHTML = false) {
    const el = $(id);
    if (!el) return;
    if (isHTML) el.innerHTML = value;
    else el.textContent = value;
}

// ================================================================
// SECTION 8: POPULATE BUSINESS INFO
// ================================================================

function populateBusiness() {
    // Names
    $$('#header-business-name, #footer-business-name').forEach(el => { el.textContent = BUSINESS.name; });

    setEl('#footer-tagline', BUSINESS.tagline);
    setEl('#loc-address', BUSINESS.address);
    setEl('#loc-hours', BUSINESS.openingHours, true);
    setEl('#footer-address', BUSINESS.address);
    setEl('#footer-copyright', `© ${BUSINESS.year} ${BUSINESS.name}. All rights reserved.`);

    // Phone links
    const tel = `tel:${BUSINESS.phone.replace(/\s/g, '')}`;
    $$('#header-call-btn, #hero-call-btn, #contact-call-btn, #floating-call-btn, #appt-call-fallback').forEach(el => { if (el) el.href = tel; });

    const locPhone = $('#loc-phone');
    if (locPhone) { locPhone.href = tel; locPhone.textContent = BUSINESS.phone; }

    const fPhone = $('#footer-phone');
    if (fPhone) { fPhone.href = tel; fPhone.textContent = BUSINESS.phone; }

    setEl('#contact-phone-label', BUSINESS.phone);

    // WhatsApp links
    const defaultWA = waURL(BUSINESS.whatsapp, `Hi! I found your website and would like to enquire about a dental appointment.`);
    $$('#floating-whatsapp-btn, #loc-whatsapp-btn, #contact-whatsapp-btn').forEach(el => { if (el) el.href = defaultWA; });

    // Directions
    const dirBtn = $('#directions-btn');
    if (dirBtn) dirBtn.href = BUSINESS.mapsUrl;

    // Map embed
    if (BUSINESS.mapsEmbedUrl) {
        const mapContainer = $('#map-embed-container');
        if (mapContainer) {
            const iframe = document.createElement('iframe');
            iframe.src = BUSINESS.mapsEmbedUrl;
            iframe.title = `${BUSINESS.name} location map`;
            iframe.loading = 'lazy';
            iframe.allowFullscreen = true;
            iframe.referrerPolicy = 'no-referrer-when-downgrade';
            iframe.style.cssText = 'width:100%;height:340px;border:none;border-radius:20px;';
            mapContainer.innerHTML = '';
            mapContainer.appendChild(iframe);
        }
    }

    // Google Review
    if (BUSINESS.googleReviewUrl) {
        $$('#google-review-btn, #appt-review-btn').forEach(el => {
            if (el) { el.href = BUSINESS.googleReviewUrl; el.style.display = 'inline-flex'; }
        });
    }

    // Social
    buildSocialLinks();
}

function buildSocialLinks() {
    const socials = [
        { label: '📸 Instagram', href: BUSINESS.instagram },
        { label: '👍 Facebook', href: BUSINESS.facebook },
        { label: '▶️ YouTube', href: BUSINESS.youtube },
    ].filter(s => s.href);

    const markup = socials.map(s =>
        `<a href="${s.href}" class="social-link" target="_blank" rel="noopener noreferrer">${s.label}</a>`
    ).join('');

    $$('#social-links, #footer-social').forEach(el => { if (el) el.innerHTML = markup; });
}

// ================================================================
// SECTION 9: POPULATE DOCTOR
// ================================================================

function populateDoctor() {
    setEl('#doctor-name', DOCTOR.name);
    setEl('#doctor-degree', DOCTOR.degree);
    setEl('#doctor-bio', DOCTOR.bio);
    setEl('#doctor-badge-text', DOCTOR.badgeText);
    setEl('#hero-stat-years', DOCTOR.yearsExperience);
    setEl('#hero-stat-patients', DOCTOR.patientCount);
    setEl('#hero-doctor-line', '', true);  // repopulate
    const heroLine = $('#hero-doctor-line');
    if (heroLine) heroLine.innerHTML = `Compassionate dental care by <strong>${DOCTOR.name}</strong> — combining clinical expertise with a gentle, patient-first approach.`;

    const credEl = $('#doctor-credentials');
    if (credEl) {
        credEl.innerHTML = DOCTOR.credentials.map(c =>
            `<div class="credential"><span class="cred-icon" aria-hidden="true">${c.icon}</span><span>${c.text}</span></div>`
        ).join('');
    }
}

// ================================================================
// SECTION 10: RENDER SERVICES
// ================================================================

function renderServices() {
    const grid = $('#services-grid');
    if (!grid) return;
    grid.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      <div class="service-icon" aria-hidden="true">${s.icon}</div>
      <h3 class="service-name">${s.name}</h3>
      <p class="service-desc">${s.desc}</p>
      <a href="${waURL(BUSINESS.whatsapp, `Hi! I would like to know more about ${s.name}.`)}"
         class="service-cta" target="_blank" rel="noopener noreferrer" aria-label="Enquire about ${s.name}">
        Enquire →
      </a>
    </div>
  `).join('');
}

// ================================================================
// SECTION 11: RENDER WHY US
// ================================================================

function renderWhyUs() {
    const grid = $('#why-grid');
    if (!grid) return;
    grid.innerHTML = WHY_US.map(w => `
    <div class="why-card">
      <div class="why-icon" aria-hidden="true">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `).join('');
}

// ================================================================
// SECTION 12: RENDER GALLERY
// ================================================================

function renderGallery() {
    const grid = $('#gallery-grid');
    if (!grid) return;
    grid.innerHTML = GALLERY_ITEMS.map(item => `
    <div class="gallery-item" role="img" aria-label="${item.label}">
      <span style="font-size:3.5rem;" aria-hidden="true">${item.icon}</span>
      <div class="gallery-overlay" aria-hidden="true">
        <span class="gallery-overlay-text">${item.label}</span>
      </div>
    </div>
  `).join('');
}

// ================================================================
// SECTION 13: RENDER REVIEWS
// ================================================================

function renderReviews() {
    const grid = $('#reviews-grid');
    if (!grid) return;
    grid.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars" aria-label="${r.stars} stars">${'⭐'.repeat(r.stars)}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <div class="review-avatar" aria-hidden="true">${r.initial}</div>
        <div class="review-author-info">
          <strong>${r.author}</strong>
          <span>${r.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ================================================================
// SECTION 14: HEADER / MOBILE NAV / FLOATING CTA
// ================================================================

function initHeader() {
    const header = $('#site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function initMobileNav() {
    const toggle = $('#nav-toggle');
    const header = $('#site-header');
    if (!toggle) return;

    const mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-nav';
    mobileNav.id = 'mobile-nav';
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    mobileNav.innerHTML = `
    <ul class="nav-list">
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#doctor" class="nav-link">Doctor</a></li>
      <li><a href="#services" class="nav-link">Services</a></li>
      <li><a href="#why-us" class="nav-link">Why Us</a></li>
      <li><a href="#reviews" class="nav-link">Reviews</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <div class="mobile-nav-cta">
      <a href="#appointment" class="btn btn-primary btn-full">Book Appointment</a>
      <a href="tel:${BUSINESS.phone.replace(/\s/g, '')}" class="btn btn-ghost btn-full">📞 Call Clinic</a>
    </div>
  `;
    document.body.insertBefore(mobileNav, header.nextSibling);

    let open = false;
    toggle.addEventListener('click', () => {
        open = !open;
        toggle.classList.toggle('open', open);
        mobileNav.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('.nav-link, .btn').forEach(link => {
        link.addEventListener('click', () => {
            open = false;
            toggle.classList.remove('open');
            mobileNav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

function initFloatingCTA() {
    const cta = $('#floating-cta');
    if (!cta) return;
    const hero = $('#hero');
    const onScroll = () => {
        if (!hero) return;
        cta.classList.toggle('hidden', hero.getBoundingClientRect().bottom > 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ================================================================
// SECTION 15: SCROLL REVEAL
// ================================================================

function initReveal() {
    const observer = new IntersectionObserver(
        entries => entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
        }),
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    $$('.reveal').forEach(el => observer.observe(el));
}

// ================================================================
// SECTION 16: FORM VALIDATION
// ================================================================

function validateName(val) { return val.trim().length >= 2; }
function validatePhone(val) { return /^[6-9]\d{9}$/.test(val.replace(/\s|-/g, '')); }
function validateRequired(val) { return val.trim().length > 0; }
function validateDate(val) { return val && new Date(val) >= new Date(new Date().toDateString()); }

function showFieldError(inputId, errorId, msg) {
    const input = $('#' + inputId);
    const error = $('#' + errorId);
    if (input) input.classList.add('is-invalid');
    if (error) error.textContent = msg;
}

function clearFieldError(inputId, errorId) {
    const input = $('#' + inputId);
    const error = $('#' + errorId);
    if (input) input.classList.remove('is-invalid');
    if (error) error.textContent = '';
}

function setFormLoading(btn, loading) {
    const text = btn.querySelector('.btn-text');
    const spinner = btn.querySelector('.btn-loading');
    btn.disabled = loading;
    if (text) text.style.display = loading ? 'none' : 'inline';
    if (spinner) spinner.style.display = loading ? 'inline' : 'none';
}

function generateId(prefix) {
    return prefix + '-' + Date.now().toString(36).toUpperCase();
}

// ================================================================
// SECTION 17: APPS SCRIPT SUBMISSION
// ================================================================

async function submitToAppsScript(data) {
    if (!BUSINESS.appsScriptUrl) {
        await new Promise(r => setTimeout(r, 1200));
        return { success: true, submissionId: generateId('DEMO'), demo: true };
    }
    const res = await fetch(BUSINESS.appsScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        redirect: 'follow',
    });
    if (!res.ok) throw new Error('Network error: ' + res.status);
    return await res.json();
}

// ================================================================
// SECTION 18: APPOINTMENT FORM
// ================================================================

function initAppointmentForm() {
    const form = $('#appointment-form');
    const submitBtn = $('#appt-submit');
    const successDiv = $('#appt-success');
    const errorDiv = $('#appt-error');
    const refEl = $('#appt-ref');
    const waFallback = $('#appt-whatsapp-fallback');
    const callFallback = $('#appt-call-fallback');

    if (!form) return;

    if (callFallback) callFallback.href = `tel:${BUSINESS.phone.replace(/\s/g, '')}`;

    const fields = [
        { input: 'appt-name', error: 'appt-name-error', check: validateName, msg: 'Please enter your full name.' },
        { input: 'appt-phone', error: 'appt-phone-error', check: validatePhone, msg: 'Please enter a valid 10-digit mobile number.' },
        { input: 'appt-service', error: 'appt-service-error', check: validateRequired, msg: 'Please select a service.' },
        { input: 'appt-date', error: 'appt-date-error', check: validateDate, msg: 'Please select a valid future date.' },
        { input: 'appt-time', error: 'appt-time-error', check: validateRequired, msg: 'Please select a preferred time.' },
    ];

    fields.forEach(({ input, error, check }) => {
        const el = $('#' + input);
        if (!el) return;
        el.addEventListener('blur', () => {
            const field = fields.find(f => f.input === input);
            if (!check(el.value)) showFieldError(input, error, field.msg);
            else clearFieldError(input, error);
        });
        el.addEventListener('input', () => clearFieldError(input, error));
    });

    let submitting = false;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitting) return;

        let valid = true;
        fields.forEach(({ input, error, check, msg }) => {
            const el = $('#' + input);
            if (!el) return;
            if (!check(el.value)) { showFieldError(input, error, msg); valid = false; }
            else clearFieldError(input, error);
        });
        if (!valid) { form.querySelector('.is-invalid')?.focus(); return; }

        submitting = true;
        setFormLoading(submitBtn, true);
        errorDiv.style.display = 'none';

        const payload = {
            formType: 'appointment',
            name: $('#appt-name').value.trim(),
            phone: $('#appt-phone').value.trim(),
            service: $('#appt-service').value,
            preferredDate: $('#appt-date').value,
            preferredTime: $('#appt-time').value,
            message: $('#appt-message')?.value.trim() || '',
            source: 'Website — Dental',
            timestamp: new Date().toISOString(),
        };

        if (waFallback) {
            const waMsg = `Hi! Appointment Request\nName: ${payload.name}\nPhone: ${payload.phone}\nService: ${payload.service}\nDate: ${payload.preferredDate}\nTime: ${payload.preferredTime}\nNotes: ${payload.message}`;
            waFallback.href = waURL(BUSINESS.whatsapp, waMsg);
        }

        try {
            const result = await submitToAppsScript(payload);
            form.style.display = 'none';
            successDiv.style.display = 'block';
            if (refEl) refEl.textContent = result.submissionId ? `Reference: ${result.submissionId}` : '';
        } catch (err) {
            console.error('Appointment form error:', err);
            errorDiv.style.display = 'block';
        } finally {
            setFormLoading(submitBtn, false);
            submitting = false;
        }
    });
}

// ================================================================
// SECTION 19: CONTACT FORM
// ================================================================

function initContactForm() {
    const form = $('#contact-form');
    const submitBtn = $('#contact-submit');
    const successDiv = $('#contact-success');
    const errorDiv = $('#contact-error');
    const refEl = $('#contact-ref');
    const waFallback = $('#contact-whatsapp-fallback');

    if (!form) return;

    const fields = [
        { input: 'contact-name', error: 'contact-name-error', check: validateName, msg: 'Please enter your full name.' },
        { input: 'contact-phone', error: 'contact-phone-error', check: validatePhone, msg: 'Please enter a valid 10-digit mobile number.' },
        { input: 'contact-message', error: 'contact-message-error', check: validateRequired, msg: 'Please enter your message.' },
    ];

    fields.forEach(({ input, error, check }) => {
        const el = $('#' + input);
        if (!el) return;
        el.addEventListener('blur', () => {
            const field = fields.find(f => f.input === input);
            if (!check(el.value)) showFieldError(input, error, field.msg);
            else clearFieldError(input, error);
        });
        el.addEventListener('input', () => clearFieldError(input, error));
    });

    let submitting = false;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitting) return;

        let valid = true;
        fields.forEach(({ input, error, check, msg }) => {
            const el = $('#' + input);
            if (!el) return;
            if (!check(el.value)) { showFieldError(input, error, msg); valid = false; }
            else clearFieldError(input, error);
        });
        if (!valid) { form.querySelector('.is-invalid')?.focus(); return; }

        submitting = true;
        setFormLoading(submitBtn, true);
        errorDiv.style.display = 'none';

        const payload = {
            formType: 'contact',
            name: $('#contact-name').value.trim(),
            phone: $('#contact-phone').value.trim(),
            message: $('#contact-message').value.trim(),
            source: 'Website — Dental',
            timestamp: new Date().toISOString(),
        };

        if (waFallback) {
            const waMsg = `Hi! I'm reaching out via your website.\nName: ${payload.name}\nPhone: ${payload.phone}\nMessage: ${payload.message}`;
            waFallback.href = waURL(BUSINESS.whatsapp, waMsg);
        }

        try {
            const result = await submitToAppsScript(payload);
            form.style.display = 'none';
            successDiv.style.display = 'block';
            if (refEl) refEl.textContent = result.submissionId ? `Reference: ${result.submissionId}` : '';
        } catch (err) {
            console.error('Contact form error:', err);
            errorDiv.style.display = 'block';
        } finally {
            setFormLoading(submitBtn, false);
            submitting = false;
        }
    });
}

// ================================================================
// SECTION 20: MIN DATE
// ================================================================

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    $$('input[type="date"]').forEach(inp => { inp.min = today; });
}

// ================================================================
// SECTION 21: INITIALISE
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    populateBusiness();
    populateDoctor();
    renderServices();
    renderWhyUs();
    renderGallery();
    renderReviews();
    initHeader();
    initMobileNav();
    initFloatingCTA();
    initReveal();
    initAppointmentForm();
    initContactForm();
    setMinDate();
});

/* ================================================================
   WINIKS — SALON MASTER TEMPLATE
   script.js
   ================================================================ */

'use strict';

const BUSINESS = {
    name: 'Classone Professional Unisex Salon',
    tagline: 'Elevate your signature style.',
    phone: '+91 98765 43210',
    whatsapp: '919876543210',
    address: 'Vishrambag, Sangli, Maharashtra 416415',
    mapsUrl: 'https://maps.google.com/?q=Shankar+Dange+Classone+Professional+Unisex+Salon+Sangli',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.528574883907!2d74.57479857597!3d16.86390718393665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11928a9e18369%3A0xe2af8e3f381c407f!2sShankar%20Dange&#39;s%20Classone%20Professional%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    email: 'hello@classonesalon.in',
    openingHours: 'Mon–Sun: 10:00 AM – 9:00 PM',
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: '',
    googleReviewUrl: 'https://g.page/r/review',
    appsScriptUrl: '', // Leave empty for demo mode
    year: new Date().getFullYear(),
};

const SERVICES = [
    { icon: '✂️', name: 'Haircut & Styling', desc: 'Precision cuts and trendy styling tailored to your face shape.' },
    { icon: '🎨', name: 'Hair Color', desc: 'Highlights, balayage, global coloring and root touch-ups using premium products.' },
    { icon: '💆‍♀️', name: 'Facial & Skin Care', desc: 'Rejuvenating facials, cleanup, threading, and advanced skin treatments.' },
    { icon: '💅', name: 'Manicure / Pedicure', desc: 'Relaxing hand and foot spa treatments for soft, beautiful skin.' },
    { icon: '👰', name: 'Bridal Makeup', desc: 'Flawless HD/Airbrush makeup packages for brides and bridesmaids.' },
    { icon: '🌿', name: 'Spa & Massage', desc: 'Relaxing hair spa and head oil massage to relieve stress.' }
];

const TEAM = [
    { icon: '🧑‍🎨', name: 'Shankar Dange', role: 'Creative Director' },
    { icon: '👩‍🎤', name: 'Priya K.', role: 'Senior Stylist' },
    { icon: '🧖‍♀️', name: 'Neha S.', role: 'Skin Expert' }
];

const GALLERY_ITEMS = [
    { icon: '📸', label: 'Bridal Makeup' },
    { icon: '✂️', label: 'Men\'s Styling' },
    { icon: '🎨', label: 'Hair Color' },
    { icon: '💆‍♀️', label: 'Facial Setup' },
];

const REVIEWS = [
    { stars: 5, text: '"Amazing service! The stylists really understand what you want. The ambiance is very premium and relaxing."', author: 'Rahul P.' },
    { stars: 5, text: '"Got my hair colored here. The products they use are top notch. Highly recommend Classone!"', author: 'Sneha M.' },
    { stars: 5, text: '"Best unisex salon in Sangli. Excellent hygiene and very professional staff."', author: 'Vikram D.' }
];

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

function waURL(num, msg = '') { return `https://wa.me/${num}${msg ? '?text=' + encodeURIComponent(msg) : ''}`; }
function setEl(id, val, isH = false) { const el = $(id); if (el) { isH ? el.innerHTML = val : el.textContent = val; } }

function initData() {
    $$('#header-business-name, #footer-business-name').forEach(e => e.textContent = BUSINESS.name);
    setEl('#footer-tagline', BUSINESS.tagline);
    setEl('#loc-address', BUSINESS.address);
    setEl('#loc-hours', BUSINESS.openingHours);
    setEl('#footer-address', BUSINESS.address.split(',')[0]);
    setEl('#footer-copyright', `© ${BUSINESS.year} ${BUSINESS.name}. All rights reserved.`);

    const tel = `tel:${BUSINESS.phone.replace(/\s/g, '')}`;
    $$('#floating-call-btn, #loc-phone, #footer-phone, #appt-call-fallback').forEach(e => { if (e) { e.href = tel; if (!e.id.includes('btn') && !e.id.includes('fallback')) e.textContent = BUSINESS.phone; } });

    const wa = waURL(BUSINESS.whatsapp, 'Hi, I want to book an appointment.');
    $$('#floating-whatsapp-btn, #loc-whatsapp-btn, #appt-whatsapp-fallback').forEach(e => { if (e) e.href = wa; });

    const dBtn = $('#directions-btn');
    if (dBtn) dBtn.href = BUSINESS.mapsUrl;

    const map = $('#map-embed-container');
    if (map && BUSINESS.mapsEmbedUrl) { map.innerHTML = `<iframe src="${BUSINESS.mapsEmbedUrl}" style="width:100%;height:300px;border:0;" allowfullscreen loading="lazy"></iframe>`; }

    const rBtn = $('#google-review-btn');
    if (rBtn && BUSINESS.googleReviewUrl) { rBtn.href = BUSINESS.googleReviewUrl; rBtn.style.display = 'inline-flex'; }

    const sg = $('#services-grid');
    if (sg) sg.innerHTML = SERVICES.map(s => `<div class="service-card"><div class="service-icon">${s.icon}</div><div class="service-name">${s.name}</div><div class="service-desc">${s.desc}</div></div>`).join('');

    const tg = $('#team-grid');
    if (tg) tg.innerHTML = TEAM.map(t => `<div class="team-card"><div class="team-img">${t.icon}</div><div class="team-name">${t.name}</div><div class="team-role">${t.role}</div></div>`).join('');

    const gg = $('#gallery-grid');
    if (gg) gg.innerHTML = GALLERY_ITEMS.map(g => `<div class="gallery-item">${g.icon}</div>`).join('');

    const rg = $('#reviews-grid');
    if (rg) rg.innerHTML = REVIEWS.map(r => `<div class="review-card"><div class="review-stars">${'★'.repeat(r.stars)}</div><div class="review-text">${r.text}</div><div class="review-author">${r.author}</div></div>`).join('');
}

function initUX() {
    const h = $('#site-header');
    window.addEventListener('scroll', () => { if (h) h.style.boxShadow = window.scrollY > 20 ? '0 5px 15px rgba(0,0,0,0.5)' : 'none'; });

    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } }));
    $$('.reveal').forEach(el => obs.observe(el));
}

function initForms() {
    const f = $('#appointment-form');
    if (!f) return;
    f.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = $('#appt-submit');
        const btext = $('.btn-text', btn);
        const bload = $('.btn-loading', btn);
        btn.disabled = true; btext.style.display = 'none'; bload.style.display = 'inline';

        const payload = {
            formType: 'appointment',
            name: $('#appt-name').value,
            phone: $('#appt-phone').value,
            service: $('#appt-service').value,
            preferredDate: $('#appt-date').value,
            preferredTime: $('#appt-time').value
        };

        if (!BUSINESS.appsScriptUrl) {
            setTimeout(() => {
                f.style.display = 'none';
                $('#appt-success').style.display = 'block';
                $('#appt-ref').textContent = 'DEMO-' + Date.now();
            }, 1000);
            return;
        }

        try {
            await fetch(BUSINESS.appsScriptUrl, { method: 'POST', body: JSON.stringify(payload) });
            f.style.display = 'none';
            $('#appt-success').style.display = 'block';
        } catch {
            $('#appt-error').style.display = 'block';
            let waMsg = `Hi, I want to book: ${payload.service} on ${payload.preferredDate} at ${payload.preferredTime}. Name: ${payload.name}, Phone: ${payload.phone}`;
            $('#appt-whatsapp-fallback').href = waURL(BUSINESS.whatsapp, waMsg);
        } finally {
            btn.disabled = false; btext.style.display = 'inline'; bload.style.display = 'none';
        }
    });

    const d = $('#appt-date');
    if (d) d.min = new Date().toISOString().split('T')[0];
}

document.addEventListener('DOMContentLoaded', () => { initData(); initUX(); initForms(); });

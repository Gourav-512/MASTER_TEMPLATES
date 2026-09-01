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
    { img: 'https://images.unsplash.com/photo-1595089304381-8b010c7104b2?auto=format&fit=crop&q=80&w=300', name: 'Shankar Dange', role: 'Creative Director' },
    { img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=300', name: 'Priya K.', role: 'Senior Stylist' },
    { img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=300', name: 'Neha S.', role: 'Skin Expert' }
];

const GALLERY_ITEMS = [
    { img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=500', label: 'Bridal Makeup' },
    { img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=500', label: 'Men\'s Styling' },
    { img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=500', label: 'Hair Color' },
    { img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500', label: 'Facial Setup' },
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
    if (tg) tg.innerHTML = TEAM.map(t => `<div class="team-card"><div class="team-img"><img src="${t.img}" alt="${t.name}" crossorigin="anonymous" /></div><div class="team-name">${t.name}</div><div class="team-role">${t.role}</div></div>`).join('');

    const gg = $('#gallery-grid');
    if (gg) gg.innerHTML = GALLERY_ITEMS.map(g => `<div class="gallery-item"><img src="${g.img}" alt="${g.label}" crossorigin="anonymous" /><div class="overlay"><span>${g.label}</span></div></div>`).join('');

    const rg = $('#reviews-grid');
    if (rg) rg.innerHTML = REVIEWS.map(r => `<div class="review-card"><div class="review-stars">${'★'.repeat(r.stars)}</div><div class="review-text">${r.text}</div><div class="review-author"><div class="author-avatar">${r.author.charAt(0)}</div><div class="author-name">${r.author}</div></div></div>`).join('');
}

function initUX() {
    const h = $('#site-header');
    window.addEventListener('scroll', () => {
        if (h) {
            if (window.scrollY > 20) h.classList.add('scrolled');
            else h.classList.remove('scrolled');
        }
    });

    const obs = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
    }), { threshold: 0.1 });
    $$('.reveal, .stagger-item, .mask-reveal').forEach(el => obs.observe(el));
}

function initInteractions() {
    // Parallax Hero
    const scene = $('#parallax-scene');
    if (scene) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;

            $$('[data-speed]', scene).forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed'));
                const xPos = x * speed * 100;
                const yPos = y * speed * 100;
                el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
            });
        });
    }

    // Tilt cards
    $$('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const calcX = (y - rect.height / 2) / 10;
            const calcY = -(x - rect.width / 2) / 10;
            card.style.transform = `perspective(1000px) rotateX(${calcX}deg) rotateY(${calcY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // Magnetic buttons
    $$('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const h = rect.width / 2;
            const v = rect.height / 2;
            const x = (e.clientX - rect.left) - h;
            const y = (e.clientY - rect.top) - v;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            const span = btn.querySelector('.btn-text');
            if (span) span.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
            const span = btn.querySelector('.btn-text');
            if (span) span.style.transform = 'translate(0, 0)';
        });
    });
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

document.addEventListener('DOMContentLoaded', () => { initData(); initUX(); initInteractions(); initForms(); });

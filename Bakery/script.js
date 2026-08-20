/* ================================================================
   WINIKS — BAKERY MASTER TEMPLATE
   script.js
   ================================================================ */

'use strict';

// ================================================================
// SECTION 1: BUSINESS CONFIGURATION
// ================================================================
// ⚠️  CUSTOMISE THIS SECTION FOR EACH CLIENT.
// Everything else in the site references these values.
// ================================================================

const BUSINESS = {
  name:        'Sweet Cravings Bakery',
  tagline:     'Handcrafted with love, delivered with care.',
  phone:       '+91 98765 43210',     // ← Replace with client's phone
  whatsapp:    '919876543210',        // ← Replace with client's WhatsApp (no + or spaces)
  address:     '12, Main Street, [City], [State] — 411001',
  mapsUrl:     'https://maps.google.com/?q=[Business+Name]+[City]', // ← Directions link
  mapsEmbedUrl: '',                   // ← Google Maps embed URL (from Maps → Share → Embed)
  email:       'hello@sweetcravings.in',
  openingHours:'Mon–Sat: 8:00 AM – 9:00 PM · Sun: 9:00 AM – 6:00 PM',
  instagram:   'https://instagram.com/sweetcravings', // ← Set to '' to hide
  facebook:    'https://facebook.com/sweetcravings',  // ← Set to '' to hide
  youtube:     '',                    // ← Set to '' to hide
  googleReviewUrl: '',                // ← e.g. "https://g.page/r/XXXXX/review"  Set to '' to hide
  appsScriptUrl:   '',               // ← Paste deployed Apps Script Web App URL here
  year:        new Date().getFullYear(),
};

// ================================================================
// SECTION 2: PRODUCT DATA
// ================================================================
// Add / remove / change products here. Icons are emoji.
// ================================================================

const PRODUCTS = {
  cakes: [
    {
      icon: '🎂',
      name: 'Birthday Cakes',
      desc: 'Custom designed birthday cakes in any flavour — chocolate, vanilla, red velvet, mango and more.',
      price: 'From ₹599',
      wa: 'Hi! I would like to enquire about a birthday cake.',
    },
    {
      icon: '💍',
      name: 'Wedding Cakes',
      desc: 'Multi-tier masterpieces crafted specifically for your special day. Advance booking required.',
      price: 'From ₹3,999',
      wa: 'Hi! I would like to enquire about a wedding cake.',
    },
    {
      icon: '💫',
      name: 'Cartoon Theme Cakes',
      desc: 'Bring your child\'s favourite character to life — Spider-Man, Peppa Pig, Unicorn and more.',
      price: 'From ₹799',
      wa: 'Hi! I would like to enquire about a cartoon theme cake.',
    },
    {
      icon: '🌸',
      name: 'Anniversary Cakes',
      desc: 'Celebrate love with elegant designs. Personalised messages on every cake.',
      price: 'From ₹699',
      wa: 'Hi! I would like to enquire about an anniversary cake.',
    },
  ],
  pastries: [
    {
      icon: '🥐',
      name: 'Butter Croissants',
      desc: 'Classic flaky, buttery croissants baked fresh every morning. Best enjoyed warm.',
      price: '₹60 each',
      wa: 'Hi! I would like to order butter croissants.',
    },
    {
      icon: '🥧',
      name: 'Fruit Tarts',
      desc: 'Crisp pastry shells filled with custard cream and topped with seasonal fruits.',
      price: 'From ₹120',
      wa: 'Hi! I would like to order fruit tarts.',
    },
    {
      icon: '🍩',
      name: 'Glazed Donuts',
      desc: 'Light and fluffy donuts with premium chocolate, strawberry, or vanilla glaze.',
      price: '₹45 each',
      wa: 'Hi! I would like to order glazed donuts.',
    },
    {
      icon: '🥮',
      name: 'Danish Pastries',
      desc: 'Laminated pastry with sweet fillings — cinnamon, almond, or berry.',
      price: 'From ₹80',
      wa: 'Hi! I would like to order Danish pastries.',
    },
  ],
  cookies: [
    {
      icon: '🍪',
      name: 'Chocolate Chip Cookies',
      desc: 'The classic American-style cookie — crispy edges, chewy centre, loaded with chocolate chips.',
      price: '₹35 each / ₹380 dozen',
      wa: 'Hi! I would like to order chocolate chip cookies.',
    },
    {
      icon: '🎉',
      name: 'Festive Cookies',
      desc: 'Decorated sugar cookies for every festival and occasion. Custom designs available.',
      price: 'From ₹50 each',
      wa: 'Hi! I would like to order festive cookies.',
    },
    {
      icon: '🍫',
      name: 'Brownies',
      desc: 'Fudgy, rich chocolate brownies. Available plain or with walnuts and cream cheese swirl.',
      price: '₹55 each',
      wa: 'Hi! I would like to order brownies.',
    },
    {
      icon: '🧁',
      name: 'Macarons',
      desc: 'Delicate French almond macarons in seasonal flavours. Perfect for gifting.',
      price: '₹80 each',
      wa: 'Hi! I would like to order macarons.',
    },
  ],
  cupcakes: [
    {
      icon: '🧁',
      name: 'Classic Cupcakes',
      desc: 'Moist, fluffy cupcakes topped with swirls of fresh buttercream.',
      price: '₹75 each / ₹720 dozen',
      wa: 'Hi! I would like to order cupcakes.',
    },
    {
      icon: '🌈',
      name: 'Rainbow Cupcakes',
      desc: 'Colourful layered cupcakes — a favourite at birthday parties and celebrations.',
      price: '₹95 each',
      wa: 'Hi! I would like to order rainbow cupcakes.',
    },
    {
      icon: '🎃',
      name: 'Theme Cupcakes',
      desc: 'Custom fondant-decorated cupcakes in any theme. Minimum order 6 pieces.',
      price: 'From ₹110 each',
      wa: 'Hi! I would like to order theme cupcakes.',
    },
    {
      icon: '💝',
      name: 'Cupcake Gift Boxes',
      desc: 'Premium packaged cupcake boxes — perfect for corporate gifting and special occasions.',
      price: 'From ₹450 (6 pcs)',
      wa: 'Hi! I would like to enquire about cupcake gift boxes.',
    },
  ],
};

// ================================================================
// SECTION 3: GALLERY DATA
// ================================================================

const GALLERY_ITEMS = [
  { icon: '🎂', label: 'Custom Birthday Cake' },
  { icon: '💍', label: 'Wedding Tier Cake' },
  { icon: '🧁', label: 'Cupcake Selection' },
  { icon: '🥐', label: 'Morning Pastries' },
  { icon: '🍪', label: 'Cookie Assortment' },
  { icon: '🌸', label: 'Floral Cake' },
  { icon: '🎉', label: 'Celebration Cake' },
  { icon: '🍫', label: 'Chocolate Brownies' },
];

// ================================================================
// SECTION 4: REVIEWS DATA
// ================================================================
// Use real reviews provided by the client.
// These are placeholder demo reviews.
// ================================================================

const REVIEWS = [
  {
    stars: 5,
    text: '"Ordered a custom birthday cake for my daughter\'s 5th birthday — Peppa Pig theme. The cake was absolutely stunning and tasted incredible. Everyone at the party was amazed!"',
    author: 'Priya S.',
    date: 'July 2026',
    initial: 'P',
  },
  {
    stars: 5,
    text: '"Best bakery in [City] without a doubt. The wedding cake they designed for us was beyond what we imagined. Professional, punctual, and the flavour was divine."',
    author: 'Rahul & Meera M.',
    date: 'June 2026',
    initial: 'R',
  },
  {
    stars: 5,
    text: '"I order the morning pastry box every week. The croissants are as good as anything I\'ve had abroad. Fresh, flaky, and delivered on time every single morning."',
    author: 'Ananya K.',
    date: 'August 2026',
    initial: 'A',
  },
];

// ================================================================
// SECTION 5: DOM UTILITIES
// ================================================================

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function setLink(id, href, label) {
  const el = $(id);
  if (!el) return;
  if (href) {
    el.href = href;
    if (label) el.textContent = label;
  }
}

function waURL(number, message = '') {
  return `https://wa.me/${number}${message ? '?text=' + encodeURIComponent(message) : ''}`;
}

// ================================================================
// SECTION 6: POPULATE BUSINESS INFO
// ================================================================

function populateBusiness() {
  // Name
  $$('#header-business-name, #footer-business-name').forEach(el => {
    el.textContent = BUSINESS.name;
  });

  // Tagline
  const tagEl = $('#footer-tagline');
  if (tagEl) tagEl.textContent = BUSINESS.tagline;

  // Address / hours / phone
  const locAddress = $('#loc-address');
  const locHours   = $('#loc-hours');
  const locPhone   = $('#loc-phone');
  if (locAddress) locAddress.textContent = BUSINESS.address;
  if (locHours)   locHours.innerHTML = BUSINESS.openingHours;
  if (locPhone) {
    locPhone.textContent = BUSINESS.phone;
    locPhone.href = `tel:${BUSINESS.phone.replace(/\s/g,'')}`;
  }

  // Footer address, phone
  const fAddress = $('#footer-address');
  if (fAddress) fAddress.textContent = BUSINESS.address;

  const fPhone = $('#footer-phone');
  if (fPhone) {
    fPhone.textContent = BUSINESS.phone;
    fPhone.href = `tel:${BUSINESS.phone.replace(/\s/g,'')}`;
  }

  // Copyright
  const copy = $('#footer-copyright');
  if (copy) copy.textContent = `© ${BUSINESS.year} ${BUSINESS.name}. All rights reserved.`;

  // Call buttons
  $$('#floating-call-btn, #contact-call-btn, #loc-phone').forEach(el => {
    if (el && el.id !== 'loc-phone') el.href = `tel:${BUSINESS.phone.replace(/\s/g,'')}`;
  });

  const contactPhoneLabel = $('#contact-phone-label');
  if (contactPhoneLabel) contactPhoneLabel.textContent = BUSINESS.phone;

  // WhatsApp buttons
  const defaultWA = waURL(BUSINESS.whatsapp, `Hi ${BUSINESS.name}! I found your website and would like to enquire.`);
  $$(
    '#hero-whatsapp-btn, #floating-whatsapp-btn, #loc-whatsapp-btn, #contact-whatsapp-btn'
  ).forEach(el => { if (el) el.href = defaultWA; });
  $$('.offer-whatsapp-btn').forEach(el => { el.href = defaultWA; });

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

  // Google Review button
  if (BUSINESS.googleReviewUrl) {
    $$('#google-review-btn, #enquiry-review-btn').forEach(el => {
      if (el) {
        el.href = BUSINESS.googleReviewUrl;
        el.style.display = 'inline-flex';
      }
    });
  }

  // Social links
  buildSocialLinks();
}

function buildSocialLinks() {
  const socials = [
    { key: 'instagram', label: '📸 Instagram', href: BUSINESS.instagram },
    { key: 'facebook',  label: '👍 Facebook',  href: BUSINESS.facebook  },
    { key: 'youtube',   label: '▶️ YouTube',   href: BUSINESS.youtube   },
  ].filter(s => s.href);

  const markup = socials.map(s =>
    `<a href="${s.href}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">${s.label}</a>`
  ).join('');

  $$('#social-links, #footer-social').forEach(el => {
    if (el) el.innerHTML = markup;
  });
}

// ================================================================
// SECTION 7: PRODUCTS
// ================================================================

function renderProducts(category = 'cakes') {
  const grid = $('#products-grid');
  if (!grid) return;
  const items = PRODUCTS[category] || [];
  grid.innerHTML = items.map(p => `
    <div class="product-card">
      <div class="product-img" aria-hidden="true"><span style="font-size:4rem;">${p.icon}</span></div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
      </div>
      <div class="product-footer">
        <span class="product-price">${p.price}</span>
        <a href="${waURL(BUSINESS.whatsapp, p.wa)}" class="btn btn-sm btn-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Enquire about ${p.name} on WhatsApp">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.504 5.829L0 24l6.335-1.482A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.493-5.187-1.355l-.373-.213-3.762.88.923-3.65-.232-.386A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Enquire
        </a>
      </div>
    </div>
  `).join('');
}

function initProductTabs() {
  const tabs = $$('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderProducts(tab.dataset.tab);
    });
  });
  renderProducts('cakes');
}

// ================================================================
// SECTION 8: GALLERY
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
// SECTION 9: REVIEWS
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
// SECTION 10: HEADER SCROLL BEHAVIOUR
// ================================================================

function initHeader() {
  const header = $('#site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ================================================================
// SECTION 11: MOBILE NAV
// ================================================================

function initMobileNav() {
  const toggle = $('#nav-toggle');
  const header = $('#site-header');
  if (!toggle) return;

  // Create mobile nav
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';
  mobileNav.id = 'mobile-nav';
  mobileNav.setAttribute('aria-label', 'Mobile navigation');
  mobileNav.innerHTML = `
    <ul class="nav-list">
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#products" class="nav-link">Products</a></li>
      <li><a href="#custom-cake" class="nav-link">Custom Cakes</a></li>
      <li><a href="#gallery" class="nav-link">Gallery</a></li>
      <li><a href="#reviews" class="nav-link">Reviews</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <div class="mobile-nav-cta">
      <a href="#custom-cake" class="btn btn-primary btn-full">Order Now</a>
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

  // Close on link click
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

// ================================================================
// SECTION 12: FLOATING CTA VISIBILITY
// ================================================================

function initFloatingCTA() {
  const cta = $('#floating-cta');
  if (!cta) return;
  const hero = $('#hero');
  const onScroll = () => {
    if (!hero) return;
    const heroBottom = hero.getBoundingClientRect().bottom;
    cta.classList.toggle('hidden', heroBottom > 0);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ================================================================
// SECTION 13: SCROLL REVEAL
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
// SECTION 14: FORM VALIDATION HELPERS
// ================================================================

function validateName(val)  { return val.trim().length >= 2; }
function validatePhone(val) { return /^[6-9]\d{9}$/.test(val.replace(/\s|-/g, '')); }
function validateRequired(val) { return val.trim().length > 0; }
function validateDate(val) {
  if (!val) return false;
  return new Date(val) >= new Date(new Date().toDateString());
}

function showFieldError(inputId, errorId, message) {
  const input = $('#' + inputId);
  const error = $('#' + errorId);
  if (input) input.classList.add('is-invalid');
  if (error) error.textContent = message;
}

function clearFieldError(inputId, errorId) {
  const input = $('#' + inputId);
  const error = $('#' + errorId);
  if (input) input.classList.remove('is-invalid');
  if (error) error.textContent = '';
}

function setFormLoading(submitBtn, loading) {
  const text    = submitBtn.querySelector('.btn-text');
  const spinner = submitBtn.querySelector('.btn-loading');
  submitBtn.disabled = loading;
  if (text)    text.style.display    = loading ? 'none' : 'inline';
  if (spinner) spinner.style.display = loading ? 'inline' : 'none';
}

function generateId(prefix) {
  return prefix + '-' + Date.now().toString(36).toUpperCase();
}

// ================================================================
// SECTION 15: FORM SUBMISSION TO APPS SCRIPT
// ================================================================

async function submitToAppsScript(data) {
  if (!BUSINESS.appsScriptUrl) {
    // Demo mode — simulate success
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
// SECTION 16: ENQUIRY FORM
// ================================================================

function initEnquiryForm() {
  const form        = $('#enquiry-form');
  const submitBtn   = $('#enquiry-submit');
  const successDiv  = $('#enquiry-success');
  const errorDiv    = $('#enquiry-error');
  const refEl       = $('#enquiry-ref');
  const waFallback  = $('#enquiry-whatsapp-fallback');

  if (!form) return;

  // Real-time validation
  const fields = [
    { input: 'enquiry-name',  error: 'enquiry-name-error',  check: validateName,     msg: 'Please enter your full name (min 2 characters).' },
    { input: 'enquiry-phone', error: 'enquiry-phone-error', check: validatePhone,    msg: 'Please enter a valid 10-digit Indian mobile number.' },
    { input: 'enquiry-cake-type', error: 'enquiry-cake-type-error', check: validateRequired, msg: 'Please select a cake type.' },
    { input: 'enquiry-date',  error: 'enquiry-date-error',  check: validateDate,     msg: 'Please select a valid future date.' },
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

    // Validate
    let valid = true;
    fields.forEach(({ input, error, check, msg }) => {
      const el = $('#' + input);
      if (!el) return;
      if (!check(el.value)) { showFieldError(input, error, msg); valid = false; }
      else clearFieldError(input, error);
    });
    if (!valid) {
      form.querySelector('.is-invalid')?.focus();
      return;
    }

    submitting = true;
    setFormLoading(submitBtn, true);
    errorDiv.style.display = 'none';

    const payload = {
      formType:      'cakeEnquiry',
      name:          $('#enquiry-name').value.trim(),
      phone:         $('#enquiry-phone').value.trim(),
      cakeType:      $('#enquiry-cake-type').value,
      preferredDate: $('#enquiry-date').value,
      quantity:      $('#enquiry-quantity')?.value.trim() || '',
      message:       $('#enquiry-message')?.value.trim() || '',
      source:        'Website — Bakery',
      timestamp:     new Date().toISOString(),
    };

    // WhatsApp fallback text
    if (waFallback) {
      const waMsg = `Hi! Custom Cake Enquiry\nName: ${payload.name}\nPhone: ${payload.phone}\nCake Type: ${payload.cakeType}\nDate: ${payload.preferredDate}\nQuantity: ${payload.quantity}\nDetails: ${payload.message}`;
      waFallback.href = waURL(BUSINESS.whatsapp, waMsg);
    }

    try {
      const result = await submitToAppsScript(payload);
      form.style.display = 'none';
      successDiv.style.display = 'block';
      if (refEl) refEl.textContent = result.submissionId ? `Reference: ${result.submissionId}` : '';
    } catch (err) {
      console.error('Enquiry form error:', err);
      errorDiv.style.display = 'block';
    } finally {
      setFormLoading(submitBtn, false);
      submitting = false;
    }
  });
}

// ================================================================
// SECTION 17: CONTACT FORM
// ================================================================

function initContactForm() {
  const form       = $('#contact-form');
  const submitBtn  = $('#contact-submit');
  const successDiv = $('#contact-success');
  const errorDiv   = $('#contact-error');
  const refEl      = $('#contact-ref');
  const waFallback = $('#contact-whatsapp-fallback');

  if (!form) return;

  const fields = [
    { input: 'contact-name',    error: 'contact-name-error',    check: validateName,     msg: 'Please enter your full name.' },
    { input: 'contact-phone',   error: 'contact-phone-error',   check: validatePhone,    msg: 'Please enter a valid 10-digit mobile number.' },
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
      formType:  'contact',
      name:      $('#contact-name').value.trim(),
      phone:     $('#contact-phone').value.trim(),
      message:   $('#contact-message').value.trim(),
      source:    'Website — Bakery',
      timestamp: new Date().toISOString(),
    };

    if (waFallback) {
      const waMsg = `Hi! I'm reaching out from your website.\nName: ${payload.name}\nPhone: ${payload.phone}\nMessage: ${payload.message}`;
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
// SECTION 18: SET MIN DATE (prevent past date selection)
// ================================================================

function setMinDate() {
  const dateInputs = $$('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInputs.forEach(inp => { inp.min = today; });
}

// ================================================================
// SECTION 19: INITIALISE ALL
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  populateBusiness();
  initProductTabs();
  renderGallery();
  renderReviews();
  initHeader();
  initMobileNav();
  initFloatingCTA();
  initReveal();
  initEnquiryForm();
  initContactForm();
  setMinDate();
});

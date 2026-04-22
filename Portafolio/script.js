// Cursor glow
const glow = document.getElementById('cursorGlow');
if (glow) {
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

// Navbar scroll
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
}

// Section reveal
const sections = document.querySelectorAll('.section');
if (sections.length) {
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        },
        { threshold: 0.1 },
    );
    sections.forEach((s) => obs.observe(s));
}

function tr(key, params) {
    if (window.I18N && typeof I18N.t === 'function') {
        return I18N.t(key, params);
    }
    return key;
}

// Hamburger
const toggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
function setMenuOpen(open) {
    if (navMenu) navMenu.classList.toggle('open', open);
    if (toggle) {
        toggle.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
}
if (toggle && navMenu) {
    if (!toggle.getAttribute('aria-expanded')) {
        toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', () => {
        setMenuOpen(!navMenu.classList.contains('open'));
    });
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });
}

// FormSubmit: en producción (HTTPS) activa el correo; primera vez, confirma el enlace en el Gmail.
const CONTACT_EMAIL = 'adriancarbonell275@gmail.com';
const FORMSUBMIT_AJAX = 'https://formsubmit.co/ajax/' + encodeURIComponent(CONTACT_EMAIL);

function showToast(message, duration = 4000) {
    const toast = document.getElementById('toast');
    const textEl = document.getElementById('toastText');
    if (!toast) return;
    if (textEl) textEl.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

function initContact() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const name = form.querySelector('input[name="name"]')?.value.trim() || '';
            const email = form.querySelector('input[name="email"]')?.value.trim() || '';
            const message = form.querySelector('textarea[name="message"]')?.value.trim() || '';
            const nameForSubject = name || '—';
            const submitBtn = document.getElementById('contactSubmit');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute('aria-busy', 'true');
            }
            const subject = tr('form_subject', { name: nameForSubject });
            try {
                const res = await fetch(FORMSUBMIT_AJAX, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                        _subject: subject,
                        _captcha: 'false',
                    }),
                });
                let data = {};
                try {
                    data = await res.json();
                } catch {
                    if (!res.ok) throw new Error('Invalid');
                }
                const s = data && data.success;
                const ok = res.ok && (s === true || s === 'true');
                if (ok) {
                    showToast(tr('toast_send_ok'), 5500);
                    form.reset();
                } else {
                    const err =
                        (data && (data.error || data.message)) ||
                        tr('toast_send_err_net') ||
                        tr('toast_send_err');
                    showToast(String(err), 7000);
                }
            } catch {
                showToast(
                    tr('toast_send_err_offline', { email: CONTACT_EMAIL }),
                    7000,
                );
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.removeAttribute('aria-busy');
                }
            }
        });
    }
    const emailBtn = document.getElementById('emailCopy');
    if (emailBtn) {
        emailBtn.addEventListener('click', async () => {
            const em = emailBtn.getAttribute('data-email') || CONTACT_EMAIL;
            try {
                if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                    await navigator.clipboard.writeText(em);
                    showToast(tr('toast_copied'), 3200);
                } else {
                    showToast(em, 10000);
                }
            } catch {
                showToast(em, 10000);
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContact);
} else {
    initContact();
}

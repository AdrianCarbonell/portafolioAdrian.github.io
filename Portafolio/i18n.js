/**
 * i18n ES/EN — textos y aplicación a [data-i18n], metadocumento y preferencia en localStorage.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'portfolio_lang';
    /** Ruta al CV en castellano y en inglés (pueden ser el mismo PDF hasta tengas versión en inglés). */
    var CV_ES = 'CV_Adrian_Carbonell.pdf';
    var CV_EN = 'CV_Adrian_Carbonell_EN.pdf';

    var STRINGS = {
        es: {
            nav_aria: 'Navegación principal',
            a11y_section_about: 'Sobre mí',
            a11y_section_projects: 'Proyectos destacados',
            a11y_section_tech: 'Tecnologías y herramientas',
            a11y_section_contact: 'Contacto',
            page_title: 'Adrián Carbonell — Desarrollador web',
            meta_description:
                'Portafolio de Adrián Carbonell, desarrollador web full stack: proyectos, stack técnico y contacto. Español e inglés.',
            skip_to: 'Ir al contenido',
            menu_aria: 'Abrir o cerrar el menú',
            lang_aria: 'Elegir idioma del sitio',
            nav_about: 'Sobre mí',
            nav_projects: 'Proyectos',
            nav_tech: 'Tecnologías',
            nav_contact: 'Contacto',
            lang_es: 'ES',
            lang_en: 'EN',
            lang_title_es: 'Español',
            lang_title_en: 'English',
            hero_badge: 'Disponible para trabajar',
            hero_sub: 'Desarrollador web full stack',
            hero_desc:
                'Desarrollador y estudiante, enfocado en web moderna, buenas prácticas y aprendizaje continuo. Abierto a proyectos, incorporación a equipo y colaboración en remoto. Español e inglés (inglés para posiciones internacionales).',
            cv_btn_primary: 'Descargar CV',
            cv_btn_alt: 'CV en inglés (PDF)',
            hero_github: 'GitHub',
            hero_linkedin: 'LinkedIn',
            scroll: 'desplázate',
            deco_rol: 'rol',
            deco_stack: 'stack',
            deco_passion: 'pasión',
            deco_name_key: 'nombre',
            project_title_levante: 'Página web de Grupo Levante',
            project_desc_levante:
                'Sitio corporativo: información de la compañía, servicios y contacto. Reto: estructura clara y carga fluida. Resultado: diseño responsive y mantenible.',
            project_title_pwd: 'Generador de contraseñas',
            project_desc_pwd:
                'Reto: reglas de seguridad y UI simple. Aplicación que genera contraseñas con longitud y tipos de caracteres; interfaz inmediata y lógica en el cliente (JS).',
            project_title_more: 'Más en GitHub',
            project_desc_more:
                'Repositorios adicionales, experimentos y código abierto. Revisa el perfil para ver lenguajes, commits y en qué colaboro.',
            project_cta: 'Hablemos de tu idea',
            project_link: 'Ver proyecto',
            project_link_profile: 'Ver perfil en GitHub',
            section_projects: '02 — proyectos',
            section_projects_h2: 'Trabajo <em>seleccionado</em>',
            section_tech: '03 — tecnologías',
            section_tech_h2: 'Mi <em>stack</em>',
            section_contact: '04 — contacto',
            contact_h2: 'Trabajemos <em>juntos</em>',
            contact_p:
                'Proyectos, ofertas de trabajo o colaboración: escríbeme y respondo lo antes posible.',
            email_copy: 'Clic para copiar',
            email_aria: 'Copiar la dirección de correo al portapapeles',
            form_name: 'Nombre',
            form_email: 'Email',
            form_message: 'Mensaje',
            ph_name: 'Tu nombre',
            ph_email: 'tu@email.com',
            ph_message: 'Proyecto, oferta, dudas… lo que quieras contar.',
            form_submit: 'Enviar mensaje',
            form_privacy:
                'Al enviar, tus datos se reenvían por un servicio de formulario. No añadimos publicidad a tu email.',
            form_subject: 'Contacto web — {{name}}',
            toast_send_ok: 'Mensaje enviado. Responderé a tu correo en breve.',
            toast_send_err: 'No se pudo enviar. Prueba otra vez en unos minutos.',
            toast_send_err_net: 'Error al enviar. Revisa la conexión o inténtalo más tarde.',
            toast_send_err_offline: 'Error de conexión. Escribe a {{email}} o inténtalo más tarde.',
            toast_copied: 'Email copiado al portapapeles',
            footer_copyright: '© 2026 Adrián Carbonell',
            footer_built: 'Hecho con HTML, CSS y JS',
        },
        en: {
            nav_aria: 'Main navigation',
            a11y_section_about: 'About',
            a11y_section_projects: 'Featured projects',
            a11y_section_tech: 'Technologies and tools',
            a11y_section_contact: 'Contact',
            page_title: 'Adrián Carbonell — Web developer',
            meta_description:
                'Portfolio of Adrián Carbonell, full-stack web developer: projects, tech stack, and contact. English and Spanish.',
            skip_to: 'Skip to content',
            menu_aria: 'Open or close menu',
            lang_aria: 'Site language',
            nav_about: 'About',
            nav_projects: 'Projects',
            nav_tech: 'Tech',
            nav_contact: 'Contact',
            lang_es: 'ES',
            lang_en: 'EN',
            lang_title_es: 'Spanish',
            lang_title_en: 'English',
            hero_badge: 'Open to work',
            hero_sub: 'Full-stack web developer',
            hero_desc:
                'Developer and student focused on modern web, clean code, and constant learning. Open to project work, team roles, and remote collaboration. Spanish and English (English for international opportunities).',
            cv_btn_primary: 'Download CV',
            cv_btn_alt: 'CV in Spanish (PDF)',
            hero_github: 'GitHub',
            hero_linkedin: 'LinkedIn',
            scroll: 'scroll',
            deco_rol: 'role',
            deco_stack: 'stack',
            deco_passion: 'passion',
            deco_name_key: 'name',
            project_title_levante: 'Grupo Levante website',
            project_desc_levante:
                'Corporate site: company info, services, and contact. Challenge: clear structure and fast load. Outcome: responsive, maintainable layout.',
            project_title_pwd: 'Password generator',
            project_desc_pwd:
                'Challenge: security rules and a simple UI. App that builds passwords with length and character options; quick interface and client-side logic.',
            project_title_more: 'More on GitHub',
            project_desc_more:
                'Extra repos, experiments, and open source. See the profile for languages, commits, and what I work on.',
            project_cta: "Let's talk about your project",
            project_link: 'View project',
            project_link_profile: 'View profile on GitHub',
            section_projects: '02 — projects',
            section_projects_h2: 'Selected <em>work</em>',
            section_tech: '03 — stack',
            section_tech_h2: 'My <em>stack</em>',
            section_contact: '04 — contact',
            contact_h2: "Let's <em>work together</em>",
            contact_p:
                'Project inquiries, job offers, or collaboration—message me and I will reply as soon as I can.',
            email_copy: 'Click to copy',
            email_aria: 'Copy email address to clipboard',
            form_name: 'Name',
            form_email: 'Email',
            form_message: 'Message',
            ph_name: 'Your name',
            ph_email: 'you@email.com',
            ph_message: 'Project, offer, questions… what you would like to share.',
            form_submit: 'Send message',
            form_privacy:
                'By submitting, your message is forwarded through a form provider. I do not add you to a newsletter.',
            form_subject: 'Website contact — {{name}}',
            toast_send_ok: 'Message sent. I will reply to your email shortly.',
            toast_send_err: 'Could not send. Please try again in a few minutes.',
            toast_send_err_net: 'Send failed. Check your connection or try again later.',
            toast_send_err_offline: 'Connection error. Email {{email}} or try again later.',
            toast_copied: 'Email copied to clipboard',
            footer_copyright: '© 2026 Adrián Carbonell',
            footer_built: 'Built with HTML, CSS & JS',
        },
    };

    function getStoredLang() {
        try {
            var v = localStorage.getItem(STORAGE_KEY);
            if (v === 'es' || v === 'en') return v;
        } catch (e) {}
        return null;
    }

    function detectBrowserLang() {
        var n = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        n = n.toLowerCase();
        if (n.indexOf('en') === 0) return 'en';
        return 'es';
    }

    function getInitialLang() {
        return getStoredLang() || detectBrowserLang();
    }

    var currentLang = 'es';

    function t(key, params) {
        var dict = STRINGS[currentLang] || STRINGS.es;
        var s = dict[key];
        if (s === undefined) s = (STRINGS.es && STRINGS.es[key]) || key;
        if (params) {
            Object.keys(params).forEach(function (k) {
                s = s.split('{{' + k + '}}').join(params[k]);
            });
        }
        return s;
    }

    function getLang() {
        return currentLang;
    }

    function setMetaAndTitle() {
        document.title = t('page_title');
        var m = document.getElementById('metaDesc') || document.querySelector('meta[name="description"]');
        if (m) m.setAttribute('content', t('meta_description'));
        var ogt = document.getElementById('ogTitle') || document.querySelector('meta[property="og:title"]');
        if (ogt) ogt.setAttribute('content', t('page_title'));
        var ogd = document.getElementById('ogDesc') || document.querySelector('meta[property="og:description"]');
        if (ogd) ogd.setAttribute('content', t('meta_description'));
        var twd = document.getElementById('twitterDesc') || document.querySelector('meta[name="twitter:description"]');
        if (twd) twd.setAttribute('content', t('meta_description'));
        var ogL = document.getElementById('ogLocale');
        var ogA = document.getElementById('ogLocaleAlt');
        if (ogL && ogA) {
            if (currentLang === 'es') {
                ogL.setAttribute('content', 'es_ES');
                ogA.setAttribute('content', 'en_US');
            } else {
                ogL.setAttribute('content', 'en_US');
                ogA.setAttribute('content', 'es_ES');
            }
        }
    }

    function setCanonicalAndHreflang() {
        var u = (window.location.href || '').split('#')[0].split('?')[0];
        if (!u) return;
        var c = document.getElementById('linkCanonical');
        var hEs = document.getElementById('linkHreflangEs');
        var hEn = document.getElementById('linkHreflangEn');
        if (c) c.setAttribute('href', u);
        if (hEs) hEs.setAttribute('href', u);
        if (hEn) hEn.setAttribute('href', u);
    }

    function setOgImageUrl() {
        var og = document.getElementById('ogImage');
        if (og) {
            try {
                og.setAttribute('content', new URL('favicon.svg', document.baseURI).href);
            } catch (e) {
                try {
                    og.setAttribute('content', new URL('favicon.svg', window.location.href).href);
                } catch (e2) {
                    /* ignore */
                }
            }
        }
    }

    function setCvLinks() {
        var primary = document.getElementById('cvPrimary');
        var alt = document.getElementById('cvAlt');
        if (!primary || !alt) return;
        if (currentLang === 'es') {
            primary.setAttribute('href', CV_ES);
            primary.setAttribute('download', 'CV_Adrian_Carbonell.pdf');
            alt.setAttribute('href', CV_EN);
            alt.setAttribute('download', 'CV_Adrian_Carbonell_EN.pdf');
        } else {
            primary.setAttribute('href', CV_EN);
            primary.setAttribute('download', 'CV_Adrian_Carbonell_EN.pdf');
            alt.setAttribute('href', CV_ES);
            alt.setAttribute('download', 'CV_Adrian_Carbonell.pdf');
        }
    }

    function walkI18n(root) {
        var scope = root || document;
        var els = scope.querySelectorAll('[data-i18n]');
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var key = el.getAttribute('data-i18n');
            if (!key) continue;
            var useHtml = el.hasAttribute('data-i18n-html');
            var str = t(key);
            if (useHtml) el.innerHTML = str;
            else el.textContent = str;
        }
        var phEls = scope.querySelectorAll('[data-i18n-placeholder]');
        for (var p = 0; p < phEls.length; p++) {
            var pe = phEls[p];
            var pk = pe.getAttribute('data-i18n-placeholder');
            if (pk) pe.setAttribute('placeholder', t(pk));
        }
        var ar = scope.querySelectorAll('[data-i18n-aria]');
        for (var a = 0; a < ar.length; a++) {
            var ae = ar[a];
            var ak = ae.getAttribute('data-i18n-aria');
            if (ak) ae.setAttribute('aria-label', t(ak));
        }
        var tit = scope.querySelectorAll('[data-i18n-title]');
        for (var tj = 0; tj < tit.length; tj++) {
            var te = tit[tj];
            var tk = te.getAttribute('data-i18n-title');
            if (tk) te.setAttribute('title', t(tk));
        }
    }

    function updateLangButtons() {
        var bEs = document.getElementById('langEs');
        var bEn = document.getElementById('langEn');
        if (bEs) {
            bEs.setAttribute('aria-pressed', currentLang === 'es' ? 'true' : 'false');
            bEs.setAttribute('title', t('lang_title_es'));
        }
        if (bEn) {
            bEn.setAttribute('aria-pressed', currentLang === 'en' ? 'true' : 'false');
            bEn.setAttribute('title', t('lang_title_en'));
        }
    }

    function applyLang(lang) {
        if (lang !== 'es' && lang !== 'en') lang = 'es';
        currentLang = lang;
        document.documentElement.lang = lang;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {}
        walkI18n();
        setMetaAndTitle();
        setCvLinks();
        updateLangButtons();
        if (window.dispatchEvent) {
            window.dispatchEvent(new CustomEvent('portfolio:lang', { detail: { lang: lang } }));
        }
    }

    function prefersReducedMotion() {
        return (
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        );
    }

    var LANG_FADE_OUT_MS = 100;
    var LANG_FADE_IN_MS = 300;

    function setLang(lang) {
        if (lang !== 'es' && lang !== 'en') lang = 'es';
        if (lang === currentLang) return;
        if (prefersReducedMotion()) {
            applyLang(lang);
            return;
        }
        var body = document.body;
        if (body.classList.contains('lang-fade-out') || body.classList.contains('lang-fade-in')) {
            return;
        }
        body.classList.add('lang-fade-out');
        window.setTimeout(function () {
            window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                    applyLang(lang);
                    body.classList.remove('lang-fade-out');
                    body.classList.add('lang-fade-in');
                    window.setTimeout(function () {
                        body.classList.remove('lang-fade-in');
                    }, LANG_FADE_IN_MS);
                });
            });
        }, LANG_FADE_OUT_MS);
    }

    function initI18n() {
        setCanonicalAndHreflang();
        setOgImageUrl();
        applyLang(getInitialLang());

        var bEs = document.getElementById('langEs');
        var bEn = document.getElementById('langEn');
        if (bEs) bEs.addEventListener('click', function () { setLang('es'); });
        if (bEn) bEn.addEventListener('click', function () { setLang('en'); });
    }

    window.I18N = {
        t: t,
        getLang: getLang,
        setLang: setLang,
        applyLang: applyLang,
        getInitialLang: getInitialLang,
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }
})();

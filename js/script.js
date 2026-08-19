/* =====================================================
   SIDEBAR
===================================================== */

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');


function openSidebar() {

    if (sidebar) {
        sidebar.classList.add('active');
    }

    if (overlay) {
        overlay.classList.add('active');
    }

    document.body.classList.add('no-scroll');
}


function closeSidebar() {

    if (sidebar) {
        sidebar.classList.remove('active');
    }

    if (overlay) {
        overlay.classList.remove('active');
    }

    document.body.classList.remove('no-scroll');
}


if (menuBtn) {
    menuBtn.addEventListener('click', openSidebar);
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
}

if (overlay) {
    overlay.addEventListener('click', closeSidebar);
}


sidebarLinks.forEach(link => {

    link.addEventListener('click', closeSidebar);

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn = document.getElementById('theme-btn');


function updateThemeIcon() {

    if (!themeBtn) {
        return;
    }

    const icon = themeBtn.querySelector('i');

    if (!icon) {
        return;
    }


    if (document.body.classList.contains('light-mode')) {

        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');

    } else {

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');

    }

}


/* Load saved theme */

const savedTheme = localStorage.getItem('theme');


if (savedTheme === 'light') {

    document.body.classList.add('light-mode');

} else {

    document.body.classList.remove('light-mode');

}


updateThemeIcon();


/* Theme button */
if (themeBtn) {
    themeBtn.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        updateThemeIcon();
    });
}


/* =====================================================
   BACK TO TOP
===================================================== */
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
    if (!backToTop) {
        return;
    }

    if (window.scrollY > 400) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});


if (backToTop) {
    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
    let currentSection = '';
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute('id');
        }
    });


    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (
            link.getAttribute('href') ===
            '#' + currentSection
        ) {
            link.classList.add('active');
        }
    });
});


/* =====================================================
   CLOSE SIDEBAR WITH ESC
===================================================== */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeSidebar();
    }
});

/* ================= WHATSAPP CONTACT FORM ================= */

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const name =
            document.getElementById('name').value.trim();

        const email =
            document.getElementById('email').value.trim();

        const subject =
            document.getElementById('subject').value.trim();

        const message =
            document.getElementById('message').value.trim();


        /* Your WhatsApp number */

        const phoneNumber = '255673661101';


        /* Create WhatsApp message */

        const whatsappMessage =
            `Hello Elias,%0A%0A` +
            `Name: ${name}%0A` +
            `Email: ${email}%0A` +
            `Subject: ${subject}%0A%0A` +
            `Message:%0A${message}`;


        /* WhatsApp URL */

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;


        /* Open WhatsApp */

        window.open(whatsappURL, '_blank');


        /* Show message */

        if (formMessage) {

            formMessage.textContent =
                '✓ Opening WhatsApp...';

            formMessage.className =
                'form-message success';


            /* Hide after 2 seconds */

            setTimeout(function () {

                formMessage.textContent = '';

                formMessage.className =
                    'form-message';

            }, 2000);

        }


        /* Clear form */

        contactForm.reset();

    });

}

/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

const allNavigationLinks =
    document.querySelectorAll('a[href^="#"]');

allNavigationLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        const targetId =
            link.getAttribute('href');
        if (targetId === '#') {
            return;
        }

        const targetSection =
            document.querySelector(targetId);
        if (targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* =====================================================
   PREVENT EMPTY LINKS
===================================================== */
const emptyLinks =
    document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    });
});


/* =====================================================
   WINDOW RESIZE
===================================================== */
window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
        closeSidebar();
    }
});


/* =====================================================
   PAGE LOAD
===================================================== */
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});
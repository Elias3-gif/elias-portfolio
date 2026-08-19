document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SCROLL ANIMATION
    ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".section, .service-card, .project-card, .certificate-card, .timeline-item, .skill-item"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        animatedElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        /* Fallback kwa browser zisizo-support IntersectionObserver */

        animatedElements.forEach(function (element) {

            element.classList.add("show");

        });

    }


    /* =====================================================
       PROGRESS BAR ANIMATION
    ===================================================== */

    const progressBars = document.querySelectorAll(
        ".progress-bar"
    );


    if ("IntersectionObserver" in window) {

        const progressObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const bar = entry.target;

                        const progress =
                            bar.getAttribute("data-progress");


                        if (progress) {

                            setTimeout(function () {

                                bar.style.width =
                                    progress + "%";

                            }, 200);

                        }

                        progressObserver.unobserve(bar);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


        progressBars.forEach(function (bar) {

            progressObserver.observe(bar);

        });

    } else {

        /* Fallback */

        progressBars.forEach(function (bar) {

            const progress =
                bar.getAttribute("data-progress");

            if (progress) {

                bar.style.width =
                    progress + "%";

            }

        });

    }

});

document.addEventListener('DOMContentLoaded', function () {

    /* =====================================================
       HERO TYPING ANIMATION
    ===================================================== */

    const typingText = document.getElementById('typing-text');

    if (typingText) {

        const texts = [
            'Computer Science Student',
            'Web Developer',
            'Software Developer',
            'Mobile App Developer',
            'Cybersecurity Enthusiast'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentText = texts[textIndex];

            if (!deleting) {

                typingText.textContent =
                    currentText.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentText.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;
                }

            } else {

                typingText.textContent =
                    currentText.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    textIndex++;

                    if (textIndex >= texts.length) {
                        textIndex = 0;
                    }

                }

            }

            const speed = deleting ? 50 : 90;

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }


    /* =====================================================
       SCROLL ANIMATION
    ===================================================== */

    const animatedElements = document.querySelectorAll(
        '.section, .service-card, .project-card, .certificate-card, .timeline-item, .skill-item'
    );

    if ('IntersectionObserver' in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add('show');

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        animatedElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(function (element) {

            element.classList.add('show');

        });

    }


    /* =====================================================
       PROGRESS BAR ANIMATION
    ===================================================== */

    const progressBars =
        document.querySelectorAll('.progress-bar');


    if ('IntersectionObserver' in window) {

        const progressObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            const bar = entry.target;

                            const progress =
                                bar.getAttribute('data-progress');


                            if (progress !== null) {

                                setTimeout(function () {

                                    bar.style.width =
                                        progress + '%';

                                }, 200);

                            }

                            progressObserver.unobserve(bar);

                        }

                    });

                },
                {
                    threshold: 0.3
                }
            );


        progressBars.forEach(function (bar) {

            progressObserver.observe(bar);

        });

    } else {

        progressBars.forEach(function (bar) {

            const progress =
                bar.getAttribute('data-progress');


            if (progress !== null) {

                bar.style.width =
                    progress + '%';

            }

        });

    }

});
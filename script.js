document.addEventListener('DOMContentLoaded', function() {
    // ---ELEMENT SELECTORS---
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main > section');
    const goToTopBtn = document.getElementById('go-to-top');
    const langSelector = document.getElementById('language-select');
    const participateBtn = document.getElementById('participate-btn');
    const contactForm = document.getElementById('contact-form');

    // ---TRANSLATIONS OBJECT---
    const translations = {
        en: {
            meta_title: "Club Entrepreneurs Hackathon - DeVinci Challenge",
            meta_description: "Join the DeVinci Challenge, an inter-school entrepreneurial hackathon to reveal student talent. Innovate, collaborate, and create a concrete impact.",
            nav_home: "Home",
            nav_guidelines: "Guidelines",
            nav_agenda: "Agenda",
            nav_participate: "Participate",
            nav_contact: "Contact",
            hero_title: "DeVinci Challenge: The Entrepreneurial Hackathon",
            hero_subtitle: "A weekend to innovate, collaborate, and create a concrete impact. The national launchpad for tomorrow's entrepreneurs.",
            hero_cta: "Register Now!",
            hero_date_notice: "Dates are tentative and subject to change based on venue availability.",
            hero_schools: "Bringing together talent from",
            guidelines_title: "Eligibility Criteria",
            guidelines_subtitle: "The DeVinci Challenge is open to all motivated individuals, with or without a pre-existing project. Here's what you need to know to participate.",
            guidelines_card1_title: "Teams of 3 to 5",
            guidelines_card1_text: "Assemble your team. Collaboration is the key to success. Each team must consist of 3 to 5 students.",
            guidelines_card2_title: "Student Status",
            guidelines_card2_text: "You must be enrolled in a higher education institution. Proof of enrollment will be required.",
            guidelines_card3_title: "All Profiles Welcome",
            guidelines_card3_text: "Whether you are in business, engineering, design, or another field, your talent is welcome to create innovative projects.",
            agenda_title: "Hackathon Schedule",
            agenda_subtitle: "From team formation to the final pitch, discover the key stages that will define this intense and creative weekend.",
            agenda_step1_title: "Step 1: Registration",
            agenda_step1_text: "Form a team of 3 to 5 people and ensure each member is enrolled in a higher education institution.",
            agenda_step2_title: "Step 2: Application",
            agenda_step2_text: "Pass the selection phase to confirm your participation in the hackathon.",
            agenda_step3_title: "Step 3: The Kick-off",
            agenda_step3_text: "The weekend begins with the announcement of the problem statement. Get ready to brainstorm!",
            agenda_step4_title: "Step 4: Development",
            agenda_step4_text: "This is the heart of the hackathon. Collaborate with your team to develop an innovative and concrete solution.",
            agenda_step5_title: "Step 5: Jury & Afterwork",
            agenda_step5_text: "Present your project to a panel of experts. The weekend concludes with an afterwork for networking.",
            participate_title: "Join the Challenge",
            participate_subtitle: "Ready to take on the challenge? Click the button below to register your team by email. We will contact you with the next steps.",
            participate_cta: "Register via Email",
            contact_title: "Contact Us",
            contact_subtitle: "Have a question, an idea, or a partnership proposal? Feel free to write to us.",
            contact_name: "Your Name",
            contact_email: "Your Email",
            contact_message: "Your Message",
            contact_send: "Send Message",
            footer_about: "The leading entrepreneurship association at Pôle Léonard de Vinci, directly connected with the Devinci Startup ecosystem.",
            footer_nav: "Navigation",
            footer_social: "Follow Us",
            footer_community: "Join our community online!",
            footer_copyright: "&copy; 2025 Club Entrepreneurs. All rights reserved.",
            countdown_days: "Days",
            countdown_hours: "Hours",
            countdown_minutes: "Minutes",
            countdown_seconds: "Seconds"
        },
        fr: {
            meta_title: "Club Entrepreneurs Hackathon - Challenge DeVinci",
            meta_description: "Rejoignez le Challenge DeVinci, un hackathon entrepreneurial inter-écoles pour révéler les talents étudiants. Innovez, collaborez et créez un impact concret.",
            nav_home: "Accueil",
            nav_guidelines: "Règles",
            nav_agenda: "Agenda",
            nav_participate: "Participer",
            nav_contact: "Contact",
            hero_title: "Challenge DeVinci : Le Hackathon Entrepreneurial",
            hero_subtitle: "Un week-end pour innover, collaborer et créer un impact concret. Le tremplin national pour les entrepreneurs de demain.",
            hero_cta: "Inscrivez-vous !",
            hero_date_notice: "Les dates sont prévisionnelles et susceptibles de changer en fonction de la disponibilité des lieux.",
            hero_schools: "Réunissant les talents de",
            guidelines_title: "Critères d'éligibilité",
            guidelines_subtitle: "Le Challenge DeVinci est ouvert à tous les profils motivés, avec ou sans projet préexistant. Voici ce qu'il faut savoir pour participer.",
            guidelines_card1_title: "Équipes de 3 à 5",
            guidelines_card1_text: "Rassemblez votre équipe. La collaboration est la clé du succès. Chaque équipe doit être composée de 3 à 5 étudiants.",
            guidelines_card2_title: "Statut Étudiant",
            guidelines_card2_text: "Vous devez être inscrit dans un établissement d'enseignement supérieur. Un certificat de scolarité vous sera demandé.",
            guidelines_card3_title: "Tous Profils Acceptés",
            guidelines_card3_text: "Que vous soyez en école de commerce, d'ingénieur, ou de design, votre talent est le bienvenu pour créer des projets innovants.",
            agenda_title: "Déroulement du Hackathon",
            agenda_subtitle: "De la formation des équipes au pitch final, découvrez les grandes étapes qui rythmeront ce week-end intense et créatif.",
            agenda_step1_title: "Étapes 1 : Inscription",
            agenda_step1_text: "Formez une équipe de 3 à 5 personnes et assurez-vous que chaque membre est bien inscrit dans un établissement supérieur.",
            agenda_step2_title: "Étape 2 : Candidature",
            agenda_step2_text: "Passez les phases de sélection pour valider votre participation au hackathon.",
            agenda_step3_title: "Étape 3 : Le Lancement",
            agenda_step3_text: "Le week-end commence avec l'annonce de la problématique. Préparez-vous à réfléchir !",
            agenda_step4_title: "Étape 4 : Développement",
            agenda_step4_text: "C'est le cœur du hackathon. Collaborez en équipe pour développer une solution innovante et concrète.",
            agenda_step5_title: "Étape 5 : Jury & Afterwork",
            agenda_step5_text: "Présentez votre projet devant un jury d'experts. Le week-end se termine par un afterwork pour networker.",
            participate_title: "Participez au Challenge",
            participate_subtitle: "Prêt à relever le défi ? Cliquez sur le bouton ci-dessous pour inscrire votre équipe par email. Nous vous contacterons avec les prochaines étapes.",
            participate_cta: "Inscrire votre équipe par Email",
            contact_title: "Contactez-nous",
            contact_subtitle: "Une question ? Une idée ? Une proposition de partenariat ? N'hésitez pas à nous écrire.",
            contact_name: "Votre nom",
            contact_email: "Votre email",
            contact_message: "Votre message",
            contact_send: "Envoyer le message",
            footer_about: "L'association de référence en entrepreneuriat au Pôle Léonard de Vinci, en lien direct avec l'écosystème Devinci Startup.",
            footer_nav: "Navigation",
            footer_social: "Suivez-nous",
            footer_community: "Rejoignez notre communauté en ligne !",
            footer_copyright: "&copy; 2025 Club Entrepreneurs. Tous droits réservés.",
            countdown_days: "Jours",
            countdown_hours: "Heures",
            countdown_minutes: "Minutes",
            countdown_seconds: "Secondes"
        }
    };

    // ---LANGUAGE SWITCHER---
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if(el.tagName === 'META') {
                    el.setAttribute('content', translations[lang][key]);
                } else if(el.tagName === 'TITLE') {
                    el.textContent = translations[lang][key];
                }
                else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        localStorage.setItem('language', lang); // Save preference
    };

    langSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
        updateCountdown(); // Instantly update countdown text on language change
    });

    // ---MOBILE NAVIGATION---
    const closeMenu = () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    };

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ---NAV HIGHLIGHT ON SCROLL---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Section is considered active when 60% is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
                
                // Header style based on the section
                if (id === 'home') {
                    header.classList.remove('scrolled');
                } else {
                    header.classList.add('scrolled');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });


    // ---COUNTDOWN TIMER---
    const countdownContainer = document.getElementById('countdown-timer');
    const eventDate = new Date("Feb 20, 2026 09:00:00").getTime();
    let countdownInterval;

    const updateCountdown = () => {
        const lang = langSelector.value;
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            countdownContainer.innerHTML = `<h3>${lang === 'fr' ? "L'événement a commencé !" : "The event has started!"}</h3>`;
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownContainer.innerHTML = `
            <div class="countdown-item"><span>${days}</span><p data-key="countdown_days">${translations[lang].countdown_days}</p></div>
            <div class="countdown-item"><span>${hours}</span><p data-key="countdown_hours">${translations[lang].countdown_hours}</p></div>
            <div class="countdown-item"><span>${minutes}</span><p data-key="countdown_minutes">${translations[lang].countdown_minutes}</p></div>
            <div class="countdown-item"><span>${seconds}</span><p data-key="countdown_seconds">${translations[lang].countdown_seconds}</p></div>
        `;
    };
    
    // ---FORM NOTICE---
    const showNotice = (id, duration = 5000) => {
        const noticeEl = document.getElementById(id);
        if (noticeEl) {
            const lang = langSelector.value;
            const openEmailClientMsg = lang === 'fr' ? 'Ouverture de votre client de messagerie...' : 'Opening your email client...';
            noticeEl.textContent = openEmailClientMsg;
            noticeEl.classList.add('visible');
            setTimeout(() => {
                noticeEl.classList.remove('visible');
            }, duration);
        }
    };

    // ---PARTICIPATE BUTTON---
    participateBtn.addEventListener('click', () => {
        const recipient = 'club.entrepreneurs.pulv@gmail.com';
        const subject = encodeURIComponent('Hackathon DeVinci Challenge - Registration');
        const body = encodeURIComponent(
            'Hello Club Entrepreneurs,\n\n' +
            'I would like to register for the DeVinci Challenge Hackathon.\n\n' +
            '--- Participant Information ---\n\n' +
            'Full Name: [Your full name]\n' +
            'Email Address: [Your email]\n' +
            'Current School/University: [Your school]\n' +
            'Do you already have a team? (Yes/No): [Yes/No]\n' +
            'If yes, please list team name and members: [Team Name, Member Names]\n' +
            'Have you participated in a hackathon before? (Yes/No): [Yes/No]\n\n' +
            '--------------------------------\n\n' +
            'Thank you!'
        );
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        showNotice('participate-notice');
    });

    // ---CONTACT FORM---
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('message').value;
        const recipient = 'club.entrepreneurs.pulv@gmail.com';
        const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        showNotice('contact-notice');
        contactForm.reset();
    });

    // ---SCROLL BEHAVIORS---
    window.addEventListener('scroll', () => {
        // Go to Top Button
        if (window.scrollY > 300) {
            goToTopBtn.style.display = 'flex';
            setTimeout(() => {
                 goToTopBtn.classList.add('show');
            }, 10);
        } else {
            goToTopBtn.classList.remove('show');
             setTimeout(() => {
                goToTopBtn.style.display = 'none';
            }, 300);
        }
    });

    goToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ---ANIMATE ON SCROLL---
    const animatedElements = document.querySelectorAll('.fade-in');
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation for a nicer effect
                entry.target.style.transitionDelay = `${index * 100}ms`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });


    // ---INITIALIZATION---
    const savedLang = localStorage.getItem('language') || 'en';
    langSelector.value = savedLang;
    setLanguage(savedLang);
    
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
import * as data from './data.js';
import * as projectData  from './data-project.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- Elemen Selector --- //
    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    const projectsContainer = document.querySelector('.projects-container');
    const projectFilterButtons = document.querySelectorAll('.projects-filter .btn');

    // --- Personal Info --- //
    const populatePersonalInfo = () => {
        const { name, occupation, bio, whatsapp, linkedin, github, quote, email } = data.personalInfo;
        
        document.getElementById('home-name').textContent = name;
        document.getElementById('occupation').textContent = occupation;
        document.getElementById('bio').textContent = bio;

        const socialLinksHTML = `
            <a href="${linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="${github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:${email}" aria-label="Email"><i class="fas fa-envelope"></i></a>
        `;
        document.querySelector('.social-links-header').innerHTML = socialLinksHTML;
        document.querySelector('.footer-social').innerHTML = socialLinksHTML;

        // Footer info
        document.getElementById('footer-name').textContent = name;
        document.getElementById('copyright-name').textContent = name;
        document.getElementById('footer-quote').textContent = `"${quote}"`;

        // Contact info
        const contactInfoContainer = document.querySelector('.contact-info');
        if (contactInfoContainer) {
            contactInfoContainer.innerHTML = `
                <h3>Get In Touch</h3>
                <div class="contact-info-item">
                    <i class="fas fa-phone"></i>
                    <a href="${whatsapp}" target="_blank" rel="noopener noreferrer">(+62) 821-1135-5799</a>
                </div>
                <div class="contact-info-item">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:${email}">richardtan2206@gmail.com</a>
                </div>
                <div class="contact-info-item">
                    <i class="fab fa-linkedin-in"></i>
                    <a href="${linkedin}" target="_blank" rel="noopener noreferrer">Richard Dean Tanjaya</a>
                </div>
                <div class="contact-info-item">
                    <i class="fab fa-github"></i>
                    <a href="${github}" target="_blank" rel="noopener noreferrer">RichardDeanTan</a>
                </div>
            `;
        }
    };

    // --- Typewritter --- //
    const typewriterElement = document.getElementById('typewriter-roles');
    const roles = data.personalInfo.titles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const currentRole = roles[roleIndex];
        let typeSpeed = isDeleting ? 75 : 150;

        if (!isDeleting && charIndex < currentRole.length) {
            typewriterElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                roleIndex = (roleIndex + 1) % roles.length;
            }
            typeSpeed = isDeleting ? 1000 : 500;
        }

        setTimeout(type, typeSpeed);
    };

    // --- Dynamic --- //
    const populateTechCarousel = () => {
        const carousel = document.querySelector('.tech-carousel');
        let content = '';
        data.technologies.forEach(tech => {
            content += `<i class="${tech.iconClass} tech-icon" title="${tech.name}"></i>`;
        });
        // Duplicate for seamless scroll
        carousel.innerHTML = content;
        document.querySelectorAll('.tech-carousel')[1].innerHTML = content;
    };

    const populateSkills = () => {
        const container = document.querySelector('.skills-icons-container');
        if (!container) return;
        let content = '';
        data.skills.forEach(skill => {
            content += `
                <div class="skill-icon-item">
                    <img src="${skill.imageSkill}" alt="${skill.nameSkill} logo" class="skill-icon-img">
                    <span class="skill-tooltip">${skill.nameSkill}</span>
                </div>
            `;
        });
        container.innerHTML = content;
    };

    const populateProjects = (filter = 'all') => {
        let content = '';
        const filteredProjects = projectData.projects.filter(project =>
            filter === 'all' || (project.filterProject && project.filterProject.includes(filter))
        );

        filteredProjects.forEach(project => {
            const originalIndex = projectData.projects.indexOf(project);
            content += `
                <div class="project-card" data-index="${originalIndex}">
                    <img src="${project.image}" alt="${project.title}" class="project-card-img">
                    <div class="project-card-content">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                    </div>
                </div>
            `;
        });
        projectsContainer.innerHTML = content;
    };
    
    const populateExperience = () => {
        const container = document.querySelector('.experience-container');
        let content = '';
        data.experiences.forEach(exp => {
            content += `
                <div class="experience-item">
                    <div class="experience-content">
                         <div class="experience-header">
                            <h3>${exp.title}</h3>
                            <span class="year">${exp.year}</span>
                        </div>
                        <h4>${exp.location}</h4>
                        <p>${exp.description}</p>
                        <div class="experience-details active">
                            <ul>
                                ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = content;

        // After populating, set the max-height for the initially active items
        container.querySelectorAll('.experience-details.active').forEach((details) => {
            details.style.maxHeight = details.scrollHeight + "px";
        });
    };

    const populateCertificates = () => {
        const container = document.querySelector('.certificates-grid');
        if (!container) return;
        let content = '';
        data.certificates.forEach((cert, index) => {
            const credentialLinkHTML = cert.credentialUrl ? 
                `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="credential-link">View Credential <i class="fas fa-external-link-alt"></i></a>` :
                '';

            content += `
                <div class="certificate-item" role="button" tabindex="0" aria-expanded="false" aria-controls="cert-desc-${index}">
                    <div class="certificate-header">
                        <div class="certificate-toggle">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="certificate-summary">
                            <h4>${cert.title}</h4>
                            <h5>${cert.organization}</h5>
                        </div>
                    </div>
                    <div class="certificate-details" id="cert-desc-${index}">
                         <div class="certificate-details-content">
                            <p>${cert.description}</p>
                            ${credentialLinkHTML}
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = content;
    };


    // --- Event Listener + Handler --- //

    // Sticky Header & Active Nav
    const handleScroll = () => {
        header.classList.toggle('sticky', window.scrollY > 100);

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };

    // Hamburger Menu
    const toggleMenu = () => {
        menuIcon.classList.toggle('fa-x');
        navbar.classList.toggle('active');
    };
    
    // Close menu when a nav link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
             if (navbar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // Experience Handler
    const handleExperienceClick = (e) => {
        const content = e.target.closest('.experience-content');
        if (content) {
            const details = content.querySelector('.experience-details');
            details.classList.toggle('active');
            if (details.classList.contains('active')) {
                details.style.maxHeight = details.scrollHeight + "px";
            } else {
                details.style.maxHeight = null;
            }
        }
    };

    // Certificate Handler
    const handleCertificateInteraction = (e) => {
        // Prevent click link if close
        if (e.target.closest('.credential-link')) {
            return;
        }
        
        if (e.type === 'keydown') {
            const keyboardEvent = e;
            if (keyboardEvent.key !== 'Enter' && keyboardEvent.key !== ' ') {
                return;
            }
            e.preventDefault(); // Prevent space from scrolling
        }

        const item = e.target.closest('.certificate-item');
        if (!item) return;

        const details = item.querySelector('.certificate-details');
        item.classList.toggle('active');
        const isActive = item.classList.contains('active');
        
        item.setAttribute('aria-expanded', String(isActive));

        if (isActive) {
            details.style.maxHeight = details.scrollHeight + "px";
        } else {
            details.style.maxHeight = null;
        }
    };

    // Project Filter
    const handleProjectFilter = (e) => {
        const clickedButton = e.target.closest('.btn');
        if (!clickedButton) return;

        projectFilterButtons.forEach(button => button.classList.remove('active'));
        clickedButton.classList.add('active');

        const filter = clickedButton.dataset.filter;
        populateProjects(filter);
    };

    // Contact Form Handler
    const handleContactForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('#contact-name').value;
        const userEmail = form.querySelector('#contact-email').value;
        const message = form.querySelector('#contact-message').value;
        const myEmail = 'richardtan2206@gmail.com';

        const subject = `Portfolio Contact - From ${name}`;
        const body = `You have a new message from your portfolio contact form.%0D%0A%0D%0A` +
                    `Name: ${name}%0D%0A` +
                    `Email: ${userEmail}%0D%0A%0D%0A` +
                    `Message:%0D%0A${message}`;

        // Force Gmail
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myEmail)}&su=${encodeURIComponent(subject)}&body=${body}`;

        window.open(gmailURL, '_blank'); // Opens Gmail new tab

        setTimeout(() => {
            form.reset();
        }, 500);
    };


    // Project Modal
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-btn');

    const openModal = (e) => {
        const card = e.target.closest('.project-card');
        if (card) {
            const projectIndex = card.dataset.index;
            const project = projectData.projects[projectIndex];
            
            document.getElementById('modal-img').src = project.image;
            document.getElementById('modal-title').textContent = project.title;
            
            const descriptionContainer = document.getElementById('modal-description');
            const detailsHTML = `<ul>${project.details.map(detail => `<li>${detail}</li>`).join('')}</ul>`;
            descriptionContainer.innerHTML = detailsHTML;

            const techContainer = document.getElementById('modal-tech');
            techContainer.innerHTML = project.technologies.map(tech => `<span class="modal-tech-item">${tech}</span>`).join('');
            
            const repoLink = document.getElementById('modal-repo-link');
            const liveLink = document.getElementById('modal-live-link');

            repoLink.href = project.repoLink || '#';
            repoLink.style.display = project.repoLink ? 'inline-block' : 'none';
            liveLink.href = project.liveLink || '#';
            liveLink.style.display = project.liveLink ? 'inline-block' : 'none';

            modal.style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        }
    };
    
    const closeModal = () => {
        modal.style.display = 'none';
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    };

    // Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => revealObserver.observe(el));


    // --- INITIALIZATION --- //
    populatePersonalInfo();
    populateTechCarousel();
    populateSkills();
    populateProjects();
    populateExperience();
    populateCertificates();
    type();

    window.addEventListener('scroll', handleScroll);
    menuIcon.addEventListener('click', toggleMenu);
    projectsContainer.addEventListener('click', openModal);
    document.querySelector('.projects-filter').addEventListener('click', handleProjectFilter);
    document.querySelector('.experience-container').addEventListener('click', handleExperienceClick);
    const certificatesGrid = document.querySelector('.certificates-grid');
    certificatesGrid.addEventListener('click', handleCertificateInteraction);
    certificatesGrid.addEventListener('keydown', handleCertificateInteraction);
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
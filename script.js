/**
 * Nino Kapanadze | Premium Portfolio Website
 * Functional logic, animations, and interactivity systems.
 */

// ==========================================
// 1. Projects Database
// ==========================================
const projectsData = {
    gymwave: {
        title: "GymWave",
        tagline: "Premium Event & Fitness Registration Platform",
        desc: "GymWave is a high-energy, premium event website designed to drive user conversions and registrations. It features robust animations, intuitive grids, and a completely responsive mobile funnel to hook fitness clients immediately. Highly optimized for high search visibility and local SEO metrics.",
        tech: ["HTML5 / CSS3", "Tailwind CSS", "Vanilla JavaScript", "IntersectionObserver API", "Web Animations API"],
        features: [
            "Fluid responsive event schedule grids",
            "High-converting customer lead forms",
            "Interactive trainer profiling cards",
            "Dynamic class registration pipeline"
        ],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrqswMIUvQxwybMaFIB2xzMyZMbfE6PZ5nu9RKyR8cPKEPhaa7acXlHSEqd92CiLeD59hr_VcgJM5zww9HTOmYSFIb7fAOucqQoXncjGWD3p53pTka_JTmGknnSWQ3m-7QX3HpDAoy4kfs5DSHR3Ql4stouSyi8cn8fWM-ROMC9O_peIpReVudOM5cGOt2sWmqsigvy8BYDl1GnqqsysnXQxMeAaewtdN1J2qZloXNFbX5WLnY53hvN78BMwwXd9ivzDOo1UgHSdA",
        link: "https://nine13.site/gymwave"
    },
    diet: {
        title: "NutriPlan Global",
        tagline: "Health-Focused Digital Product Platform",
        desc: "NutriPlan Global is a clean, trustworthy digital portal centered around customized nutrition, diet templates, and digital courses. It establishes high brand authority using classic serif headlines paired with crisp geometric body text, optimized to deliver perfect contrast on high-definition retina displays.",
        tech: ["HTML5", "Tailwind CSS", "Vanilla JavaScript", "Grid Systems", "LocalStorage States"],
        features: [
            "Interactive customized diet-builder questionnaire",
            "Responsive nutrient calculators",
            "Exquisite typography hierarchy & grids",
            "Accordion FAQ modules for customer trust"
        ],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfu2gjjEoe6ikVw2LC8rh8CJCA914vrNFR-Q9ukzKUUX9BocktbyzD64Ryo8L-Z6H6C8h3ktWNOGOLLCpJOHwGl_aP8bjjaNIA1Or3aumyOLKUxzUbrm-kfZTU2Y2Y53SBPHtqqXs7NkGWR45AalXQ7WtjjOoRkjTQ6eC5ACeGqdzykvr7s2o1lyFnznxrZJn13QUXQ8melszd8gwZxEnAU3XYbsEwCwb2SC9Z7C4wp6CjpwqlK3QmgRnUOGV6l-zXA714T1ZrC58",
        link: "https://nine13.site/diet"
    },
    premiumbarbershop: {
        title: "Premium Barbershop",
        tagline: "Luxury Salon Branding & Booking Portal",
        desc: "A luxury lifestyle branding and appointment scheduler developed for premium grooming experiences. Featuring clean glassmorphism layouts, full dark mode aesthetics, and clear, distraction-free booking triggers to maximize physical salon checkouts.",
        tech: ["HTML5", "CSS Grid & Flexbox", "Tailwind CSS", "Interactive Booking Engines", "Custom Transitions"],
        features: [
            "Sleek dynamic rate sheets",
            "Integrated appointment reservation workflow",
            "Interactive hairstyle catalog selection",
            "Touch-optimized navigation structures"
        ],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmmrEs8MEerrEQW7G8pp1TJvx_l3E29gaEmFU2IgXIND6-0z-NHTSgh4WrBta59BtqG_hSxatKXIyxZg7UY8zo1qDIR_5CP1zhI3BORwlAgYUlP53UtgCAVxLsjmXSsa5SonKXV4CGf4VzXrMv1TnrpfrdCZYpEpSQ7dw7T6YOr9pTtO981Kyy833pU8KZeq0lBcI1_6fMEYC0i8AZwBaRau-HB_-jW0KAx4-6JrOS0tN4mgynEdJMcQZU2ZowoHHvajcmDwVeYJE",
        link: "https://nine13.site/premiumbarbershop"
    },
    bottleorder: {
        title: "Bottleorder",
        tagline: "Interactive Potion Mixing & Gamified Experience",
        desc: "Bottleorder is an interactive gamified web experience designed to showcase custom frontend rendering algorithms. It offers a playful, response-driven workflow where users blend ingredients under clean grid layouts, rendering mathematical transitions instantly on mobile and desktop alike.",
        tech: ["HTML5 Canvas", "CSS Animations", "Vanilla JS Classes", "Custom State Engines", "Responsive Flex grids"],
        features: [
            "Responsive layout matching any viewport",
            "Physics-inspired particle render logic",
            "Smooth gamified item drag systems",
            "Instantly responsive game grids"
        ],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyQZFhaOA2uL_uen1rDb-zM6HZHyTaoVUyiq7K2Dtvw0tvFFRq6d2PK5vzQJWj1wh8TRkbCYqSrR4ERSAne82CxqzA2tuSL2df5xiKPoUdtna-FN4ngHdKX9XnPl8Qf3qnAtHqObGY7iB414aybrRLxpISQnNgXtqGX0ifBGy5q4zn0nRo6s_HcyrDOyj7X7HjKIkWmMS2P4cMeqyNxC3YUORjPlzBi4qNzyJYGXOY_Mcc0dXofLpwNiqktLjJskE1F0geWhFLLGo",
        link: "https://nine13.site/bottleorder"
    },
    cleaningservice: {
        title: "Cleaning Service",
        tagline: "High-Converting Local Service Platform",
        desc: "A trust-focused local business booking platform designed to simplify home services. Using precise geometric grids and prominent social proof metrics, the platform optimizes service customizer tools and transparent instant price estimation widgets.",
        tech: ["HTML5 / Semantic CSS", "Tailwind CSS", "Modular Vanilla JS", "Dynamic Calculator Logic", "Validation Engines"],
        features: [
            "Instant pricing estimation widget",
            "Responsive reviews and case-study catalog",
            "Optimized call-to-action sections for lead capture",
            "Quick-dial touches and location integration"
        ],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD58eXv4w8GWF8UmpW77CTZfg-hlHbEohJuD1mUZPTZmFvuffekiX7NzKpIlKYJERylnTm2B_fiFFRCAu8rXcZlogAQn9Gh1A1geYYa8GEaSYeMD1pkjudr7hxeO8S2qmxtnW3HoVAByQTuDKFKGXZF5-Tf41WxqP0LLDLZqj_A5ZxiyJrmhiQBn8VZdjCWeHTrtno4mZRg5IxQ9bcQZQOBueq2Rw7QsrjfOjsvdwH9o1JfU56BKQaMO5qom0_K_a0oflzsqLYjp4",
        link: "https://nine13.site/cleaningservice"
    }
};

// ==========================================
// 2. App State & Core DOM Elements
// ==========================================
const DOM = {
    html: document.documentElement,
    themeToggle: document.getElementById("theme-toggle"),
    themeToggleMobile: document.getElementById("theme-toggle-mobile"),
    themeIcon: document.getElementById("theme-toggle-icon"),
    themeIconMobile: document.getElementById("theme-toggle-icon-mobile"),
    
    mobileMenuBtn: document.getElementById("mobile-menu-btn"),
    mobileMenu: document.getElementById("mobile-menu"),
    mobileMenuIcon: document.getElementById("mobile-menu-icon"),
    
    mainNav: document.getElementById("main-nav"),
    scrollProgress: document.getElementById("scroll-progress"),
    backToTopBtn: document.getElementById("back-to-top"),
    
    contactModal: document.getElementById("contact-modal"),
    contactModalContent: document.getElementById("contact-modal-content"),
    closeContactModalBtn: document.getElementById("close-contact-modal"),
    contactForm: document.getElementById("contact-form"),
    budgetSlider: document.getElementById("client-budget"),
    budgetValueText: document.getElementById("budget-value"),
    modalLoadingState: document.getElementById("modal-loading-state"),
    modalSuccessState: document.getElementById("modal-success-state"),
    successCloseBtn: document.getElementById("success-close-btn"),
    loadingTitle: document.getElementById("loading-title"),
    loadingDesc: document.getElementById("loading-desc"),
    
    projectModal: document.getElementById("project-modal"),
    projectModalContent: document.getElementById("project-modal-content"),
    closeProjectModalBtn: document.getElementById("close-project-modal"),
    projectModalCloseFooter: document.getElementById("project-modal-close"),
    projectModalTitle: document.getElementById("project-modal-title"),
    projectModalTagline: document.getElementById("project-modal-tagline"),
    projectModalImg: document.getElementById("project-modal-img"),
    projectModalImgMobile: document.getElementById("project-modal-img-mobile"),
    projectModalDesc: document.getElementById("project-modal-desc"),
    projectModalFeatures: document.getElementById("project-modal-features"),
    projectModalTech: document.getElementById("project-modal-tech"),
    projectModalLink: document.getElementById("project-modal-link")
};

// State Variables
let isMobileMenuOpen = false;

// ==========================================
// 3. Theme System (Dark / Light Mode)
// ==========================================
const ThemeSystem = {
    init() {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            this.setDarkTheme();
        } else {
            this.setLightTheme();
        }
        
        // Listeners
        DOM.themeToggle?.addEventListener("click", () => this.toggleTheme());
        DOM.themeToggleMobile?.addEventListener("click", () => this.toggleTheme());
        
        // Listen for OS changes
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
                e.matches ? this.setDarkTheme() : this.setLightTheme();
            }
        });
    },
    
    toggleTheme() {
        if (DOM.html.classList.contains("dark")) {
            this.setLightTheme();
            localStorage.setItem("theme", "light");
        } else {
            this.setDarkTheme();
            localStorage.setItem("theme", "dark");
        }
    },
    
    setDarkTheme() {
        DOM.html.classList.add("dark");
        if (DOM.themeIcon) DOM.themeIcon.textContent = "light_mode";
        if (DOM.themeIconMobile) DOM.themeIconMobile.textContent = "light_mode";
    },
    
    setLightTheme() {
        DOM.html.classList.remove("dark");
        if (DOM.themeIcon) DOM.themeIcon.textContent = "dark_mode";
        if (DOM.themeIconMobile) DOM.themeIconMobile.textContent = "dark_mode";
    }
};

// ==========================================
// 4. Navigation & Layout Scroll Control
// ==========================================
const NavigationSystem = {
    init() {
        // Toggle mobile menu
        DOM.mobileMenuBtn?.addEventListener("click", () => this.toggleMobileMenu());
        
        // Dynamic scroll effects
        window.addEventListener("scroll", () => this.handleScroll());
        
        // Smooth scroll for nav anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    this.closeMobileMenu();
                    
                    const navHeight = DOM.mainNav?.offsetHeight || 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Back to top button listener
        DOM.backToTopBtn?.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        
        // Close menu on resize above mobile width
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768 && isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        });
    },
    
    toggleMobileMenu() {
        if (isMobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    },
    
    openMobileMenu() {
        isMobileMenuOpen = true;
        if (DOM.mobileMenuIcon) DOM.mobileMenuIcon.textContent = "close";
        
        if (DOM.mobileMenu) {
            DOM.mobileMenu.classList.remove("hidden");
            // Force reflow
            DOM.mobileMenu.offsetHeight;
            DOM.mobileMenu.classList.add("max-h-[300px]", "opacity-100");
            DOM.mobileMenu.classList.remove("max-h-0", "opacity-0");
        }
    },
    
    closeMobileMenu() {
        isMobileMenuOpen = false;
        if (DOM.mobileMenuIcon) DOM.mobileMenuIcon.textContent = "menu";
        
        if (DOM.mobileMenu) {
            DOM.mobileMenu.classList.add("max-h-0", "opacity-0");
            DOM.mobileMenu.classList.remove("max-h-[300px]", "opacity-100");
            
            // Wait for transition to complete before setting display hidden
            setTimeout(() => {
                if (!isMobileMenuOpen) {
                    DOM.mobileMenu.classList.add("hidden");
                }
            }, 300);
        }
    },
    
    handleScroll() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // 1. Scroll progress bar
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        DOM.html.style.setProperty("--scroll-percent", `${scrollPercent}%`);
        
        // 2. Active nav link highlighter
        const sections = document.querySelectorAll("header, section");
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - (DOM.mainNav?.offsetHeight || 80) - 20;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });
        
        if (currentSectionId) {
            document.querySelectorAll(".nav-link").forEach(link => {
                const href = link.getAttribute("href");
                if (href === `#${currentSectionId}`) {
                    link.classList.add("text-primary", "border-primary");
                    link.classList.remove("text-on-surface-variant", "border-transparent");
                } else {
                    link.classList.remove("text-primary", "border-primary");
                    link.classList.add("text-on-surface-variant", "border-transparent");
                }
            });
        }
        
        // 3. Navbar background shadow/blur toggle on scroll
        if (scrollTop > 50) {
            DOM.mainNav?.classList.add("shadow-md", "bg-surface/90");
            DOM.mainNav?.classList.remove("border-transparent");
        } else {
            DOM.mainNav?.classList.remove("shadow-md", "bg-surface/90");
            DOM.mainNav?.classList.add("border-b", "border-surface-variant/30");
        }
        
        // 4. Back to top button visibility
        if (scrollTop > 400) {
            DOM.backToTopBtn?.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
            DOM.backToTopBtn?.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
        } else {
            DOM.backToTopBtn?.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
            DOM.backToTopBtn?.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
        }
    }
};

// ==========================================
// 5. Scroll Reveal Engine (Micro-Animations)
// ==========================================
const ScrollRevealEngine = {
    init() {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target); // Unobserve after animation is triggered
                }
            });
        }, options);
        
        document.querySelectorAll(".reveal-on-scroll").forEach(el => {
            observer.observe(el);
        });
    }
};

// ==========================================
// 6. Contact Form Modal System
// ==========================================
const ContactModalSystem = {
    budgetRanges: {
        1: "$500 - $1,500",
        2: "$1,500 - $3,000",
        3: "$3,000 - $5,000",
        4: "$5,000+"
    },
    
    init() {
        // Budget slider listener
        DOM.budgetSlider?.addEventListener("input", (e) => {
            const val = e.target.value;
            if (DOM.budgetValueText) {
                DOM.budgetValueText.textContent = this.budgetRanges[val];
            }
        });
        
        // Setup triggers
        document.querySelectorAll(".contact-trigger").forEach(btn => {
            btn.addEventListener("click", () => this.open());
        });
        
        // Setup close buttons
        DOM.closeContactModalBtn?.addEventListener("click", () => this.close());
        DOM.successCloseBtn?.addEventListener("click", () => this.close());
        
        // Backdrop click close
        DOM.contactModal?.addEventListener("click", (e) => {
            if (e.target === DOM.contactModal) this.close();
        });
        
        // Escape key close
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !DOM.contactModal?.classList.contains("hidden")) {
                this.close();
            }
        });
        
        // Form Submit Handler
        DOM.contactForm?.addEventListener("submit", (e) => this.handleSubmit(e));
    },
    
    open() {
        // Prevent body scroll
        document.body.classList.add("overflow-hidden");
        
        // Reset states
        DOM.contactForm?.classList.remove("hidden");
        DOM.modalLoadingState?.classList.add("hidden");
        DOM.modalSuccessState?.classList.add("hidden");
        DOM.contactForm?.reset();
        if (DOM.budgetValueText && DOM.budgetSlider) {
            DOM.budgetSlider.value = 2;
            DOM.budgetValueText.textContent = this.budgetRanges[2];
        }
        this.clearValidationErrors();
        
        // Show modal
        DOM.contactModal?.classList.remove("hidden");
        // Force reflow
        DOM.contactModal?.offsetHeight;
        DOM.contactModal?.classList.add("opacity-100");
        DOM.contactModal?.classList.remove("opacity-0");
        
        // Scale content
        DOM.contactModalContent?.classList.add("scale-100", "opacity-100");
        DOM.contactModalContent?.classList.remove("scale-95", "opacity-0");
        
        // Focus first field
        setTimeout(() => document.getElementById("client-name")?.focus(), 150);
    },
    
    close() {
        // Enable body scroll
        document.body.classList.remove("overflow-hidden");
        
        // Hide anim
        DOM.contactModal?.classList.add("opacity-0");
        DOM.contactModal?.classList.remove("opacity-100");
        
        DOM.contactModalContent?.classList.add("scale-95", "opacity-0");
        DOM.contactModalContent?.classList.remove("scale-100", "opacity-100");
        
        setTimeout(() => {
            DOM.contactModal?.classList.add("hidden");
        }, 300);
    },
    
    clearValidationErrors() {
        ["name-error", "email-error", "message-error"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add("hidden");
        });
        ["client-name", "client-email", "client-message"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove("ring-2", "ring-error", "border-transparent");
        });
    },
    
    validateForm() {
        this.clearValidationErrors();
        let isValid = true;
        
        const name = document.getElementById("client-name");
        const email = document.getElementById("client-email");
        const message = document.getElementById("client-message");
        
        // Name Validation
        if (!name?.value.trim()) {
            document.getElementById("name-error")?.classList.remove("hidden");
            name?.classList.add("ring-2", "ring-error", "border-transparent");
            isValid = false;
        }
        
        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email?.value.trim() || !emailRegex.test(email.value)) {
            document.getElementById("email-error")?.classList.remove("hidden");
            email?.classList.add("ring-2", "ring-error", "border-transparent");
            isValid = false;
        }
        
        // Message Validation
        if (!message?.value.trim()) {
            document.getElementById("message-error")?.classList.remove("hidden");
            message?.classList.add("ring-2", "ring-error", "border-transparent");
            isValid = false;
        }
        
        return isValid;
    },
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) return;
        
        // Gather data
        const nameVal = document.getElementById("client-name").value.trim();
        const emailVal = document.getElementById("client-email").value.trim();
        const projectVal = document.getElementById("client-project").value;
        const budgetVal = this.budgetRanges[DOM.budgetSlider.value];
        const messageVal = document.getElementById("client-message").value.trim();
        
        const submission = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            name: nameVal,
            email: emailVal,
            projectType: projectVal,
            budget: budgetVal,
            message: messageVal,
            timestamp: new Date().toISOString()
        };
        
        // Show loading state
        DOM.contactForm?.classList.add("hidden");
        DOM.modalLoadingState?.classList.remove("hidden");
        
        // Progression message list for realism & design delight
        const loadSteps = [
            { text: "Securing Connection...", desc: "Initializing handshakes with Nino's server..." },
            { text: "Analyzing Requirements...", desc: "Structuring your project details and brief..." },
            { text: "Encrypting Payload...", desc: "Wrapping inquiries into safe digital packages..." },
            { text: "Dispatching Message...", desc: "Sending records directly to Nino's dashboard..." }
        ];
        
        let stepIdx = 0;
        const loadTimer = setInterval(() => {
            stepIdx++;
            if (stepIdx < loadSteps.length) {
                if (DOM.loadingTitle) DOM.loadingTitle.textContent = loadSteps[stepIdx].text;
                if (DOM.loadingDesc) DOM.loadingDesc.textContent = loadSteps[stepIdx].desc;
            } else {
                clearInterval(loadTimer);
                
                // Save to local storage for demonstrational functionality
                const prevSubmissions = JSON.parse(localStorage.getItem("nino_portfolio_submissions") || "[]");
                prevSubmissions.push(submission);
                localStorage.setItem("nino_portfolio_submissions", JSON.stringify(prevSubmissions));
                
                // Transmit to success state
                DOM.modalLoadingState?.classList.add("hidden");
                
                const successDesc = document.getElementById("success-desc");
                if (successDesc) {
                    successDesc.innerHTML = `Thank you, <strong>${nameVal}</strong>! Your inquiry for a <strong>${projectVal}</strong> site is securely logged. Nino will review your goals and get in touch at <strong>${emailVal}</strong> within 24 hours.`;
                }
                
                DOM.modalSuccessState?.classList.remove("hidden");
            }
        }, 600);
    }
};

// ==========================================
// 7. Project Details Modal System
// ==========================================
const ProjectModalSystem = {
    init() {
        // Triggers
        document.querySelectorAll(".project-details-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const projId = btn.getAttribute("data-project");
                if (projId && projectsData[projId]) {
                    this.open(projectsData[projId]);
                }
            });
        });
        
        // Close controls
        DOM.closeProjectModalBtn?.addEventListener("click", () => this.close());
        DOM.projectModalCloseFooter?.addEventListener("click", () => this.close());
        
        // Close on backdrop click
        DOM.projectModal?.addEventListener("click", (e) => {
            if (e.target === DOM.projectModal) this.close();
        });
        
        // Escape close
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !DOM.projectModal?.classList.contains("hidden")) {
                this.close();
            }
        });
    },
    
    open(data) {
        // Prevent body scroll
        document.body.classList.add("overflow-hidden");
        
        // Populate elements
        if (DOM.projectModalTitle) DOM.projectModalTitle.textContent = data.title;
        if (DOM.projectModalTagline) DOM.projectModalTagline.textContent = data.tagline;
        if (DOM.projectModalDesc) DOM.projectModalDesc.textContent = data.desc;
        
        if (DOM.projectModalImg) {
            DOM.projectModalImg.src = data.img;
            DOM.projectModalImg.alt = `${data.title} Website Preview Mockup`;
        }
        if (DOM.projectModalImgMobile) {
            DOM.projectModalImgMobile.src = data.img;
            DOM.projectModalImgMobile.alt = `${data.title} Mobile View Mockup`;
        }
        
        // Build tech badges
        if (DOM.projectModalTech) {
            DOM.projectModalTech.innerHTML = "";
            data.tech.forEach(techItem => {
                const badge = document.createElement("span");
                badge.className = "bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded font-label border border-primary/10 hover:bg-primary-fixed-dim transition-colors cursor-default";
                badge.textContent = techItem;
                DOM.projectModalTech.appendChild(badge);
            });
        }
        
        // Build features list
        if (DOM.projectModalFeatures) {
            DOM.projectModalFeatures.innerHTML = "";
            data.features.forEach(feat => {
                const item = document.createElement("li");
                item.className = "flex items-start space-x-2.5";
                
                const checkmarkIcon = document.createElement("span");
                checkmarkIcon.className = "material-symbols-outlined text-primary text-lg mt-0.5 select-none";
                checkmarkIcon.textContent = "check_circle";
                
                const textSpan = document.createElement("span");
                textSpan.className = "leading-relaxed text-on-surface-variant font-medium";
                textSpan.textContent = feat;
                
                item.appendChild(checkmarkIcon);
                item.appendChild(textSpan);
                DOM.projectModalFeatures.appendChild(item);
            });
        }
        
        // Link
        if (DOM.projectModalLink) {
            DOM.projectModalLink.href = data.link;
        }
        
        // Show modal
        DOM.projectModal?.classList.remove("hidden");
        // Force reflow
        DOM.projectModal?.offsetHeight;
        DOM.projectModal?.classList.add("opacity-100");
        DOM.projectModal?.classList.remove("opacity-0");
        
        DOM.projectModalContent?.classList.add("scale-100", "opacity-100");
        DOM.projectModalContent?.classList.remove("scale-95", "opacity-0");
    },
    
    close() {
        document.body.classList.remove("overflow-hidden");
        
        DOM.projectModal?.classList.add("opacity-0");
        DOM.projectModal?.classList.remove("opacity-100");
        
        DOM.projectModalContent?.classList.add("scale-95", "opacity-0");
        DOM.projectModalContent?.classList.remove("scale-100", "opacity-100");
        
        setTimeout(() => {
            DOM.projectModal?.classList.add("hidden");
        }, 300);
    }
};

// ==========================================
// 8. Application Initializer
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Add slide reveal animation triggers
    document.querySelectorAll("header, section, .group").forEach(el => {
        el.classList.add("reveal-on-scroll");
    });
    
    // Core Modules Initialisation
    ThemeSystem.init();
    NavigationSystem.init();
    ScrollRevealEngine.init();
    ContactModalSystem.init();
    ProjectModalSystem.init();
    
    // Initial scroll call to establish states
    NavigationSystem.handleScroll();
});

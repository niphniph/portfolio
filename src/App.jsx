import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. Projects Database
// ==========================================
const projectsData = {
    gymwave: {
        title: "GymWave",
        tagline: "Premium Event & Fitness Registration Platform",
        desc: "GymWave is a high-energy, premium event website designed to drive user conversions and registrations. It features robust animations, intuitive grids, and a completely responsive mobile funnel to hook fitness clients immediately. Highly optimized for high search visibility and local SEO metrics.",
        tech: ["HTML5 / CSS3", "Vanilla CSS", "Vanilla JavaScript", "IntersectionObserver API", "Web Animations API"],
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
        tech: ["HTML5", "Vanilla CSS", "Vanilla JavaScript", "Grid Systems", "LocalStorage States"],
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
        tech: ["HTML5", "CSS Grid & Flexbox", "Vanilla CSS", "Interactive Booking Engines", "Custom Transitions"],
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
        tech: ["HTML5 / Semantic CSS", "Vanilla CSS", "Modular Vanilla JS", "Dynamic Calculator Logic", "Validation Engines"],
        features: [
            "Instant pricing estimation widget",
            "Responsive reviews and case-study catalog",
            "Optimized call-to-action sections for lead capture",
            "Quick-dial touches and location integration"
        ],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD58eXv4w8GWF8UmpW77CTZfg-hlHbEohJuD1mUZPTZmFvuffekiX7NzKpIlKYJERylnTm2B_fiFFRCAu8rXcZlogAQn9Gh1A1geYYa8GEaSYeMD1pkjudr7hxeO8S2qmxtnW3HoVAByQTuDKFKGXZF5-Tf41WxqP0LLDLZqj_A5ZxiyJrmhiQBn8VZdjCWeHTrtno4mZRg5IxQ9bcQZQOBueq2Rw7QsrjfOjsvdwH9o1JfU56BKQaMO5qom0_K_a0oflzsqLYjp4",
        link: "https://nine13.site/cleaningservice"
    },
    ninokvariani2: {
        title: "Georgian Institute of Psychosynthesis",
        tagline: "Holistic Growth & Psychological Research Portal",
        desc: "The Georgian Institute of Psychosynthesis (GIP) is an educational and research platform dedicated to holistic personal growth and professional psychological development. The portal serves as a bridge between ancient psycho-spiritual traditions and modern therapeutic practices, featuring bilingual content, structured academic programs, and international trainer showcases.",
        tech: ["HTML5 / CSS3", "Vanilla CSS", "Vanilla JavaScript", "Responsive Grid Layouts", "Bilingual Localization"],
        features: [
            "Comprehensive academic & professional training catalogs",
            "Interactive international trainer spotlight modules",
            "Bilingual localization framework (Georgian / English)",
            "Optimized resources & event registration channels"
        ],
        img: "/ninokvariani2.png",
        link: "https://nine13.site/ninokvariani2"
    }
};

const budgetRanges = {
    1: "$500 - $1,500",
    2: "$1,500 - $3,000",
    3: "$3,000 - $5,000",
    4: "$5,000+"
};

export default function App() {
    // ==========================================
    // State Declarations
    // ==========================================
    const [theme, setTheme] = useState('light');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolledNav, setScrolledNav] = useState(false);
    
    // Contact Modal States
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactProject, setContactProject] = useState('business');
    const [contactBudget, setContactBudget] = useState(2);
    const [contactMessage, setContactMessage] = useState('');
    const [contactLoading, setContactLoading] = useState(false);
    const [contactSuccess, setContactSuccess] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState({ title: '', desc: '' });
    
    // Validation Errors
    const [errors, setErrors] = useState({ name: false, email: false, message: false });
    
    // Project Details Modal States
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // References
    const nameInputRef = useRef(null);

    // ==========================================
    // Effects & Listeners
    // ==========================================
    
    // 1. Initial Theme Integration
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // 2. Scroll Events Handling
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // Progress Bar
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollPercent(percent);
            
            // Nav scrolled state
            setScrolledNav(scrollTop > 50);
            
            // Back to top visibility
            setShowBackToTop(scrollTop > 400);
            
            // Active Section tracking
            const sections = document.querySelectorAll('header, section');
            let currentSection = 'home';
            sections.forEach(section => {
                const navHeight = 80;
                const sectionTop = section.offsetTop - navHeight - 20;
                const sectionHeight = section.offsetHeight;
                if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3. Scroll Reveal Engine
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px' });
        
        revealElements.forEach(el => observer.observe(el));
        
        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    // ==========================================
    // Methods & Actions
    // ==========================================
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleAnchorClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = 80;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navHeight,
                behavior: 'smooth'
            });
        }
    };

    // Modal Triggers
    const openContactModal = () => {
        document.body.classList.add('overflow-hidden');
        setContactName('');
        setContactEmail('');
        setContactProject('business');
        setContactBudget(2);
        setContactMessage('');
        setErrors({ name: false, email: false, message: false });
        setContactLoading(false);
        setContactSuccess(false);
        setIsContactModalOpen(true);
        setTimeout(() => nameInputRef.current?.focus(), 150);
    };

    const closeContactModal = () => {
        document.body.classList.remove('overflow-hidden');
        setIsContactModalOpen(false);
    };

    const openProjectModal = (projKey) => {
        document.body.classList.add('overflow-hidden');
        setSelectedProject(projectsData[projKey]);
        setIsProjectModalOpen(true);
    };

    const closeProjectModal = () => {
        document.body.classList.remove('overflow-hidden');
        setIsProjectModalOpen(false);
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        
        // Validation Checks
        let hasErrors = false;
        const newErrors = { name: false, email: false, message: false };
        
        if (!contactName.trim()) {
            newErrors.name = true;
            hasErrors = true;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!contactEmail.trim() || !emailRegex.test(contactEmail)) {
            newErrors.email = true;
            hasErrors = true;
        }
        
        if (!contactMessage.trim()) {
            newErrors.message = true;
            hasErrors = true;
        }
        
        setErrors(newErrors);
        if (hasErrors) return;
        
        // Simulation Loading Routine
        setContactLoading(true);
        
        const loadingSteps = [
            { title: "Securing Connection...", desc: "Initializing handshakes with Nino's server..." },
            { title: "Analyzing Requirements...", desc: "Structuring your project details and brief..." },
            { title: "Encrypting Payload...", desc: "Wrapping inquiries into safe digital packages..." },
            { title: "Dispatching Message...", desc: "Sending records directly to Nino's dashboard..." }
        ];
        
        setLoadingProgress(loadingSteps[0]);
        
        let step = 0;
        const interval = setInterval(() => {
            step++;
            if (step < loadingSteps.length) {
                setLoadingProgress(loadingSteps[step]);
            } else {
                clearInterval(interval);
                
                // Persist to LocalStorage for fully functional demonstration
                const submission = {
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
                    name: contactName,
                    email: contactEmail,
                    projectType: contactProject,
                    budget: budgetRanges[contactBudget],
                    message: contactMessage,
                    timestamp: new Date().toISOString()
                };
                
                const prev = JSON.parse(localStorage.getItem('nino_portfolio_submissions') || '[]');
                prev.push(submission);
                localStorage.setItem('nino_portfolio_submissions', JSON.stringify(prev));
                
                setContactLoading(false);
                setContactSuccess(true);
            }
        }, 600);
    };

    return (
        <div className="portfolio-app-root">
            {/* Scroll Progress Bar */}
            <div id="scroll-progress" style={{ width: `${scrollPercent}%` }}></div>

            {/* Top Navigation */}
            <nav className={`navbar ${scrolledNav ? 'scrolled' : ''}`}>
                <div className="max-container navbar-content">
                    <a 
                        className="logo" 
                        href="#home"
                        onClick={(e) => handleAnchorClick(e, '#home')}
                    >
                        Nino Kapanadze
                    </a>
                    
                    {/* Desktop Menu links */}
                    <div className="navbar-links">
                        <button 
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#home')}
                        >
                            Home
                        </button>
                        <button 
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#about')}
                        >
                            About
                        </button>
                        <button 
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            Projects
                        </button>
                        <button 
                            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#skills')}
                        >
                            Skills
                        </button>
                        <button 
                            className="btn-primary"
                            onClick={openContactModal}
                        >
                            Contact
                        </button>
                        
                        {/* Dark Toggle Desktop */}
                        <button 
                            onClick={toggleTheme}
                            className="theme-toggle-btn" 
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                    </div>

                    {/* Mobile menu controls */}
                    <div className="navbar-mobile-controls">
                        <button 
                            onClick={toggleTheme}
                            className="theme-toggle-btn" 
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu" 
                            className="mobile-menu-btn"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-dropdown-content">
                        <button 
                            className={`mobile-dropdown-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#home')}
                        >
                            Home
                        </button>
                        <button 
                            className={`mobile-dropdown-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#about')}
                        >
                            About
                        </button>
                        <button 
                            className={`mobile-dropdown-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            Projects
                        </button>
                        <button 
                            className={`mobile-dropdown-link ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={(e) => handleAnchorClick(e, '#skills')}
                        >
                            Skills
                        </button>
                        <button 
                            className="mobile-dropdown-link"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                openContactModal();
                            }}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero" id="home">
                <div className="max-container hero-grid">
                    <div className="hero-info animate-fade-in-up">
                        <span className="hero-span">Websites That Turn First Impressions Into Customers.</span>
                        <h1 className="hero-title text-balance">Premium Full Responsive Websites for Modern Brands</h1>
                        <p className="hero-desc">
                            I create modern, fully responsive websites for businesses, brands, and digital projects, designed to look premium, work smoothly, and adapt perfectly to every screen size.
                        </p>
                        <div className="hero-buttons">
                            <button 
                                className="btn-primary shadow-glow" 
                                onClick={(e) => handleAnchorClick(e, '#projects')}
                            >
                                View My Work
                            </button>
                            <button 
                                onClick={openContactModal}
                                className="btn-outline"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="hero-media animate-scale-up">
                        <div className="hero-glow"></div>
                        <div className="hero-frame">
                            <img alt="Portrait of Nino Kapanadze" className="hero-portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLJLZ3La_XZsPUbn0xO814H5dCR0S0ORjOKuGVSb1XC5vtCqIete2-XdXtODIVxHJtQ4HwOmKoBZ734mIjy6OjLW0BTtXyR53QtH88Eu7ZY3W94-8stHX7NaMDXyI_i_jJoRL5_av7O6r35-KPhcQRDUODCHS1QgCOckwnwEjtt7vPJZR-XP5Gl8st7vBIah9qlXwmMvXABP7qFruayVu-9Xc9J9JtyGvJoPq5LZMmVXhByil2xE-d-6HdVhs2QfJmmkO5pvj5pHI"/>
                        </div>
                    </div>
                </div>
            </header>

            {/* Metrics Strip */}
            <section className="metrics">
                <div className="max-container metrics-grid">
                    <div className="metric-card">
                        <span className="material-symbols-outlined metric-icon">trending_up</span>
                        <h3 className="metric-value">50%+</h3>
                        <p className="metric-label">More Customer Interest</p>
                    </div>
                    <div className="metric-card">
                        <span className="material-symbols-outlined metric-icon">leaderboard</span>
                        <h3 className="metric-value">4–5x</h3>
                        <p className="metric-label">More Lead Opportunities</p>
                    </div>
                    <div className="metric-card">
                        <span className="material-symbols-outlined metric-icon">devices</span>
                        <h3 className="metric-value">100%</h3>
                        <p className="metric-label">Responsive on Every Device</p>
                    </div>
                    <div className="metric-card">
                        <span className="material-symbols-outlined metric-icon">verified</span>
                        <h3 className="metric-value">Premium</h3>
                        <p className="metric-label">Business-Ready Design</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about reveal-on-scroll" id="about">
                <div className="max-container about-grid">
                    <div>
                        <h2 className="about-title">Professional Foundation</h2>
                        <div className="about-line"></div>
                    </div>
                    <div className="about-content">
                        <p className="about-p-lead">
                            I build complete, full responsive websites for businesses and personal brands. My approach combines technical precision with a high-end aesthetic to ensure your digital presence is not only beautiful but structurally sound and optimized for growth.
                        </p>
                        <p className="about-p-body">
                            Every project is crafted with a focus on premium presentation, ensuring that your website acts as a powerful asset to turn first impressions into lasting customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Showcase */}
            <section className="projects" id="projects">
                <div className="max-container">
                    <div className="section-head reveal-on-scroll">
                        <h2 className="section-title">Selected Website Projects</h2>
                        <p className="section-subtitle">See the design, responsiveness, structure, and premium website style of my work.</p>
                    </div>
                    
                    <div className="projects-grid">
                        {/* Project 1: GymWave */}
                        <div className="project-card reveal-on-scroll">
                            <div className="project-bar">
                                <div className="dots">
                                    <div className="dot dot-red"></div>
                                    <div className="dot dot-yellow"></div>
                                    <div className="dot dot-green"></div>
                                </div>
                            </div>
                            <a 
                                href="https://nine13.site/gymwave" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-image-box"
                            >
                                <img alt="GymWave Website Preview" className="project-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrqswMIUvQxwybMaFIB2xzMyZMbfE6PZ5nu9RKyR8cPKEPhaa7acXlHSEqd92CiLeD59hr_VcgJM5zww9HTOmYSFIb7fAOucqQoXncjGWD3p53pTka_JTmGknnSWQ3m-7QX3HpDAoy4kfs5DSHR3Ql4stouSyi8cn8fWM-ROMC9O_peIpReVudOM5cGOt2sWmqsigvy8BYDl1GnqqsysnXQxMeAaewtdN1J2qZloXNFbX5WLnY53hvN78BMwwXd9ivzDOo1UgHSdA"/>
                            </a>
                            <div className="project-details">
                                <h3 className="project-card-title">GymWave</h3>
                                <p className="project-card-desc">Premium event website designed to drive registrations with high-energy visuals and seamless mobile responsiveness.</p>
                                <div className="project-actions project-buttons">
                                    <button 
                                        className="btn-outline"
                                        onClick={() => openProjectModal('gymwave')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="btn-primary" 
                                        href="https://nine13.site/gymwave" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website <span className="material-symbols-outlined ml-1.5 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 2: NutriPlan Global */}
                        <div className="project-card reveal-on-scroll">
                            <div className="project-bar">
                                <div className="dots">
                                    <div className="dot dot-red"></div>
                                    <div className="dot dot-yellow"></div>
                                    <div className="dot dot-green"></div>
                                </div>
                            </div>
                            <a 
                                href="https://nine13.site/diet" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-image-box"
                            >
                                <img alt="NutriPlan Global Interface Preview" className="project-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfu2gjjEoe6ikVw2LC8rh8CJCA914vrNFR-Q9ukzKUUX9BocktbyzD64Ryo8L-Z6H6C8h3ktWNOGOLLCpJOHwGl_aP8bjjaNIA1Or3aumyOLKUxzUbrm-kfZTU2Y2Y53SBPHtqqXs7NkGWR45AalXQ7WtjjOoRkjTQ6eC5ACeGqdzykvr7s2o1lyFnznxrZJn13QUXQ8melszd8gwZxEnAU3XYbsEwCwb2SC9Z7C4wp6CjpwqlK3QmgRnUOGV6l-zXA714T1ZrC58"/>
                            </a>
                            <div className="project-details">
                                <h3 className="project-card-title">NutriPlan Global</h3>
                                <p className="project-card-desc">Health-focused digital product platform featuring clean, readable typography and a trustworthy, professional aesthetic.</p>
                                <div className="project-actions project-buttons">
                                    <button 
                                        className="btn-outline"
                                        onClick={() => openProjectModal('diet')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="btn-primary" 
                                        href="https://nine13.site/diet" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website <span className="material-symbols-outlined ml-1.5 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 3: Premium Barbershop */}
                        <div className="project-card reveal-on-scroll">
                            <div className="project-bar">
                                <div className="dots">
                                    <div className="dot dot-red"></div>
                                    <div className="dot dot-yellow"></div>
                                    <div className="dot dot-green"></div>
                                </div>
                            </div>
                            <a 
                                href="https://nine13.site/premiumbarbershop" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-image-box"
                            >
                                <img alt="Premium Barbershop Website Preview" className="project-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmmrEs8MEerrEQW7G8pp1TJvx_l3E29gaEmFU2IgXIND6-0z-NHTSgh4WrBta59BtqG_hSxatKXIyxZg7UY8zo1qDIR_5CP1zhI3BORwlAgYUlP53UtgCAVxLsjmXSsa5SonKXV4CGf4VzXrMv1TnrpfrdCZYpEpSQ7dw7T6YOr9pTtO981Kyy833pU8KZeq0lBcI1_6fMEYC0i8AZwBaRau-HB_-jW0KAx4-6JrOS0tN4mgynEdJMcQZU2ZowoHHvajcmDwVeYJE"/>
                            </a>
                            <div className="project-details">
                                <h3 className="project-card-title">Premium Barbershop</h3>
                                <p className="project-card-desc">Luxury barbershop website designed to convey exclusivity and simplify the booking process for high-end clientele.</p>
                                <div className="project-actions project-buttons">
                                    <button 
                                        className="btn-outline"
                                        onClick={() => openProjectModal('premiumbarbershop')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="btn-primary" 
                                        href="https://nine13.site/premiumbarbershop" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website <span className="material-symbols-outlined ml-1.5 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 4: Bottleorder */}
                        <div className="project-card reveal-on-scroll">
                            <div className="project-bar">
                                <div className="dots">
                                    <div className="dot dot-red"></div>
                                    <div className="dot dot-yellow"></div>
                                    <div className="dot dot-green"></div>
                                </div>
                            </div>
                            <a 
                                href="https://nine13.site/bottleorder" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-image-box"
                            >
                                <img alt="Interactive game website interface" className="project-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQZFhaOA2uL_uen1rDb-zM6HZHyTaoVUyiq7K2Dtvw0tvFFRq6d2PK5vzQJWj1wh8TRkbCYqSrR4ERSAne82CxqzA2tuSL2df5xiKPoUdtna-FN4ngHdKX9XnPl8Qf3qnAtHqObGY7iB414aybrRLxpISQnNgXtqGX0ifBGy5q4zn0nRo6s_HcyrDOyj7X7HjKIkWmMS2P4cMeqyNxC3YUORjPlzBi4qNzyJYGXOY_Mcc0dXofLpwNiqktLjJskE1F0geWhFLLGo"/>
                            </a>
                            <div className="project-details">
                                <h3 className="project-card-title">Bottleorder</h3>
                                <p className="project-card-desc">Interactive game website featuring dynamic potion mixing animations and responsive layout across all device types.</p>
                                <div className="project-actions project-buttons">
                                    <button 
                                        className="btn-outline"
                                        onClick={() => openProjectModal('bottleorder')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="btn-primary" 
                                        href="https://nine13.site/bottleorder" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website <span className="material-symbols-outlined ml-1.5 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project 5: Cleaning Service */}
                        <div className="project-card reveal-on-scroll">
                            <div className="project-bar">
                                <div className="dots">
                                    <div className="dot dot-red"></div>
                                    <div className="dot dot-yellow"></div>
                                    <div className="dot dot-green"></div>
                                </div>
                            </div>
                            <a 
                                href="https://nine13.site/cleaningservice" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-image-box"
                            >
                                <img alt="Cleaning Service Website Preview" className="project-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD58eXv4w8GWF8UmpW77CTZfg-hlHbEohJuD1mUZPTZmFvuffekiX7NzKpIlKYJERylnTm2B_fiFFRCAu8rXcZlogAQn9Gh1A1geYYa8GEaSYeMD1pkjudr7hxeO8S2qmxtnW3HoVAByQTuDKFKGXZF5-Tf41WxqP0LLDLZqj_A5ZxiyJrmhiQBn8VZdjCWeHTrtno4mZRg5IxQ9bcQZQOBueq2Rw7QsrjfOjsvdwH9o1JfU56BKQaMO5qom0_K_a0oflzsqLYjp4"/>
                            </a>
                            <div className="project-details">
                                <h3 className="project-card-title">Cleaning Service</h3>
                                <p className="project-card-desc">Elegant service business website optimizing lead generation through clear structure and a trustworthy aesthetic.</p>
                                <div className="project-actions project-buttons">
                                    <button 
                                        className="btn-outline"
                                        onClick={() => openProjectModal('cleaningservice')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="btn-primary" 
                                        href="https://nine13.site/cleaningservice" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website <span className="material-symbols-outlined ml-1.5 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 6: Georgian Institute of Psychosynthesis */}
                        <div className="project-card reveal-on-scroll">
                            <div className="project-bar">
                                <div className="dots">
                                    <div className="dot dot-red"></div>
                                    <div className="dot dot-yellow"></div>
                                    <div className="dot dot-green"></div>
                                </div>
                            </div>
                            <a 
                                href="https://nine13.site/ninokvariani2" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-image-box"
                            >
                                <img alt="Georgian Institute of Psychosynthesis Website Preview" className="project-img" src="/ninokvariani2.png"/>
                            </a>
                            <div className="project-details">
                                <h3 className="project-card-title">Georgian Institute of Psychosynthesis</h3>
                                <p className="project-card-desc">Educational and research portal for holistic personal growth and professional psychological development in the Caucasus region.</p>
                                <div className="project-actions project-buttons">
                                    <button 
                                        className="btn-outline"
                                        onClick={() => openProjectModal('ninokvariani2')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="btn-primary" 
                                        href="https://nine13.site/ninokvariani2" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website <span className="material-symbols-outlined ml-1.5 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills reveal-on-scroll" id="skills">
                <div className="max-container skills-wrapper">
                    <h2 className="section-title">Core Capabilities</h2>
                    <div className="skills-grid">
                        <span className="skill-tag">Full Responsive Website Development</span>
                        <span className="skill-tag">Premium Website Design</span>
                        <span className="skill-tag">Front-End Development</span>
                        <span className="skill-tag">Mobile-Friendly Websites</span>
                        <span className="skill-tag">Business Website Creation</span>
                        <span className="skill-tag">Landing Page Development</span>
                        <span className="skill-tag">Website Customization</span>
                        <span className="skill-tag">Modern Web Experiences</span>
                    </div>
                </div>
            </section>

            {/* Final CTA & Contact */}
            <section className="contact reveal-on-scroll" id="contact">
                <div className="max-container contact-wrapper">
                    <h2 className="section-title">Let’s Build Something Exceptional</h2>
                    <p className="contact-motive">"Websites That Turn First Impressions Into Customers."</p>
                    <div className="contact-buttons">
                        <button 
                            className="btn-primary"
                            onClick={openContactModal}
                        >
                            Contact Me
                        </button>
                        <button 
                            className="btn-outline" 
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            View Projects
                        </button>
                    </div>
                    <div className="contact-cards">
                        <a className="contact-card-box" href="mailto:ninekapanadze@gmail.com">
                            <span className="material-symbols-outlined contact-card-icon">mail</span>
                            <span className="contact-card-text">Email</span>
                        </a>
                        <a className="contact-card-box" href="tel:+995597042154">
                            <span className="material-symbols-outlined contact-card-icon">phone</span>
                            <span className="contact-card-text">Phone</span>
                        </a>
                        <a 
                            className="contact-card-box" 
                            href="https://www.linkedin.com/in/nino-kapanadze-7275b8252/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined contact-card-icon">link</span>
                            <span className="contact-card-text">LinkedIn</span>
                        </a>
                        <div className="contact-card-box">
                            <span className="material-symbols-outlined contact-card-icon">location_on</span>
                            <span className="contact-card-text">Tbilisi, Georgia</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Component */}
            <footer className="footer">
                <div className="max-container footer-content">
                    <div className="footer-info">
                        <span className="footer-logo">Nino Kapanadze</span>
                        <p className="footer-copyright">
                            © 2024 Nino Kapanadze. Websites That Turn First Impressions Into Customers.
                        </p>
                    </div>
                    <div className="footer-links-box">
                        <button 
                            className="footer-anchors" 
                            onClick={(e) => handleAnchorClick(e, '#home')}
                        >
                            Home
                        </button>
                        <button 
                            className="footer-anchors" 
                            onClick={(e) => handleAnchorClick(e, '#about')}
                        >
                            About
                        </button>
                        <button 
                            className="footer-anchors" 
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            Projects
                        </button>
                        <button 
                            className="footer-anchors" 
                            onClick={(e) => handleAnchorClick(e, '#skills')}
                        >
                            Skills
                        </button>
                        <button 
                            className="footer-anchors"
                            onClick={openContactModal}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </footer>

            {/* Dynamic Contact Modal */}
            {isContactModalOpen && (
                <div 
                    className="modal-layer" 
                    id="contact-modal"
                    role="dialog" 
                    aria-modal="true" 
                    aria-labelledby="modal-title"
                    onClick={(e) => {
                        if (e.target.id === 'contact-modal') closeContactModal();
                    }}
                >
                    <div className="modal-card modal-card-small">
                        {/* Modal Header */}
                        <div className="modal-top">
                            <h2 id="modal-title" className="modal-title">Get In Touch</h2>
                            <button 
                                onClick={closeContactModal}
                                className="modal-dismiss" 
                                aria-label="Close Modal"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        
                        {/* Modal Form Scroll Container */}
                        <div className="modal-body">
                            {/* Form View */}
                            {!contactLoading && !contactSuccess && (
                                <form onSubmit={handleContactSubmit}>
                                    <div className="form-row">
                                        <label htmlFor="client-name" className="form-label">Your Name <span className="form-star">*</span></label>
                                        <input 
                                            type="text" 
                                            id="client-name" 
                                            ref={nameInputRef}
                                            required 
                                            value={contactName}
                                            onChange={(e) => setContactName(e.target.value)}
                                            className={`form-input ${errors.name ? 'form-input-error' : ''}`} 
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && <span className="form-error-label">Please enter your name.</span>}
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="client-email" className="form-label">Your Email <span className="form-star">*</span></label>
                                        <input 
                                            type="email" 
                                            id="client-email" 
                                            required 
                                            value={contactEmail}
                                            onChange={(e) => setContactEmail(e.target.value)}
                                            className={`form-input ${errors.email ? 'form-input-error' : ''}`} 
                                            placeholder="name@company.com"
                                        />
                                        {errors.email && <span className="form-error-label">Please enter a valid email address.</span>}
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="client-project" className="form-label">Project Type</label>
                                        <select 
                                            id="client-project" 
                                            value={contactProject}
                                            onChange={(e) => setContactProject(e.target.value)}
                                            className="form-input"
                                        >
                                            <option value="business">Premium Business Website</option>
                                            <option value="landing">High-Converting Landing Page</option>
                                            <option value="ecommerce">Modern E-Commerce Portal</option>
                                            <option value="custom">Custom Web Application</option>
                                            <option value="other">Bespoke Design / Optimization</option>
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <div className="budget-title-bar">
                                            <label htmlFor="client-budget" className="form-label">Estimated Budget</label>
                                            <span className="budget-view">
                                                {budgetRanges[contactBudget]}
                                            </span>
                                        </div>
                                        <input 
                                            type="range" 
                                            id="client-budget" 
                                            min="1" 
                                            max="4" 
                                            value={contactBudget}
                                            onChange={(e) => setContactBudget(parseInt(e.target.value))}
                                            className="budget-input"
                                        />
                                        <div className="budget-marks">
                                            <span>&lt;$1.5k</span>
                                            <span>$1.5k-$3k</span>
                                            <span>$3k-$5k</span>
                                            <span>$5k+</span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="client-message" className="form-label">Project Brief <span className="form-star">*</span></label>
                                        <textarea 
                                            id="client-message" 
                                            required 
                                            rows="4" 
                                            value={contactMessage}
                                            onChange={(e) => setContactMessage(e.target.value)}
                                            className={`form-input ${errors.message ? 'form-input-error' : ''}`} 
                                            placeholder="Describe your project vision, target audience, and launch goals..."
                                            style={{ resize: 'none' }}
                                        />
                                        {errors.message && <span className="form-error-label">Please describe your project brief.</span>}
                                    </div>
                                    
                                    <div className="form-row" style={{ paddingTop: '8px', borderTop: '1px solid rgba(216, 208, 200, 0.2)', marginBottom: 0 }}>
                                        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                                            Send Message <span className="material-symbols-outlined ml-2 text-sm">send</span>
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Loading View */}
                            {contactLoading && (
                                <div className="modal-loader">
                                    <div className="loader-spinner">
                                        <div className="spinner-outer"></div>
                                        <div className="spinner-inner animate-spin"></div>
                                    </div>
                                    <h3 className="loader-title">{loadingProgress.title}</h3>
                                    <p className="loader-desc">{loadingProgress.desc}</p>
                                </div>
                            )}

                            {/* Success View */}
                            {contactSuccess && (
                                <div className="modal-success-box animate-scale-up">
                                    <div className="success-badge">
                                        <span className="material-symbols-outlined fill">check_circle</span>
                                    </div>
                                    <h3 className="success-title">Message Dispatched!</h3>
                                    <p className="success-p">
                                        Thank you, <strong>{contactName}</strong>! Your inquiry for a <strong>{contactProject}</strong> site is securely logged. Nino will review your goals and get in touch at <strong>{contactEmail}</strong> within 24 hours.
                                    </p>
                                    <button 
                                        type="button" 
                                        onClick={closeContactModal}
                                        className="btn-primary"
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Project Details Modal */}
            {isProjectModalOpen && selectedProject && (
                <div 
                    className="modal-layer" 
                    id="project-modal" 
                    role="dialog" 
                    aria-modal="true" 
                    aria-labelledby="project-modal-title"
                    onClick={(e) => {
                        if (e.target.id === 'project-modal') closeProjectModal();
                    }}
                >
                    <div className="modal-card modal-card-large animate-scale-up">
                        {/* Header */}
                        <div className="modal-top">
                            <div>
                                <h2 id="project-modal-title" className="modal-title">
                                    {selectedProject.title}
                                </h2>
                                <p className="modal-tagline">
                                    {selectedProject.tagline}
                                </p>
                            </div>
                            <button 
                                onClick={closeProjectModal}
                                className="modal-dismiss" 
                                aria-label="Close Modal"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        
                        {/* Content */}
                        <div className="modal-body">
                            <div className="project-modal-details">
                                {/* Simulated Premium Device Mockups */}
                                <div className="device-simulator">
                                    <div className="simulator-grad"></div>
                                    
                                    {/* Large Desktop Mockup */}
                                    <div className="desktop-mockup">
                                        <div className="mockup-bar">
                                            <div className="dots">
                                                <div className="dot dot-red"></div>
                                                <div className="dot dot-yellow"></div>
                                                <div className="dot dot-green"></div>
                                            </div>
                                            <div className="mockup-link-field">
                                                nine13.site/live-preview
                                            </div>
                                        </div>
                                        <div className="mockup-screen">
                                            <img className="mockup-img" src={selectedProject.img} alt={`${selectedProject.title} Desktop Mockup`} />
                                        </div>
                                    </div>

                                    {/* Floating Mobile Device Mockup */}
                                    <div className="mobile-mockup">
                                        <div className="mobile-top-bar">
                                            <div className="mobile-notch"></div>
                                        </div>
                                        <div className="mobile-screen">
                                            <img className="mockup-img" src={selectedProject.img} alt={`${selectedProject.title} Mobile Mockup`} />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details Text */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div>
                                        <h3 className="project-modal-desc-title">About the Project</h3>
                                        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                                            {selectedProject.desc}
                                        </p>
                                    </div>

                                    {/* Features list */}
                                    <div>
                                        <h3 className="project-modal-desc-title">Core Accomplishments & Features</h3>
                                        <ul className="project-modal-features-grid">
                                            {selectedProject.features.map((feat, index) => (
                                                <li key={index} className="project-modal-feature-item">
                                                    <span className="material-symbols-outlined">check_circle</span>
                                                    <span style={{ fontWeight: '500' }}>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Badges */}
                                    <div>
                                        <h3 className="project-modal-desc-title">Technologies Used</h3>
                                        <div className="project-modal-tech-box">
                                            {selectedProject.tech.map((badge, index) => (
                                                <span 
                                                    key={index}
                                                    className="project-modal-tech-badge"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="modal-foot">
                            <button 
                                onClick={closeProjectModal}
                                className="btn-outline"
                                style={{ padding: '12px 24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                            >
                                Close Preview
                            </button>
                            <a 
                                className="btn-primary" 
                                href={selectedProject.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ padding: '12px 24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                            >
                                Launch Live Site <span className="material-symbols-outlined ml-2 text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Back to Top Button */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
                aria-label="Back to Top"
            >
                <span className="material-symbols-outlined text-2xl">arrow_upward</span>
            </button>
        </div>
    );
}

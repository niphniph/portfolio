import React, { useState, useEffect, useRef } from 'react';

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
            
            // Nav shrink & blur
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
        // Initial call
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

    // 4. Modal Keybind Traps
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeContactModal();
                closeProjectModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
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
        <div className="min-h-screen transition-colors duration-300">
            {/* Scroll Progress Bar */}
            <div 
                className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-100" 
                style={{ width: `${scrollPercent}%` }}
            ></div>

            {/* Top Navigation */}
            <nav 
                id="main-nav" 
                className={`fixed top-0 w-full z-50 glass-effect border-b border-surface-variant/30 transition-all duration-300 ${
                    scrolledNav ? 'shadow-md bg-surface/90 py-3' : 'py-5'
                }`}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-16 flex justify-between items-center">
                    <a 
                        className="font-headline text-2xl font-bold tracking-tight text-primary transition-transform duration-300 hover:scale-[1.02]" 
                        href="#home"
                        onClick={(e) => handleAnchorClick(e, '#home')}
                    >
                        Nino Kapanadze
                    </a>
                    
                    {/* Desktop Menu links */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
                        <a 
                            className={`nav-link font-label text-xs uppercase tracking-widest pb-1 transition-all ${
                                activeSection === 'home' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
                            }`} 
                            href="#home"
                            onClick={(e) => handleAnchorClick(e, '#home')}
                        >
                            Home
                        </a>
                        <a 
                            className={`nav-link font-label text-xs uppercase tracking-widest pb-1 transition-all ${
                                activeSection === 'about' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
                            }`} 
                            href="#about"
                            onClick={(e) => handleAnchorClick(e, '#about')}
                        >
                            About
                        </a>
                        <a 
                            className={`nav-link font-label text-xs uppercase tracking-widest pb-1 transition-all ${
                                activeSection === 'projects' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
                            }`} 
                            href="#projects"
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            Projects
                        </a>
                        <a 
                            className={`nav-link font-label text-xs uppercase tracking-widest pb-1 transition-all ${
                                activeSection === 'skills' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
                            }`} 
                            href="#skills"
                            onClick={(e) => handleAnchorClick(e, '#skills')}
                        >
                            Skills
                        </a>
                        <button 
                            className="bg-primary text-on-primary font-label text-sm font-semibold px-6 py-3 rounded hover:bg-secondary transition-all duration-300 hover:shadow-[0_0_15px_rgba(194,101,42,0.4)]"
                            onClick={openContactModal}
                        >
                            Contact
                        </button>
                        
                        {/* Dark Toggle Desktop */}
                        <button 
                            onClick={toggleTheme}
                            className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded flex items-center justify-center" 
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                    </div>

                    {/* Mobile menu controls */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <button 
                            onClick={toggleTheme}
                            className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded flex items-center justify-center" 
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu" 
                            className="text-primary hover:text-secondary p-1 flex items-center justify-center"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div 
                    className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface-variant/20 shadow-lg px-5 overflow-hidden transition-all duration-300 ${
                        isMobileMenuOpen ? 'max-h-[300px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                    }`}
                >
                    <div className="flex flex-col space-y-4">
                        <a 
                            className="mobile-nav-link font-label text-xs uppercase tracking-widest text-primary border-b border-surface-variant/20 pb-2" 
                            href="#home"
                            onClick={(e) => handleAnchorClick(e, '#home')}
                        >
                            Home
                        </a>
                        <a 
                            className="mobile-nav-link font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-surface-variant/20 pb-2 hover:text-primary" 
                            href="#about"
                            onClick={(e) => handleAnchorClick(e, '#about')}
                        >
                            About
                        </a>
                        <a 
                            className="mobile-nav-link font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-surface-variant/20 pb-2 hover:text-primary" 
                            href="#projects"
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            Projects
                        </a>
                        <a 
                            className="mobile-nav-link font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-surface-variant/20 pb-2 hover:text-primary" 
                            href="#skills"
                            onClick={(e) => handleAnchorClick(e, '#skills')}
                        >
                            Skills
                        </a>
                        <button 
                            className="mobile-nav-link text-left font-label text-xs uppercase tracking-widest text-primary font-bold pb-2"
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
            <header className="relative pt-32 pb-24 md:pb-32 px-5 md:px-16 min-h-[90vh] flex items-center overflow-hidden" id="home">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                    <div className="lg:col-span-6 flex flex-col items-start space-y-8 order-2 lg:order-1 mt-12 lg:mt-0 animate-fade-in-up">
                        <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">Websites That Turn First Impressions Into Customers.</span>
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary text-balance leading-tight">Premium Full Responsive Websites for Modern Brands</h1>
                        <p className="font-body text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                            I create modern, fully responsive websites for businesses, brands, and digital projects, designed to look premium, work smoothly, and adapt perfectly to every screen size.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                            <a 
                                className="inline-flex justify-center items-center bg-primary text-on-primary font-label text-sm font-semibold px-8 py-4 rounded hover:bg-secondary transition-all duration-300 interactive-glow shadow-[0_4px_14px_rgba(194,101,42,0.2)]" 
                                href="#projects"
                                onClick={(e) => handleAnchorClick(e, '#projects')}
                            >
                                View My Work
                            </a>
                            <button 
                                onClick={openContactModal}
                                className="inline-flex justify-center items-center bg-transparent border border-primary text-primary font-label text-sm font-semibold px-8 py-4 rounded hover:bg-surface-container transition-all duration-300"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 relative animate-scale-up">
                        <div className="absolute inset-0 bg-primary-fixed-dim/20 blur-3xl rounded-full transform -translate-y-10 scale-110 -z-10 dark:bg-primary-fixed-dim/10"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-surface-variant/20">
                            <img alt="Portrait of Nino Kapanadze" className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500 max-h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLJLZ3La_XZsPUbn0xO814H5dCR0S0ORjOKuGVSb1XC5vtCqIete2-XdXtODIVxHJtQ4HwOmKoBZ734mIjy6OjLW0BTtXyR53QtH88Eu7ZY3W94-8stHX7NaMDXyI_i_jJoRL5_av7O6r35-KPhcQRDUODCHS1QgCOckwnwEjtt7vPJZR-XP5Gl8st7vBIah9qlXwmMvXABP7qFruayVu-9Xc9J9JtyGvJoPq5LZMmVXhByil2xE-d-6HdVhs2QfJmmkO5pvj5pHI"/>
                        </div>
                    </div>
                </div>
            </header>

            {/* Metrics Strip */}
            <section className="py-16 bg-surface-container px-5 md:px-16 border-y border-surface-variant/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-surface p-6 rounded-lg ambient-shadow flex flex-col items-start border-l-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-1">
                            <span className="material-symbols-outlined text-primary text-3xl mb-4">trending_up</span>
                            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">50%<span className="text-tertiary text-xl">+</span></h3>
                            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">More Customer Interest</p>
                        </div>
                        <div className="bg-surface p-6 rounded-lg ambient-shadow flex flex-col items-start border-l-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-1">
                            <span class="material-symbols-outlined text-primary text-3xl mb-4">leaderboard</span>
                            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">4–5x</h3>
                            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">More Lead Opportunities</p>
                        </div>
                        <div className="bg-surface p-6 rounded-lg ambient-shadow flex flex-col items-start border-l-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-1">
                            <span class="material-symbols-outlined text-primary text-3xl mb-4">devices</span>
                            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">100%</h3>
                            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">Responsive on Every Device</p>
                        </div>
                        <div className="bg-surface p-6 rounded-lg ambient-shadow flex flex-col items-start border-l-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-1">
                            <span class="material-symbols-outlined text-primary text-3xl mb-4">verified</span>
                            <h3 class="font-headline text-3xl font-semibold text-primary mb-2">Premium</h3>
                            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">Business-Ready Design</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 md:py-32 px-5 md:px-16 bg-surface reveal-on-scroll" id="about">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
                    <div className="lg:col-span-5">
                        <h2 className="font-headline text-3xl md:text-5xl font-semibold text-primary mb-6">Professional Foundation</h2>
                        <div className="w-16 h-1 bg-primary mb-8"></div>
                    </div>
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-6">
                            I build complete, full responsive websites for businesses and personal brands. My approach combines technical precision with a high-end aesthetic to ensure your digital presence is not only beautiful but structurally sound and optimized for growth.
                        </p>
                        <p className="font-body text-base text-on-surface-variant leading-relaxed">
                            Every project is crafted with a focus on premium presentation, ensuring that your website acts as a powerful asset to turn first impressions into lasting customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Showcase */}
            <section className="py-24 md:py-32 px-5 md:px-16 bg-surface-container-lowest border-y border-surface-variant/10" id="projects">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto reveal-on-scroll">
                        <h2 className="font-headline text-3xl md:text-5xl font-semibold text-primary mb-4">Selected Website Projects</h2>
                        <p className="font-body text-base md:text-lg text-on-surface-variant">See the design, responsiveness, structure, and premium website style of my work.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Project 1: GymWave */}
                        <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow transition-all duration-500 border border-surface-variant/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(194,101,42,0.12)] hover:ring-2 hover:ring-primary/40 reveal-on-scroll">
                            <div className="bg-surface-container-highest px-4 py-3 flex items-center border-b border-outline-variant/30">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-error/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden aspect-video bg-surface-container flex items-center justify-center">
                                <img alt="GymWave Website Preview" className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrqswMIUvQxwybMaFIB2xzMyZMbfE6PZ5nu9RKyR8cPKEPhaa7acXlHSEqd92CiLeD59hr_VcgJM5zww9HTOmYSFIb7fAOucqQoXncjGWD3p53pTka_JTmGknnSWQ3m-7QX3HpDAoy4kfs5DSHR3Ql4stouSyi8cn8fWM-ROMC9O_peIpReVudOM5cGOt2sWmqsigvy8BYDl1GnqqsysnXQxMeAaewtdN1J2qZloXNFbX5WLnY53hvN78BMwwXd9ivzDOo1UgHSdA"/>
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-2">GymWave</h3>
                                <p className="font-body text-sm md:text-base text-on-surface-variant mb-6">Premium event website designed to drive registrations with high-energy visuals and seamless mobile responsiveness.</p>
                                <div className="flex flex-wrap gap-3">
                                    <button 
                                        className="project-details-btn inline-flex justify-center items-center bg-transparent border border-primary text-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-surface-container transition-all duration-300 font-semibold"
                                        onClick={() => openProjectModal('gymwave')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="inline-flex justify-center items-center bg-primary text-on-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-secondary transition-all duration-300 hover:shadow-[0_4px_10px_rgba(194,101,42,0.2)] font-semibold" 
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
                        <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow transition-all duration-500 border border-surface-variant/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(194,101,42,0.12)] hover:ring-2 hover:ring-primary/40 reveal-on-scroll">
                            <div className="bg-surface-container-highest px-4 py-3 flex items-center border-b border-outline-variant/30">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-error/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden aspect-video bg-surface-container flex items-center justify-center">
                                <img alt="NutriPlan Global Interface Preview" className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfu2gjjEoe6ikVw2LC8rh8CJCA914vrNFR-Q9ukzKUUX9BocktbyzD64Ryo8L-Z6H6C8h3ktWNOGOLLCpJOHwGl_aP8bjjaNIA1Or3aumyOLKUxzUbrm-kfZTU2Y2Y53SBPHtqqXs7NkGWR45AalXQ7WtjjOoRkjTQ6eC5ACeGqdzykvr7s2o1lyFnznxrZJn13QUXQ8melszd8gwZxEnAU3XYbsEwCwb2SC9Z7C4wp6CjpwqlK3QmgRnUOGV6l-zXA714T1ZrC58"/>
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-2">NutriPlan Global</h3>
                                <p className="font-body text-sm md:text-base text-on-surface-variant mb-6">Health-focused digital product platform featuring clean, readable typography and a trustworthy, professional aesthetic.</p>
                                <div className="flex flex-wrap gap-3">
                                    <button 
                                        className="project-details-btn inline-flex justify-center items-center bg-transparent border border-primary text-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-surface-container transition-all duration-300 font-semibold"
                                        onClick={() => openProjectModal('diet')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="inline-flex justify-center items-center bg-primary text-on-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-secondary transition-all duration-300 hover:shadow-[0_4px_10px_rgba(194,101,42,0.2)] font-semibold" 
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
                        <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow transition-all duration-500 border border-surface-variant/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(194,101,42,0.12)] hover:ring-2 hover:ring-primary/40 reveal-on-scroll">
                            <div className="bg-surface-container-highest px-4 py-3 flex items-center border-b border-outline-variant/30">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-error/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden aspect-video bg-surface-container flex items-center justify-center">
                                <img alt="Premium Barbershop Website Preview" className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmmrEs8MEerrEQW7G8pp1TJvx_l3E29gaEmFU2IgXIND6-0z-NHTSgh4WrBta59BtqG_hSxatKXIyxZg7UY8zo1qDIR_5CP1zhI3BORwlAgYUlP53UtgCAVxLsjmXSsa5SonKXV4CGf4VzXrMv1TnrpfrdCZYpEpSQ7dw7T6YOr9pTtO981Kyy833pU8KZeq0lBcI1_6fMEYC0i8AZwBaRau-HB_-jW0KAx4-6JrOS0tN4mgynEdJMcQZU2ZowoHHvajcmDwVeYJE"/>
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-2">Premium Barbershop</h3>
                                <p className="font-body text-sm md:text-base text-on-surface-variant mb-6">Luxury barbershop website designed to convey exclusivity and simplify the booking process for high-end clientele.</p>
                                <div className="flex flex-wrap gap-3">
                                    <button 
                                        className="project-details-btn inline-flex justify-center items-center bg-transparent border border-primary text-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-surface-container transition-all duration-300 font-semibold"
                                        onClick={() => openProjectModal('premiumbarbershop')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="inline-flex justify-center items-center bg-primary text-on-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-secondary transition-all duration-300 hover:shadow-[0_4px_10px_rgba(194,101,42,0.2)] font-semibold" 
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
                        <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow transition-all duration-500 border border-surface-variant/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(194,101,42,0.12)] hover:ring-2 hover:ring-primary/40 reveal-on-scroll">
                            <div className="bg-surface-container-highest px-4 py-3 flex items-center border-b border-outline-variant/30">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-error/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden aspect-video bg-surface-container flex items-center justify-center">
                                <img alt="Interactive game website interface" className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQZFhaOA2uL_uen1rDb-zM6HZHyTaoVUyiq7K2Dtvw0tvFFRq6d2PK5vzQJWj1wh8TRkbCYqSrR4ERSAne82CxqzA2tuSL2df5xiKPoUdtna-FN4ngHdKX9XnPl8Qf3qnAtHqObGY7iB414aybrRLxpISQnNgXtqGX0ifBGy5q4zn0nRo6s_HcyrDOyj7X7HjKIkWmMS2P4cMeqyNxC3YUORjPlzBi4qNzyJYGXOY_Mcc0dXofLpwNiqktLjJskE1F0geWhFLLGo"/>
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-2">Bottleorder</h3>
                                <p className="font-body text-sm md:text-base text-on-surface-variant mb-6">Interactive game website featuring dynamic potion mixing animations and responsive layout across all device types.</p>
                                <div className="flex flex-wrap gap-3">
                                    <button 
                                        className="project-details-btn inline-flex justify-center items-center bg-transparent border border-primary text-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-surface-container transition-all duration-300 font-semibold"
                                        onClick={() => openProjectModal('bottleorder')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="inline-flex justify-center items-center bg-primary text-on-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-secondary transition-all duration-300 hover:shadow-[0_4px_10px_rgba(194,101,42,0.2)] font-semibold" 
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
                        <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow transition-all duration-500 border border-surface-variant/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(194,101,42,0.12)] hover:ring-2 hover:ring-primary/40 md:col-span-2 lg:w-1/2 lg:mx-auto reveal-on-scroll">
                            <div className="bg-surface-container-highest px-4 py-3 flex items-center border-b border-outline-variant/30">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-error/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden aspect-video bg-surface-container flex items-center justify-center">
                                <img alt="Cleaning Service Website Preview" className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD58eXv4w8GWF8UmpW77CTZfg-hlHbEohJuD1mUZPTZmFvuffekiX7NzKpIlKYJERylnTm2B_fiFFRCAu8rXcZlogAQn9Gh1A1geYYa8GEaSYeMD1pkjudr7hxeO8S2qmxtnW3HoVAByQTuDKFKGXZF5-Tf41WxqP0LLDLZqj_A5ZxiyJrmhiQBn8VZdjCWeHTrtno4mZRg5IxQ9bcQZQOBueq2Rw7QsrjfOjsvdwH9o1JfU56BKQaMO5qom0_K_a0oflzsqLYjp4"/>
                            </div>
                            <div className="p-6 md:p-8 text-center">
                                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-2">Cleaning Service</h3>
                                <p className="font-body text-sm md:text-base text-on-surface-variant mb-6 max-w-lg mx-auto">Elegant service business website optimizing lead generation through clear structure and a trustworthy aesthetic.</p>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    <button 
                                        className="project-details-btn inline-flex justify-center items-center bg-transparent border border-primary text-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-surface-container transition-all duration-300 font-semibold"
                                        onClick={() => openProjectModal('cleaningservice')}
                                    >
                                        Quick Details <span className="material-symbols-outlined ml-1.5 text-sm">info</span>
                                    </button>
                                    <a 
                                        className="inline-flex justify-center items-center bg-primary text-on-primary font-label text-xs uppercase tracking-widest px-5 py-3 rounded hover:bg-secondary transition-all duration-300 hover:shadow-[0_4px_10px_rgba(194,101,42,0.2)] font-semibold" 
                                        href="https://nine13.site/cleaningservice" 
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
            <section className="py-24 md:py-32 px-5 md:px-16 bg-surface reveal-on-scroll" id="skills">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-5xl font-semibold text-primary mb-12">Core Capabilities</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Full Responsive Website Development</span>
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Premium Website Design</span>
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Front-End Development</span>
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Mobile-Friendly Websites</span>
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Business Website Creation</span>
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Landing Page Development</span>
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Website Customization</span>
                        <span className="px-5 py-3 border border-outline-variant/50 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container transition-all duration-300 hover:scale-[1.05] cursor-default">Modern Web Experiences</span>
                    </div>
                </div>
            </section>

            {/* Final CTA & Contact */}
            <section className="py-24 md:py-32 px-5 md:px-16 bg-surface-container-lowest border-t border-outline-variant/20" id="contact">
                <div className="max-w-7xl mx-auto text-center reveal-on-scroll">
                    <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-6">Let’s Build Something Exceptional</h2>
                    <p className="font-body text-base md:text-lg text-primary mb-12 italic tracking-wide">"Websites That Turn First Impressions Into Customers."</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 max-w-md mx-auto sm:max-w-none">
                        <button 
                            className="contact-trigger inline-flex justify-center items-center bg-primary text-on-primary font-label text-sm font-semibold px-10 py-5 rounded hover:bg-secondary transition-all duration-300 interactive-glow shadow-[0_4px_14px_rgba(194,101,42,0.2)]"
                            onClick={openContactModal}
                        >
                            Contact Me
                        </button>
                        <a 
                            className="inline-flex justify-center items-center bg-transparent border border-primary text-primary font-label text-sm font-semibold px-10 py-5 rounded hover:bg-surface-container transition-all duration-300" 
                            href="#projects"
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            View Projects
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                        <a 
                            className="p-6 bg-surface rounded-lg ambient-shadow hover:shadow-[0_10px_30px_rgba(194,101,42,0.15)] hover:border-primary/40 border border-transparent transition-all flex flex-col items-center group" 
                            href="mailto:ninekapanadze@gmail.com"
                        >
                            <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary mb-4 transition-colors">mail</span>
                            <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">Email</span>
                        </a>
                        <a 
                            className="p-6 bg-surface rounded-lg ambient-shadow hover:shadow-[0_10px_30px_rgba(194,101,42,0.15)] hover:border-primary/40 border border-transparent transition-all flex flex-col items-center group" 
                            href="tel:+995597042154"
                        >
                            <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary mb-4 transition-colors">phone</span>
                            <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">Phone</span>
                        </a>
                        <a 
                            className="p-6 bg-surface rounded-lg ambient-shadow hover:shadow-[0_10px_30px_rgba(194,101,42,0.15)] hover:border-primary/40 border border-transparent transition-all flex flex-col items-center group" 
                            href="https://www.linkedin.com/in/nino-kapanadze-7275b8252/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary mb-4 transition-colors">link</span>
                            <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">LinkedIn</span>
                        </a>
                        <div className="p-6 bg-surface rounded-lg ambient-shadow flex flex-col items-center border border-transparent">
                            <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-4">location_on</span>
                            <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">Tbilisi, Georgia</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Component */}
            <footer className="bg-surface-container-lowest border-t border-outline-variant/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-16 py-16 md:py-24 max-w-7xl mx-auto items-center">
                    <div className="md:col-span-1 flex flex-col items-start">
                        <span className="font-headline text-3xl font-semibold text-primary mb-2">Nino Kapanadze</span>
                        <p className="font-body text-xs md:text-sm text-on-surface opacity-80">
                            © 2024 Nino Kapanadze. Websites That Turn First Impressions Into Customers.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex flex-wrap justify-start md:justify-end gap-6">
                        <a 
                            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" 
                            href="#home"
                            onClick={(e) => handleAnchorClick(e, '#home')}
                        >
                            Home
                        </a>
                        <a 
                            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" 
                            href="#about"
                            onClick={(e) => handleAnchorClick(e, '#about')}
                        >
                            About
                        </a>
                        <a 
                            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" 
                            href="#projects"
                            onClick={(e) => handleAnchorClick(e, '#projects')}
                        >
                            Projects
                        </a>
                        <a 
                            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" 
                            href="#skills"
                            onClick={(e) => handleAnchorClick(e, '#skills')}
                        >
                            Skills
                        </a>
                        <button 
                            className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
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
                    id="contact-modal" 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md transition-opacity duration-300" 
                    role="dialog" 
                    aria-modal="true" 
                    aria-labelledby="modal-title"
                    onClick={(e) => {
                        if (e.target.id === 'contact-modal') closeContactModal();
                    }}
                >
                    <div className="bg-surface rounded-xl overflow-hidden shadow-2xl border border-surface-variant/30 w-full max-w-xl animate-scale-up max-h-[90vh] flex flex-col" id="contact-modal-content">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-surface-variant/20 flex justify-between items-center bg-surface-container flex-shrink-0">
                            <h2 id="modal-title" className="font-headline text-2xl font-bold text-primary">Get In Touch</h2>
                            <button 
                                onClick={closeContactModal}
                                className="text-on-surface-variant hover:text-primary p-1 rounded-full flex items-center justify-center transition-colors" 
                                aria-label="Close Modal"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        
                        {/* Modal Form Scroll Container */}
                        <div className="p-6 overflow-y-auto flex-grow">
                            {/* Form View */}
                            {!contactLoading && !contactSuccess && (
                                <form onSubmit={handleContactSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="client-name" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Your Name <span className="text-error">*</span></label>
                                        <input 
                                            type="text" 
                                            id="client-name" 
                                            ref={nameInputRef}
                                            required 
                                            value={contactName}
                                            onChange={(e) => setContactName(e.target.value)}
                                            className="w-full bg-surface-container-lowest border border-outline/30 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface placeholder-on-surface-variant/50 transition-all" 
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && <span className="text-error text-xs block mt-1" id="name-error">Please enter your name.</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="client-email" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Your Email <span class="text-error">*</span></label>
                                        <input 
                                            type="email" 
                                            id="client-email" 
                                            required 
                                            value={contactEmail}
                                            onChange={(e) => setContactEmail(e.target.value)}
                                            className="w-full bg-surface-container-lowest border border-outline/30 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface placeholder-on-surface-variant/50 transition-all" 
                                            placeholder="name@company.com"
                                        />
                                        {errors.email && <span className="text-error text-xs block mt-1" id="email-error">Please enter a valid email address.</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="client-project" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Project Type</label>
                                        <select 
                                            id="client-project" 
                                            value={contactProject}
                                            onChange={(e) => setContactProject(e.target.value)}
                                            className="w-full bg-surface-container-lowest border border-outline/30 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface transition-all"
                                        >
                                            <option value="business">Premium Business Website</option>
                                            <option value="landing">High-Converting Landing Page</option>
                                            <option value="ecommerce">Modern E-Commerce Portal</option>
                                            <option value="custom">Custom Web Application</option>
                                            <option value="other">Bespoke Design / Optimization</option>
                                        </select>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label htmlFor="client-budget" className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Estimated Budget</label>
                                            <span id="budget-value" className="text-primary font-semibold font-label text-xs tracking-wider">
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
                                            className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                        <div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest mt-2 font-semibold">
                                            <span>&lt;$1.5k</span>
                                            <span>$1.5k-$3k</span>
                                            <span>$3k-$5k</span>
                                            <span>$5k+</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="client-message" className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Project Brief <span class="text-error">*</span></label>
                                        <textarea 
                                            id="client-message" 
                                            required 
                                            rows="4" 
                                            value={contactMessage}
                                            onChange={(e) => setContactMessage(e.target.value)}
                                            className="w-full bg-surface-container-lowest border border-outline/30 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface placeholder-on-surface-variant/50 transition-all resize-none" 
                                            placeholder="Describe your project vision, target audience, and launch goals..."
                                        />
                                        {errors.message && <span className="text-error text-xs block mt-1" id="message-error">Please describe your project brief.</span>}
                                    </div>
                                    
                                    <div className="flex gap-4 pt-2 border-t border-surface-variant/20">
                                        <button type="submit" id="submit-form-btn" className="flex-grow inline-flex justify-center items-center bg-primary text-on-primary font-label text-xs uppercase tracking-widest font-semibold px-6 py-4 rounded hover:bg-secondary transition-all duration-300">
                                            Send Message <span className="material-symbols-outlined ml-2 text-sm">send</span>
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Loading View */}
                            {contactLoading && (
                                <div id="modal-loading-state" className="py-16 flex flex-col items-center justify-center space-y-6 text-center">
                                    <div className="relative w-16 h-16">
                                        <div className="absolute inset-0 rounded-full border-4 border-surface-container-highest"></div>
                                        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-headline text-2xl font-semibold text-primary">{loadingProgress.title}</h3>
                                        <p className="font-body text-sm text-on-surface-variant max-w-xs mx-auto">{loadingProgress.desc}</p>
                                    </div>
                                </div>
                            )}

                            {/* Success View */}
                            {contactSuccess && (
                                <div id="modal-success-state" className="py-12 flex flex-col items-center justify-center space-y-6 text-center animate-scale-up">
                                    <div className="w-20 h-20 bg-primary-fixed-dim/20 rounded-full flex items-center justify-center text-primary border border-primary/20">
                                        <span className="material-symbols-outlined text-5xl fill">check_circle</span>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="font-headline text-3xl font-semibold text-primary">Message Dispatched!</h3>
                                        <p className="font-body text-base text-on-surface-variant max-w-sm mx-auto">
                                            Thank you, <strong>{contactName}</strong>! Your inquiry for a <strong>{contactProject}</strong> site is securely logged. Nino will review your goals and get in touch at <strong>{contactEmail}</strong> within 24 hours.
                                        </p>
                                    </div>
                                    <button 
                                        type="button" 
                                        onClick={closeContactModal}
                                        className="bg-primary text-on-primary font-label text-xs uppercase tracking-widest font-semibold px-8 py-3 rounded hover:bg-secondary transition-all duration-300"
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
                    id="project-modal" 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md transition-opacity duration-300" 
                    role="dialog" 
                    aria-modal="true" 
                    aria-labelledby="project-modal-title"
                    onClick={(e) => {
                        if (e.target.id === 'project-modal') closeProjectModal();
                    }}
                >
                    <div className="bg-surface rounded-xl overflow-hidden shadow-2xl border border-surface-variant/30 w-full max-w-3xl animate-scale-up max-h-[90vh] flex flex-col" id="project-modal-content">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-surface-variant/20 flex justify-between items-center bg-surface-container flex-shrink-0">
                            <div>
                                <h2 id="project-modal-title" className="font-headline text-2xl font-bold text-primary">
                                    {selectedProject.title}
                                </h2>
                                <p id="project-modal-tagline" className="font-label text-[10px] uppercase tracking-widest text-secondary mt-1 font-semibold">
                                    {selectedProject.tagline}
                                </p>
                            </div>
                            <button 
                                onClick={closeProjectModal}
                                className="text-on-surface-variant hover:text-primary p-1 rounded-full flex items-center justify-center transition-colors" 
                                aria-label="Close Modal"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 overflow-y-auto flex-grow space-y-8">
                            {/* Simulated Premium Device Mockups */}
                            <div className="relative bg-surface-container-low rounded-lg p-4 sm:p-6 border border-surface-variant/10 aspect-video flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/10 to-transparent"></div>
                                
                                {/* Large Desktop Mockup */}
                                <div className="relative w-4/5 aspect-video bg-surface rounded-lg shadow-xl border border-surface-variant/20 overflow-hidden flex flex-col group/mockup">
                                    <div className="bg-surface-container-highest px-3 py-1.5 flex items-center space-x-1.5 flex-shrink-0 border-b border-surface-variant/20">
                                        <div className="w-2 h-2 rounded-full bg-error/40"></div>
                                        <div className="w-2 h-2 rounded-full bg-tertiary/40"></div>
                                        <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
                                        <div className="w-1/2 bg-surface-container-low h-3 rounded mx-auto flex items-center justify-center">
                                            <span className="text-[7px] text-on-surface-variant/40 scale-75 font-mono overflow-hidden whitespace-nowrap">nine13.site/live-preview</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow relative overflow-hidden bg-surface-container-low">
                                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover/mockup:scale-105" src={selectedProject.img} alt={`${selectedProject.title} Desktop Mockup`} />
                                    </div>
                                </div>

                                {/* Floating Mobile Device Mockup */}
                                <div className="absolute bottom-4 right-6 w-1/5 aspect-[9/16] bg-surface rounded-xl shadow-2xl border-4 border-surface-container-highest overflow-hidden hidden sm:flex flex-col">
                                    <div className="h-2 bg-surface-container-highest flex-shrink-0 flex justify-center items-center">
                                        <div className="w-6 h-1 rounded-full bg-surface-dim"></div>
                                    </div>
                                    <div className="flex-grow relative overflow-hidden bg-surface-container-low">
                                        <img className="w-full h-full object-cover" src={selectedProject.img} alt={`${selectedProject.title} Mobile Mockup`} />
                                    </div>
                                </div>
                            </div>

                            {/* Project Details Text */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">About the Project</h3>
                                    <p className="font-body text-base text-on-surface-variant leading-relaxed">
                                        {selectedProject.desc}
                                    </p>
                                </div>

                                {/* Features list */}
                                <div>
                                    <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-3 font-bold">Core Accomplishments & Features</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body text-sm text-on-surface-variant">
                                        {selectedProject.features.map((feat, index) => (
                                            <li key={index} className="flex items-start space-x-2.5">
                                                <span className="material-symbols-outlined text-primary text-lg mt-0.5 select-none">check_circle</span>
                                                <span className="leading-relaxed text-on-surface-variant font-medium">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Badges */}
                                <div>
                                    <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-3 font-bold">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((badge, index) => (
                                            <span 
                                                key={index}
                                                className="bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded font-label border border-primary/10 hover:bg-primary-fixed-dim transition-colors cursor-default"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="px-6 py-4 border-t border-surface-variant/20 bg-surface-container flex flex-wrap gap-3 items-center justify-between flex-shrink-0">
                            <button 
                                onClick={closeProjectModal}
                                className="px-6 py-3 border border-outline-variant/60 rounded text-on-surface-variant font-label text-xs uppercase tracking-widest font-semibold hover:bg-surface-container-low transition-colors"
                            >
                                Close Preview
                            </button>
                            <a 
                                className="inline-flex items-center bg-primary text-on-primary font-label text-xs uppercase tracking-widest font-semibold px-8 py-3 rounded hover:bg-secondary transition-all hover:shadow-[0_4px_10px_rgba(194,101,42,0.25)]" 
                                href={selectedProject.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
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
                id="back-to-top" 
                className={`fixed bottom-8 right-8 z-40 bg-primary text-on-primary p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border border-primary/20 ${
                    showBackToTop ? 'opacity-100 pointer-events-auto translate-y-0 hover:bg-secondary hover:shadow-[0_0_15px_rgba(194,101,42,0.6)]' : 'opacity-0 pointer-events-none translate-y-4'
                }`} 
                aria-label="Back to Top"
            >
                <span className="material-symbols-outlined text-2xl">arrow_upward</span>
            </button>
        </div>
    );
}

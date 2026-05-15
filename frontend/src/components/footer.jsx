import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

// ===== CUSTOM ICON COMPONENTS (100% Safe - No Import Errors) =====

const HomeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
);

const ZapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
);

const WrenchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
);

const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
);

const AwardIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
);

const FileTextIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
);

const CookieIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
);

const ArrowUpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
);

const CodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
);

const GlobeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
);

const ServerIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
);

const CpuIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
);

const TerminalIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
);

const SmartphoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
);

const ShoppingCartIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
);

const BarChartIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
);

const TrendingUpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
);

// Social Icons
const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const SendIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
);

// ===== FOOTER COMPONENT =====
const Footer = () => {
  const [isDark, setIsDark] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [showTechReview, setShowTechReview] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    const cookieAccepted = localStorage.getItem('cookieConsent');
    if (cookieAccepted === 'accepted') {
      setShowCookieConsent(false);
    }
    
    return () => observer.disconnect();
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowCookieConsent(false);
  };

  const currentYear = new Date().getFullYear();

  // Navigation links
  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home', icon: <HomeIcon className="w-4 h-4" /> },
      { name: 'About', href: '#about', icon: <UserIcon className="w-4 h-4" /> },
      
      { name: 'Services', href: '#services', icon: <WrenchIcon className="w-4 h-4" /> },
      { name: 'Projects', href: '#projects', icon: <BriefcaseIcon className="w-4 h-4" /> },
      { name: 'Testimonials', href: '#testimony', icon: <StarIcon className="w-4 h-4" /> },
      { name: 'Certificates', href: '#certificates', icon: <AwardIcon className="w-4 h-4" /> },
      { name: 'Contact', href: '#contact', icon: <MailIcon className="w-4 h-4" /> }
    ],
    services: [
      { name: 'Web Development', desc: 'Full-stack apps & websites', icon: <CodeIcon className="w-4 h-4" /> },
      { name: 'Mobile Apps', desc: 'React Native & Flutter', icon: <SmartphoneIcon className="w-4 h-4" /> },
      { name: 'E-Commerce', desc: 'Online stores & payments', icon: <ShoppingCartIcon className="w-4 h-4" /> },
      { name: 'Penetration Testing', desc: 'Security audits & testing', icon: <ShieldIcon className="w-4 h-4" /> },
      { name: 'Machine Learning', desc: 'AI & data science solutions', icon: <CpuIcon className="w-4 h-4" /> },
      { name: 'API Development', desc: 'REST & GraphQL APIs', icon: <ServerIcon className="w-4 h-4" /> }
    ]
  };

  // Social links
  const socialLinks = [
    { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/abelsam-coder/' },
    { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/abel-samuel-b079b7379/' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/abelala_c/' },
    { name: 'Telegram', icon: <SendIcon />, url: 'https://t.me/abelala-c' }
  ];

  // Legal content
  const legalContent = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'January 2025',
      sections: [
        { heading: 'Information We Collect', content: 'We collect information you provide directly, such as name, email address, and any messages sent through our contact form.' },
        { heading: 'How We Use Your Information', content: 'Your information is used to respond to inquiries, improve our services, and send periodic updates.' },
        { heading: 'Data Protection', content: 'We implement industry-standard security measures including SSL encryption and secure servers.' },
        { heading: 'Your Rights', content: 'You have the right to access, correct, or delete your personal data at any time.' }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'January 2025',
      sections: [
        { heading: 'Acceptance of Terms', content: 'By accessing this website, you accept these terms and conditions.' },
        { heading: 'Services Description', content: 'Abel Samuel provides web development, mobile app development, and cybersecurity services.' },
        { heading: 'Intellectual Property', content: 'All content on this website is the property of Abel Samuel unless otherwise stated.' },
        { heading: 'Limitation of Liability', content: 'Abel shall not be liable for indirect or consequential damages arising from service use.' }
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: 'January 2025',
      sections: [
        { heading: 'What Are Cookies', content: 'Cookies are small text files stored on your device when you visit this website.' },
        { heading: 'Types of Cookies We Use', content: 'Essential, Analytics, and Preference cookies.' },
        { heading: 'Managing Cookies', content: 'You can control cookies through your browser settings.' },
        { heading: 'Third-Party Cookies', content: 'We may use third-party services like Google Analytics.' }
      ]
    }
  };

  // Tech Review Data
  const techData = {
    development: [
      { name: 'HTML5', level: 95, status: 'expert' },
      { name: 'CSS3', level: 95, status: 'expert' },
      { name: 'JavaScript', level: 90, status: 'expert' },
      { name: 'React', level: 88, status: 'advanced' },
      { name: 'Tailwind CSS', level: 92, status: 'expert' },
      { name: 'Python', level: 85, status: 'advanced' },
      { name: 'Django', level: 82, status: 'advanced' },
      { name: 'Flask', level: 80, status: 'advanced' },
      { name: 'React Native', level: 78, status: 'intermediate' },
      { name: 'Node.js', level: 86, status: 'advanced' },
      { name: 'TypeScript', level: 82, status: 'advanced' }
    ],
    security: [
      { name: 'Kali Linux', level: 90, status: 'expert' },
      { name: 'Penetration Testing', level: 88, status: 'expert' },
      { name: 'Network Security', level: 85, status: 'advanced' },
      { name: 'Digital Forensics', level: 80, status: 'advanced' },
      { name: 'Ethical Hacking', level: 87, status: 'expert' },
      { name: 'Vulnerability Assessment', level: 84, status: 'advanced' },
      { name: 'Web Security', level: 86, status: 'advanced' },
      { name: 'Metasploit', level: 85, status: 'advanced' }
    ],
    tools: [
      { name: 'Git', status: 'expert' },
      { name: 'GitHub', status: 'expert' },
      { name: 'VS Code', status: 'expert' },
      { name: 'Linux', status: 'advanced' },
      { name: 'Docker', status: 'intermediate' },
      { name: 'PostgreSQL', status: 'advanced' },
      { name: 'AWS', status: 'intermediate' },
      { name: 'Redis', status: 'intermediate' },
      { name: 'TensorFlow', status: 'intermediate' },
      { name: 'Nmap', status: 'advanced' },
      { name: 'Wireshark', status: 'advanced' },
      { name: 'Burp Suite', status: 'advanced' }
    ]
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'expert': return 'text-green-600 bg-green-50 border-green-200';
      case 'advanced': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'intermediate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <>
      <footer className={`relative pt-20 pb-8 overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#030712]' : 'bg-gray-900'}`}>
        
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${isDark ? 'from-transparent via-violet-500/50 to-transparent' : 'from-transparent via-white/20 to-transparent'}`}></div>
          <div className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-violet-600 to-purple-600 ${isDark ? 'opacity-10' : ''}`}></div>
          <div className={`absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-gradient-to-tl from-blue-600 to-cyan-600 ${isDark ? 'opacity-10' : ''}`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Main Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b mb-8`} style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.1)' }}>
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a href="#home" className="inline-block mb-6 group">
                <img src={logo} alt="Abel Samuel" className={`h-10 w-auto transition-all duration-300 group-hover:scale-105 ${isDark ? 'brightness-100 opacity-90 hover:opacity-100' : 'brightness-0 invert opacity-80 hover:opacity-100'}`} />
              </a>
              
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                Full Stack Developer, App Developer, Pentester & Machine Learning Engineer crafting digital solutions.
              </p>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 ${isDark ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-500/20 text-green-300'}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Projects
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'bg-white/[0.05] text-gray-500 hover:text-white hover:bg-white/10' : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'}`} aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 ${isDark ? 'text-white' : 'text-white'}`}>Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={`text-sm inline-flex items-center gap-2 group transition-colors duration-200 ${isDark ? 'text-gray-500 hover:text-violet-400' : 'text-gray-400 hover:text-violet-400'}`}>
                      <span className="transition-transform group-hover:scale-110">{link.icon}</span>
                      <span className="w-0 group-hover:w-2 h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-violet-500 to-purple-500"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 ${isDark ? 'text-white' : 'text-white'}`}>Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className={`block group transition-colors duration-200 ${isDark ? 'text-gray-500 hover:text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}>
                      <div className="flex items-start gap-2">
                        <span className="mt-0.5 transition-transform group-hover:scale-110">{service.icon}</span>
                        <div>
                          <p className="text-sm font-medium">{service.name}</p>
                          <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>{service.desc}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Tech Review Column */}
            <div>
              <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 ${isDark ? 'text-white' : 'text-white'}`}>Legal</h4>
              
              <ul className="space-y-3 mb-6">
                {[
                  { id: 'privacy', label: 'Privacy Policy', icon: <ShieldIcon className="w-4 h-4" /> },
                  { id: 'terms', label: 'Terms of Service', icon: <FileTextIcon className="w-4 h-4" /> },
                  { id: 'cookies', label: 'Cookie Settings', icon: <CookieIcon className="w-4 h-4" /> }
                ].map((item) => (
                  <li key={item.id}>
                    <button onClick={() => setActiveModal(item.id)} className={`text-sm inline-flex items-center gap-2 group transition-colors duration-200 ${isDark ? 'text-gray-500 hover:text-pink-400' : 'text-gray-400 hover:text-pink-400'}`}>
                      <span className="transition-transform group-hover:scale-110">{item.icon}</span>
                      <span className="w-0 group-hover:w-2 h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-pink-500 to-rose-500"></span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tech Review Button */}
              <button onClick={() => setShowTechReview(true)} className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 mb-4 ${isDark ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20' : 'bg-violet-500/20 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30'}`}>
                <BarChartIcon className="w-4 h-4" />
                View Skills Summary ({techData.development.length + techData.security.length + techData.tools.length} total)
              </button>

              <div className={`p-4 rounded-xl ${isDark ? 'bg-white/[0.03] border border-white/10' : 'bg-white/5 border border-white/10'}`}>
                <p className={`text-xs font-medium uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Get in Touch</p>
                <a href="mailto:abelsamuel841@email.com" className={`text-sm font-medium block mb-1 transition-colors ${isDark ? 'text-gray-300 hover:text-violet-400' : 'text-gray-300 hover:text-violet-400'}`}>abelsamuel841@email.com</a>
                <p className={`text-xs flex items-center gap-1 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}><GlobeIcon className="w-3 h-3" /> Hawassa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm text-center md:text-left ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
              © {currentYear}{' '}
              <a href="#home" className={`font-medium transition-colors ${isDark ? 'hover:text-violet-400' : 'hover:text-violet-400'}`}>Abel Samuel</a>
              . All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className={`text-xs flex items-center gap-1 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}><CodeIcon className="w-3 h-3" /> Built By Abel Samuel</span>
              <a href="#" className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 group ${isDark ? 'bg-white/[0.05] text-gray-500 hover:text-white hover:bg-white/10' : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'}`} aria-label="Back to top">
                <ArrowUpIcon className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className={`mt-8 h-px bg-gradient-to-r ${isDark ? 'from-transparent via-violet-500/30 to-transparent' : 'from-transparent via-white/10 to-transparent'}`}></div>
        </div>
      </footer>

      {/* COOKIE CONSENT BANNER */}
      {showCookieConsent && (
        <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 backdrop-blur-xl border-t animate-slide-up ${isDark ? 'bg-[#0a0a0f]/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <CookieIcon className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>We value your privacy</p>
                <p className={`text-xs max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>This website uses cookies to enhance your browsing experience. By clicking "Accept All", you consent to our use of cookies.</p>
              </div>
            </div>
            
            <div className="flex gap-3 shrink-0">
              <button onClick={() => setActiveModal('cookies')} className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>Customize</button>
              <button onClick={rejectCookies} className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>Reject</button>
              <button onClick={acceptCookies} className="px-6 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:-translate-y-0.5">Accept All</button>
            </div>
          </div>
        </div>
      )}

      {/* LEGAL MODALS */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setActiveModal(null)}>
          <div className={`relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl animate-scale-in ${isDark ? 'bg-gray-900 border border-white/10' : 'bg-white border border-gray-200'}`} onClick={(e) => e.stopPropagation()}>
            <div className={`sticky top-0 z-10 p-6 border-b flex items-start justify-between backdrop-blur-xl ${isDark ? 'bg-gray-900/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
              <div>
                <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{legalContent[activeModal].title}</h3>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Last updated: {legalContent[activeModal].lastUpdated}</p>
              </div>
              <button onClick={() => setActiveModal(null)} className={`p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-88px)]">
              <div className="space-y-6">
                {legalContent[activeModal].sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{section.heading}</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{section.content}</p>
                  </div>
                ))}

                {activeModal === 'cookies' && (
                  <div className={`p-4 rounded-xl mt-6 ${isDark ? 'bg-white/[0.05] border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
                    <p className={`text-sm font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Manage Your Preferences</p>
                    <div className="space-y-3">
                      {[
                        { name: 'Essential Cookies', required: true, desc: 'Required for basic site functionality' },
                        { name: 'Analytics Cookies', required: false, desc: 'Help us improve user experience' },
                        { name: 'Preference Cookies', required: false, desc: 'Remember your settings' }
                      ].map((cookie, i) => (
                        <label key={i} className="flex items-start gap-3 cursor-pointer group">
                          <input type="checkbox" checked={cookie.required} disabled={cookie.required} className="mt-0.5 w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                          <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{cookie.name}{cookie.required && (<span className={`ml-2 text-xs px-2 py-0.5 rounded ${isDark ? 'bg-violet-500/20 text-violet-400' : 'bg-violet-100 text-violet-600'}`}>Required</span>)}</p>
                            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{cookie.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={`sticky bottom-0 p-6 border-t flex justify-end gap-3 backdrop-blur-xl ${isDark ? 'bg-gray-900/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
              <button onClick={() => setActiveModal(null)} className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>Close</button>
              {activeModal === 'cookies' && (<button onClick={() => { acceptCookies(); setActiveModal(null); }} className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg">Save Preferences</button>)}
            </div>
          </div>
        </div>
      )}

      {/* TECH REVIEW MODAL */}
      {showTechReview && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setShowTechReview(false)}>
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl animate-scale-in ${isDark ? 'bg-gray-900 border border-white/10' : 'bg-white border border-gray-200'}`} onClick={(e) => e.stopPropagation()}>
            <div className={`sticky top-0 z-10 p-6 border-b flex items-center justify-between backdrop-blur-xl ${isDark ? 'bg-gray-900/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600"><BarChartIcon className="w-5 h-5 text-white" /></div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills Overview</h3>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{techData.development.length + techData.security.length + techData.tools.length} total skills across 3 categories</p>
                </div>
              </div>
              <button onClick={() => setShowTechReview(false)} className={`p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className={`p-4 rounded-xl text-center ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
                  <CodeIcon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{techData.development.length}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Development</div>
                  <div className="text-xs text-green-500 font-medium mt-1">Avg: 87%</div>
                </div>
                <div className={`p-4 rounded-xl text-center ${isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-100'}`}>
                  <ShieldIcon className="w-8 h-8 mx-auto mb-2 text-red-500" />
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{techData.security.length}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Security</div>
                  <div className="text-xs text-green-500 font-medium mt-1">Avg: 86%</div>
                </div>
                <div className={`p-4 rounded-xl text-center ${isDark ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-100'}`}>
                  <TerminalIcon className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{techData.tools.length}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tools</div>
                  <div className="text-xs text-blue-500 font-medium mt-1">In Daily Use</div>
                </div>
              </div>

              {/* Development Skills */}
              <div className="mb-8">
                <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}><CodeIcon className="w-4 h-4 text-blue-500" /> Development Stack</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {techData.development.map((skill, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{skill.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border capitalize ${getStatusColor(skill.status)}`}>{skill.status}</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${getLevelColor(skill.level)}`} style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <div className={`text-right text-xs mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Skills */}
              <div className="mb-8">
                <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}><ShieldIcon className="w-4 h-4 text-red-500" /> Security & Hacking</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {techData.security.map((skill, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{skill.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border capitalize ${getStatusColor(skill.status)}`}>{skill.status}</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${getLevelColor(skill.level)}`} style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <div className={`text-right text-xs mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}><TerminalIcon className="w-4 h-4 text-purple-500" /> Tools & Technologies</h4>
                <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex flex-wrap gap-2">
                    {techData.tools.map((tool, idx) => (
                      <span key={idx} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border ${isDark ? 'bg-white/[0.05] border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>
                        <CheckCircleIcon className={`w-3.5 h-3.5 ${tool.status === 'expert' ? 'text-green-500' : tool.status === 'advanced' ? 'text-blue-500' : 'text-yellow-500'}`} />
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-4 border-t flex items-center justify-between ${isDark ? 'bg-gray-900/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
              <div className="flex items-center gap-2 text-sm"><TrendingUpIcon className="w-4 h-4 text-green-500" /><span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Overall: Senior Full-Stack Developer + Security Specialist</span></div>
              <button onClick={() => setShowTechReview(false)} className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-in { animation: scale-in 0.25s ease-out; }
      `}</style>
    </>
  );
};

export default Footer;
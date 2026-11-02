import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ExternalLink, 
  ArrowDown, 
  ArrowUpRight, 
  Star, 
  Code2, 
  Terminal, 
  Monitor, 
  Database, 
  Zap, 
  Send, 
  X, 
  Menu, 
  Copy, 
  Check, 
  Calendar, 
  Clock, 
  DollarSign, 
  ShieldCheck,
  ChevronDown,
  Globe,
  Phone
} from 'lucide-react';

interface Review {
  id: number;
  platform: 'Fiverr' | 'Fiverr Pro';
  client: string;
  location: string;
  flag: string;
  text: string;
  rating: number;
}

interface Project {
  id: number;
  name: string;
  tags: [string, string];
  description: string;
  features: string[];
  url?: string;
}

const WHATSAPP_URL = "https://wa.me/14094206273?text=Hi%20Tanvir,%20I'd%20like%20to%20hire%20you%20for%20a%20project%20($30/hr).";
const WHATSAPP_NUMBER = "+14094206273";
const WHATSAPP_DISPLAY = "+1 (409) 420-6273";
const WIX_PARTNER_URL = "https://www.wix.com/studio/community/partners/cfc-designer";
const FIVERR_PROFILE_URL = "https://fiverr.com/tanvirul_islam1";
const FIVERR_AGENCY_URL = "https://fiverr.com/cfcdesigner";
const CLUTCH_PROFILE_URL = "https://clutch.co/profile/cfc-designer";
const LINKEDIN_URL = "https://www.linkedin.com/in/tanvirulislam/";
const GITHUB_URL = "https://github.com/tanvirulweb-creator";
const WEBSITE_URL = "https://www.cfcdesigner.com/";

const initialReviews: Review[] = [
  {
    id: 1,
    platform: 'Fiverr',
    client: 'jadefloral',
    location: 'United Kingdom',
    flag: '🇬🇧',
    text: 'Tanvirul was professional, patient and timely throughout the design process. I now have a fully functional website that exceeds my expectations. Thank for all of your help and I look forward to continuing to work with you should I need any future assistance.',
    rating: 5,
  },
  {
    id: 2,
    platform: 'Fiverr',
    client: 'waltercooley',
    location: 'United States',
    flag: '🇺🇸',
    text: 'Tanvir did a fantastic job designing the contact section of our website! It’s clean, user-friendly, and perfectly aligned with our needs. Highly recommend his work!',
    rating: 5,
  },
  {
    id: 3,
    platform: 'Fiverr',
    client: 'andradraghia',
    location: 'United Kingdom',
    flag: '🇬🇧',
    text: 'Great professional. He answered very quickly and still follows up even if the job was done.',
    rating: 5,
  },
  {
    id: 4,
    platform: 'Fiverr',
    client: 'rohondaamoroso',
    location: 'United States',
    flag: '🇺🇸',
    text: 'Tanvir delivered outstanding results in editing our website. The requested changes were implemented flawlessly and within the agreed timeline. His attention to detail and professionalism ensured a smooth and efficient process. I highly recommend his services for reliable and high-quality web edits.',
    rating: 5,
  },
  {
    id: 5,
    platform: 'Fiverr',
    client: 'lgmakers',
    location: 'United States',
    flag: '🇺🇸',
    text: 'Tanvirul is a great web developer. His creativity, professionalism, and attention to details are awesome. I strongly recommend Tanvirul.',
    rating: 5,
  },
  {
    id: 6,
    platform: 'Fiverr',
    client: 'steven_hamilton',
    location: 'Canada',
    flag: '🇨🇦',
    text: 'It was a true pleasure working with Tanvirul. I was truly pleased with my website, and I will highly recommend him to other businesses as well. Tanvirul job well done!',
    rating: 5,
  },
  {
    id: 7,
    platform: 'Fiverr',
    client: 'alexlanchon',
    location: 'France',
    flag: '🇫🇷',
    text: 'Tanvirul was always available and reactive which made the process very smooth and comfortable. We are very happy with the end result.',
    rating: 5,
  },
  {
    id: 8,
    platform: 'Fiverr',
    client: 'jamesroland',
    location: 'Germany',
    flag: '🇩🇪',
    text: 'Amazing work! Definitly the best I ever had on fiverr so far! Amazing communication too! I would not recommend anyone to think twice about making a wix website, rather I would recommend anyone TO RUN to that amzing designer! PERIOD! Thanks for everything',
    rating: 5,
  },
];

const extraReviews: Review[] = [
  {
    id: 9,
    platform: 'Fiverr',
    client: 'candiceadewole',
    location: 'Italy',
    flag: '🇮🇹',
    text: 'Amazing as always. Our team regularly uses his services for website building and troubleshooting. Reliable and FAST!!',
    rating: 5,
  },
  {
    id: 10,
    platform: 'Fiverr',
    client: 'ccch01',
    location: 'Switzerland',
    flag: '🇨🇭',
    text: 'fantastic result and delivery ahead of time. i will work with you again soon',
    rating: 5,
  },
  {
    id: 11,
    platform: 'Fiverr',
    client: 'matteopasolli',
    location: 'Estonia',
    flag: '🇪🇪',
    text: "CFC DESIGNER as always very avaiable, helpful, fast and reactive. I love that he does not simply stop to the task he has for the order but always tries to help you. And he's often willing to do multiple reviosion without even mentionin it which is very unique.",
    rating: 5,
  },
  {
    id: 12,
    platform: 'Fiverr',
    client: 'brovovo',
    location: 'Canada',
    flag: '🇨🇦',
    text: 'Tanvir. was a true professional throughout the website development process. His exceptional professionalism in his work and QUICK RESPONSIVENESS made collaborating with him seamless and productive. Faced with a challenging project, Elvin persisted until the desired result was achieved—truly a remarkable experience! 🙌',
    rating: 5,
  },
  {
    id: 13,
    platform: 'Fiverr',
    client: 'obotunji',
    location: 'Canada',
    flag: '🇨🇦',
    text: 'He did an outstanding job on my project—his attention to detail and professionalism truly exceeded expectations! Working with him was a pleasure, thanks to his excellent communication and quick turnaround time. I highly recommend him! 🙌',
    rating: 5,
  },
  {
    id: 14,
    platform: 'Fiverr',
    client: 'harshalnp',
    location: 'Ireland',
    flag: '🇮🇪',
    text: 'I had an excellent experience working with him. He skillfully linked my Spark Creative Technologies testimonials page and homepage (www.sparkcreativetechnologies.com) to a CMS on my Wix website. Demonstrating great patience and attention to detail, he thoroughly reviewed my requirements and explored various solutions to meet my needs. Throughout the project, he maintained clear and polite communication, effectively resolving any miscommunications. This was our third project together. His consistent professionalism ensures that I will continue to seek his expertise for future collaborations. Highly recommended!',
    rating: 5,
  },
];

const initialProjects: Project[] = [
  {
    id: 1,
    name: 'cozyhomestudios.com',
    tags: ['Interior & Living', 'Wix Studio'],
    description: 'Full-service interior design & home styling studio website with custom project showcase, client intake portal, and responsive editorial layout.',
    features: ['Wix Studio Responsive Grid', 'High-Res Project Gallery', 'Design Consultation Funnel', 'Custom Breakpoints'],
    url: 'https://www.cozyhomestudios.com/',
  },
  {
    id: 2,
    name: 'northbridghe.com',
    tags: ['Corporate Advisory', 'Wix Studio'],
    description: 'Corporate institutional presence with bespoke editorial layout, fluid animations, investor portals, and multi-language CMS collections.',
    features: ['Wix Studio Animation Curves', 'CMS Multi-Reference Fields', 'Accessible WCAG 2.1 AA UI', 'Fast CDN Asset Pipeline'],
    url: 'https://www.northbridghe.com/',
  },
  {
    id: 3,
    name: 'madisonsoiree.com',
    tags: ['Luxury Event Planning', 'Wix Studio'],
    description: 'High-end bespoke event production showcase with interactive portfolio galleries, service packages, and inquiry funnel.',
    features: ['Custom Gallery Interactions', 'Inquiry Automation Flow', 'Mobile Touch Optimization', 'Speed Optimized'],
    url: 'https://www.madisonsoiree.com/',
  },
  {
    id: 4,
    name: 'sunsetpointsoftware.com',
    tags: ['Software & Tech', 'Wix Studio'],
    description: 'Modern B2B software consulting and engineering firm site with technology stack breakdown, case studies, and scheduling integration.',
    features: ['Technical Case Studies CMS', 'Calendar Integration', 'Enterprise Layout', 'Lead Routing Webhooks'],
    url: 'https://www.sunsetpointsoftware.com/',
  },
  {
    id: 5,
    name: 'alphidia.com',
    tags: ['Enterprise Strategy', 'Wix Studio'],
    description: 'Enterprise strategy and data consultancy hub with interactive solution architectures, client whitepapers, and responsive presentation.',
    features: ['Dynamic Resource Center', 'Consulting Packages', 'Custom Navigation', 'Enterprise Standards'],
    url: 'https://www.alphidia.com/',
  },
  {
    id: 6,
    name: 'guidedlove.org',
    tags: ['Non-Profit & Community', 'Wix'],
    description: 'Mission-driven non-profit platform with donation integration, community resources, volunteer intake, and dynamic storytelling pages.',
    features: ['Donation Gateway Flow', 'Volunteer Intake System', 'Community CMS Stories', 'Accessible Typography'],
    url: 'https://www.guidedlove.org/',
  },
  {
    id: 7,
    name: 'villavcorfu.com',
    tags: ['Luxury Villa & Hospitality', 'Wix Studio'],
    description: 'Exclusive Mediterranean luxury villa rental showcase featuring booking availability, high-definition photo galleries, and local guides.',
    features: ['Interactive Availability Viewer', 'Multi-room Image Carousel', 'Custom Booking Funnel', 'Multilingual Ready'],
    url: 'https://www.villavcorfu.com/',
  },
  {
    id: 8,
    name: 'embertelevision.co.uk',
    tags: ['Media & Broadcast', 'Wix Studio'],
    description: 'Award-winning video production and digital broadcast agency site featuring video embeds, client showreels, and service catalogs.',
    features: ['Custom Video Showreel Embeds', 'Service Catalog CMS', 'Production Portfolio', 'Ultra-fast Video CDN'],
    url: 'https://www.embertelevision.co.uk/',
  },
];

const extraProjects: Project[] = [
  {
    id: 9,
    name: 'jmolner.com',
    tags: ['Pharmaceuticals', 'Wix Studio'],
    description: 'Specialized pharmaceutical manufacturer web presence with product portfolios, regulatory investor relations, and clinical announcements.',
    features: ['Regulatory Compliance CMS', 'Product Pipeline Grid', 'Investor Relations Deck', 'Corporate Clean Architecture'],
    url: 'https://www.jmolner.com/',
  },
  {
    id: 10,
    name: 'xards-metalcards.de',
    tags: ['Luxury Metal Cards', 'Wix eCommerce'],
    description: 'Premium custom laser-engraved metal business and credit card store with multi-currency checkout, custom design uploader, and product variants.',
    features: ['Wix Stores Product Variants', 'Custom Artwork Upload Flow', 'Multi-currency Gateway', 'Conversion Checkout'],
    url: 'https://www.xards-metalcards.de/',
  },
  {
    id: 11,
    name: 'yuliacohenart.com',
    tags: ['Fine Art Gallery', 'Wix eCommerce'],
    description: 'Fine art gallery & original artwork shop with exhibition archive, collector acquisition requests, and dynamic art catalogue.',
    features: ['Curated Art Catalog', 'Acquisition Request Module', 'Zoomable Artwork Viewer', 'Private Collection Portal'],
    url: 'https://www.yuliacohenart.com/',
  },
  {
    id: 12,
    name: 'cornerstonefamilycare.com',
    tags: ['Healthcare & Clinic', 'Wix'],
    description: 'Compassionate family clinic web portal with appointment booking, patient intake forms, provider directory, and insurance resources.',
    features: ['Patient Booking Integration', 'Provider Profiles CMS', 'HIPAA Secure Forms', 'Mobile Friendly Portal'],
    url: 'https://www.cornerstonefamilycare.com/',
  },
  {
    id: 13,
    name: 'sipsntipsbartending.net',
    tags: ['Hospitality & Events', 'Wix'],
    description: 'Mobile bartending and event drink service website with cocktail package calculator, date reservation, and verified customer testimonials.',
    features: ['Custom Event Calculator', 'Date Reservation Engine', 'Drink Menu Showcase', 'Customer Review Carousel'],
    url: 'https://www.sipsntipsbartending.net/',
  },
  {
    id: 14,
    name: 'heresthedealrealestate.com',
    tags: ['Real Estate Agency', 'Wix Studio'],
    description: 'Modern residential real estate hub with neighborhood guides, featured property listings, market evaluation forms, and agent bio.',
    features: ['Property Listings Showcase', 'Market Valuation Form', 'Neighborhood Guides', 'Lead Generation Engine'],
    url: 'https://www.heresthedealrealestate.com/',
  },
  {
    id: 15,
    name: 'klab.cl',
    tags: ['Digital Innovation Lab', 'Wix Studio'],
    description: 'Creative digital lab and technology accelerator portal showcasing digital transformation ventures, workshop registration, and team bio.',
    features: ['Venture Portfolio Grid', 'Workshop Registration CMS', 'Fluid Design Tokens', 'Bilingual English/Spanish'],
    url: 'https://www.klab.cl/',
  },
  {
    id: 16,
    name: 'cabletowcollective.com',
    tags: ['Apparel & Lifestyle', 'Wix eCommerce'],
    description: 'Independent brand apparel and collective platform featuring curated catalog, member collections, and seamless Wix checkout.',
    features: ['Wix eCommerce Storefront', 'Lookbook Interactive Gallery', 'Discount Engine', 'Automated Inventory Sync'],
    url: 'https://www.cabletowcollective.com/',
  },
  {
    id: 17,
    name: 'kingrichard.art',
    tags: ['Visual Art & Studio', 'Wix Studio'],
    description: 'Vibrant visual artist portfolio and studio store with high-impact hero animations, collectors gallery, and custom commission requests.',
    features: ['Artist Commission Request', 'Dynamic Collection Archive', 'Smooth Scroll Animations', 'Collector Inquiries'],
    url: 'https://www.kingrichard.art/',
  },
  {
    id: 18,
    name: 'ambitionsportsperformance.com',
    tags: ['Athletic Training', 'Wix Studio'],
    description: 'Elite sports training facility portal featuring athlete program registration, team training schedules, and trainer credentials.',
    features: ['Athlete Program Scheduler', 'Facility Tour Showcase', 'Coach Bio Directory', 'Membership Booking'],
    url: 'https://ambitionsportsperformance.com/',
  },
];

export default function App() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [hasMoreReviews, setHasMoreReviews] = useState<boolean>(true);
  
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [hasMoreProjects, setHasMoreProjects] = useState<boolean>(true);

  const [activeSection, setActiveSection] = useState<string>('portfolio-overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Modals & States
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hireModalOpen, setHireModalOpen] = useState<boolean>(false);
  const [selectedSaas, setSelectedSaas] = useState<string | null>(null);

  // Hourly calculator state
  const [hours, setHours] = useState<number>(20);
  const hourlyRate = 30;

  // Form submission feedback
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'portfolio-overview',
        'client-reviews',
        'industry-profiles',
        'selected-work',
        'core-skills',
        'saas-products',
        'hourly-engagement',
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadMoreReviews = () => {
    setReviews([...initialReviews, ...extraReviews]);
    setHasMoreReviews(false);
  };

  const handleLoadMoreProjects = () => {
    setProjects([...initialProjects, ...extraProjects]);
    setHasMoreProjects(false);
  };

  const copyPhoneNumber = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(WHATSAPP_NUMBER);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setHireModalOpen(false);
    }, 2500);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container/60 transition-all">
        <div className="h-16 sm:h-20 max-w-[1280px] mx-auto px-3.5 sm:px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-2 sm:gap-gutter">
          {/* Logo / Title */}
          <div className="flex items-center gap-2 sm:gap-space-md min-w-0">
            <div className="flex flex-col text-left min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-space-xs">
                <a
                  href="#portfolio-overview"
                  className="font-headline-sm text-base sm:text-headline-sm text-on-surface font-bold tracking-tight hover:text-primary transition-colors shrink-0"
                >
                  Tanvir
                </a>
                <a
                  href={WIX_PARTNER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-surface-container px-1.5 py-0.5 sm:px-2 rounded-full border border-primary-container/20 hover:border-primary-container/50 transition-all group/badge shrink-0"
                  title="View Verified Wix Partner Profile"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-container shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="font-label-sm text-[11px] sm:text-label-sm text-on-surface font-semibold group-hover/badge:text-primary transition-colors whitespace-nowrap">
                    Wix Verified
                  </span>
                </a>
              </div>
              <a
                href="#portfolio-overview"
                className="font-label-sm text-[11px] sm:text-label-sm text-on-surface-variant hover:text-on-surface transition-colors hidden sm:inline-block truncate"
              >
                Senior Full-Stack &amp; Partner
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-space-xs">
            <a
              href="#portfolio-overview"
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 ${
                activeSection === 'portfolio-overview'
                  ? 'bg-surface-container text-primary font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Overview
            </a>
            <a
              href="#client-reviews"
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 ${
                activeSection === 'client-reviews'
                  ? 'bg-surface-container text-primary font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Reviews
            </a>
            <a
              href="#industry-profiles"
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 ${
                activeSection === 'industry-profiles'
                  ? 'bg-surface-container text-primary font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Profiles
            </a>
            <a
              href="#selected-work"
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 ${
                activeSection === 'selected-work'
                  ? 'bg-surface-container text-primary font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Portfolio
            </a>
            <a
              href="#core-skills"
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 ${
                activeSection === 'core-skills'
                  ? 'bg-surface-container text-primary font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Skills
            </a>
            <a
              href="#saas-products"
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 ${
                activeSection === 'saas-products'
                  ? 'bg-surface-container text-primary font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              SaaS Products
            </a>
          </nav>

          {/* Right CTA & Avatar */}
          <div className="flex items-center gap-1.5 sm:gap-space-md shrink-0">
            {/* WhatsApp Direct Hourly CTA - Adapts smoothly on mobile */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-space-md py-1.5 sm:py-space-sm rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-xs sm:text-label-md hover:shadow-md transition-all shadow-[0_1px_3px_0_rgba(23,32,51,0.04)] active:scale-95 cursor-pointer font-semibold whitespace-nowrap"
              title="Chat directly on WhatsApp to hire on hourly ($30/hr)"
            >
              {/* WhatsApp Icon */}
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
              </svg>
              <span className="hidden sm:inline">Hire on Hourly ($30/hr)</span>
              <span className="sm:hidden">Hire ($30/hr)</span>
            </a>

            <img
              alt="Tanvir Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-2 ring-primary-container/20 shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrxZLX7CtVSfTa8NHbllcoirEUimxoaJS7W3-8_3ARvv6NZt7JWmO0FmG-aPh35rWe6q4b9SKvBqDq3cEuT1f24Beffrj2pTFM5BfpQlfHmJvTDHHeX6q5-xrrjvyt6qyAih145x-gN3VZ61q9npJIWQV1ia6EdbmfocYKRyo0kioy0K0lO2Z2WgG6X8exwUE8SRug5KPoT5alVZet1D8XTDBXS16KLmlpcItl-WM47YhuIEq9xusHPQXHUtZ3b1SfW0D_xvtZHetqasY"
            />
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 rounded-lg text-secondary hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container px-4 py-3 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-1">
              {[
                { href: '#portfolio-overview', label: 'Overview' },
                { href: '#client-reviews', label: 'Reviews' },
                { href: '#industry-profiles', label: 'Profiles' },
                { href: '#selected-work', label: 'Portfolio' },
                { href: '#core-skills', label: 'Skills' },
                { href: '#saas-products', label: 'SaaS Products' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 rounded-lg text-on-surface hover:bg-surface-container transition-colors font-label-md flex items-center justify-between min-h-[44px]"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary">chevron_right</span>
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors font-label-md flex items-center justify-between font-semibold mt-2 min-h-[44px]"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
                  </svg>
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </div>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100vh-4rem)] overflow-x-hidden">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO SECTION */}
          <section className="w-full py-8 sm:py-space-xl lg:py-space-2xl" id="portfolio-overview">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-gutter-desktop items-center">
                {/* Hero Left Column */}
                <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-space-lg">
                  {/* Wix Verified Partner & Fiverr Review Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={WIX_PARTNER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1 sm:px-space-md sm:py-1.5 rounded-full shadow-xs border border-surface-container hover:shadow-md hover:border-primary-container/40 transition-all cursor-pointer group text-xs sm:text-label-md"
                      title="View Verified Wix Partner Profile for CFC Designer"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-container shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-on-surface tracking-wide group-hover:text-primary transition-colors">
                        Wix Verified Partner
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      <span className="text-on-surface-variant text-[11px] sm:text-xs">Top Tier</span>
                      <span className="material-symbols-outlined text-[13px] text-secondary opacity-60">open_in_new</span>
                    </a>

                    <a
                      href={FIVERR_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1 sm:px-space-md sm:py-1.5 rounded-full shadow-xs border border-surface-container hover:shadow-md hover:border-[#1DBF73]/50 transition-all cursor-pointer group text-xs sm:text-label-md"
                      title="View Fiverr Profile - 4.9 (550+ verified reviews) on Fiverr & Upwork"
                    >
                      <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1DBF73] text-white text-[10px] sm:text-[11px] font-bold">
                        fi.
                      </span>
                      <span className="flex items-center text-amber-500">
                        <span className="material-symbols-outlined text-[13px] sm:text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      </span>
                      <span className="font-semibold text-on-surface tracking-wide group-hover:text-[#0d7d49] transition-colors">
                        4.9 <span className="font-normal text-secondary">(550+ verified reviews)</span>
                      </span>
                      <span className="text-[#0d7d49] font-medium text-[11px] sm:text-xs">on Fiverr &amp; Upwork</span>
                      <span className="material-symbols-outlined text-[13px] text-secondary opacity-60">open_in_new</span>
                    </a>
                  </div>

                  {/* Large Bold Headline */}
                  <h1 className="font-display text-2xl sm:text-4xl lg:text-display text-on-surface tracking-tight font-extrabold leading-tight">
                    Wix Development &amp; Website Development
                  </h1>

                  {/* Short Professional Introduction */}
                  <div className="font-body-md text-sm sm:text-body-lg text-secondary max-w-2xl leading-relaxed space-y-2.5 sm:space-y-3">
                    <p>
                      I'm a Professional Web Developer with 8+ years of experience building modern, responsive, and high-performing websites and web applications.
                    </p>
                    <p>
                      As a Wix Verified Partner and Full-Stack Developer, I specialize in Wix website development, Wix Studio, React.js, Next.js, Node.js, and modern web technologies.
                    </p>
                    <p>
                      I help businesses, entrepreneurs, and startups turn their ideas into professional digital experiences. Whether it's a business website, eCommerce store, custom web application, or SaaS platform, I focus on delivering clean design, reliable functionality, and solutions that support real business goals.
                    </p>
                  </div>

                  {/* Trust Metrics Pill */}
                  <div className="w-full bg-surface-container-lowest p-3 sm:px-space-lg sm:py-space-sm rounded-xl shadow-xs border border-surface-container flex flex-wrap items-center justify-between sm:justify-start gap-x-space-md gap-y-2 text-xs sm:text-label-md text-on-surface-variant">
                    <a
                      href={WIX_PARTNER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-semibold text-on-surface hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4 text-primary-container shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Official Wix Partner
                    </a>
                    <span className="text-outline-variant hidden sm:inline">•</span>
                    <a
                      href={FIVERR_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-semibold text-[#0d7d49] hover:underline"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#1DBF73]"></span>
                      4.9★ (550+ reviews)
                    </a>
                    <span className="text-outline-variant hidden sm:inline">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-on-surface">2000+</span> Projects Done
                    </div>
                  </div>

                  {/* CTAs - Full width buttons on mobile with big touch targets */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-space-md pt-space-xs w-full sm:w-auto">
                    <a
                      className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer w-full sm:w-auto"
                      href={WIX_PARTNER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Wix Partner Profile</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all duration-200 shadow-sm border border-surface-container cursor-pointer w-full sm:w-auto"
                      href="#client-reviews"
                    >
                      <span>View Client Reviews</span>
                      <span className="material-symbols-outlined text-[18px] text-primary">reviews</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-label-md transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer font-semibold w-full sm:w-auto"
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
                      </svg>
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

                {/* Hero Right Column (Portrait + Badge) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
                  <div className="relative w-full max-w-[340px] sm:max-w-[420px]">
                    <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-surface-container-high to-surface-container rounded-2xl transform rotate-2"></div>
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest border border-surface-container">
                      <img
                        alt="Tanvir - Wix Developer & Full-Stack Architect"
                        className="w-full h-auto max-h-[440px] sm:max-h-[520px] object-cover object-center transition-transform duration-500 hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnaFwdg1GutUvHTZNS-Ba8A6Rf6EOIqhYs3DOe133lm1hpabi4ADZZ-6RIHHyJs9WSN31M3xico-FjAc4V13PYFGpd2k5aHcHEqnbh-_MiKrSv2gvcIaST-I6zDO6qTGOKwnxYiW_-cXAQZrTdV4CF2suaUnx6IrWr42XfmxSzNMzdC3oMVzK39it62LWmCMOheXeIhjJrDUIUOc0CIC3m4nW4ItUjDyPlM7hy-t6LfZnpfdEegUYx7yQORV1_PQmfm9QbDsjxb15X9NE"
                      />
                    </div>
                    {/* Floating badge - safely positioned within container on mobile */}
                    <a
                      href={WIX_PARTNER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-3 left-2 right-2 sm:right-auto sm:bottom-4 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-md p-2.5 sm:p-space-md rounded-xl shadow-lg border border-surface-container flex items-center gap-2.5 sm:gap-space-sm max-w-none sm:max-w-[260px] hover:border-primary-container transition-all group"
                      title="View Verified Wix Partner credentials"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px] sm:text-[24px]">terminal</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-headline-sm text-xs sm:text-label-md font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                          Wix Studio &amp; Velo
                        </span>
                        <span className="font-label-sm text-[11px] sm:text-label-sm text-secondary truncate">Certified Enterprise Expert</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: CLIENT REVIEWS SECTION */}
          <section className="w-full py-10 sm:py-space-2xl bg-surface-container-low/40" id="client-reviews">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-space-xl">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
                  Testimonials
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                  <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface font-bold">
                    Client Reviews
                  </h2>
                  <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-surface-container-lowest border border-surface-container shadow-xs text-on-surface text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-[#1DBF73] text-white flex items-center justify-center font-bold text-[10px] leading-none shrink-0">
                        fi.
                      </span>
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-amber-500 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-display font-extrabold text-sm sm:text-[15px] text-on-surface leading-none">
                        4.9
                      </span>
                      <span className="font-label-sm text-secondary font-medium text-[11px] sm:text-xs">
                        (550+ verified reviews) on Fiverr &amp; Upwork
                      </span>
                    </div>
                    <span className="text-outline-variant/60 font-light">•</span>
                    <div className="flex items-center gap-1.5 font-label-sm text-[11px] sm:text-xs font-semibold text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      <span>2,000+ Projects Completed</span>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-xs sm:text-body-md text-secondary mt-2 sm:mt-space-sm max-w-2xl leading-relaxed">
                  Rated <strong className="text-on-surface font-semibold">4.9/5.0 across 550+ verified client reviews on Fiverr &amp; Upwork</strong> and 2,000+ successfully delivered projects across the United States, UK, Canada, France, Germany, Italy, Switzerland, Estonia, and Ireland.
                </p>
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-gutter" id="reviews-container">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="review-card bg-surface-container-lowest p-4 sm:p-space-lg rounded-xl shadow-xs border border-surface-container/60 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2 sm:mb-space-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide bg-[#1DBF73]/10 text-[#0d7d49]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1DBF73]"></span>
                          Fiverr Verified
                        </span>
                        <div className="flex text-amber-500">
                          {[...Array(rev.rating)].map((_, i) => (
                            <span
                              key={i}
                              className="material-symbols-outlined text-[15px] sm:text-[16px]"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed line-clamp-4 mb-3 sm:mb-space-md italic">
                        "{rev.text.replace(/^"|"$/g, '')}"
                      </p>
                    </div>
                    <div className="pt-2.5 sm:pt-space-sm border-t border-surface-container flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="font-headline-sm text-xs sm:text-label-md font-bold text-on-surface truncate">
                          {rev.client}
                        </h4>
                        <div className="flex items-center gap-1.5 font-label-sm text-[11px] sm:text-label-sm text-secondary mt-0.5">
                          <span className="text-[15px] sm:text-[16px] leading-none select-none" title={rev.location}>{rev.flag}</span>
                          <span className="truncate">{rev.location}</span>
                        </div>
                      </div>
                      <a
                        href={FIVERR_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary/60 hover:text-primary transition-colors shrink-0 p-1"
                        title="View review on Fiverr"
                      >
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button & Fiverr Profile Link */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-space-md mt-6 sm:mt-space-xl w-full sm:w-auto">
                {hasMoreReviews && (
                  <button
                    onClick={handleLoadMoreReviews}
                    className="inline-flex items-center justify-center gap-space-xs px-space-xl py-3 sm:py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-sm sm:text-label-md shadow-xs border border-surface-container hover:bg-surface-container hover:shadow-md transition-all duration-200 cursor-pointer w-full sm:w-auto"
                    id="load-more-reviews"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">add_circle</span>
                    <span>Load More Reviews (6 More)</span>
                  </button>
                )}
                <a
                  href={FIVERR_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-space-lg py-3 sm:py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-sm sm:text-label-md hover:bg-surface-container-high transition-all shadow-xs border border-surface-container w-full sm:w-auto"
                >
                  <span className="text-[#1DBF73] font-bold text-sm tracking-tighter">fi.</span>
                  <span>View More Reviews on Fiverr</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary">open_in_new</span>
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 3: FREELANCE PROFILES SECTION */}
          <section className="w-full py-10 sm:py-space-2xl" id="industry-profiles">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-space-xl">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
                  Marketplaces
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface font-bold">Freelance Profiles</h2>
                <p className="font-body-md text-xs sm:text-body-md text-secondary mt-space-xs max-w-xl">
                  Hire and collaborate securely through established global marketplace platforms.
                </p>
              </div>

              {/* Profiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-gutter mx-auto">
                {/* 1. Wix Partner */}
                <div className="bg-surface-container-lowest p-4 sm:p-space-lg rounded-xl shadow-xs border border-surface-container flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex flex-col items-start gap-3 sm:gap-space-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center p-2 shadow-xs border border-surface-container">
                      <img
                        src="https://images.seeklogo.com/logo-png/30/2/wix-com-logo-png_seeklogo-307036.png"
                        alt="Wix Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-md text-base sm:text-headline-sm font-bold text-on-surface">Wix Partner</h3>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary">
                          Official
                        </span>
                      </div>
                      <p className="font-body-sm text-xs sm:text-body-sm text-secondary mt-space-xs leading-relaxed">
                        Certified Wix &amp; Wix Studio Enterprise Partner for custom development and platform architecture.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-md border-t border-surface-container">
                    <a
                      className="inline-flex items-center justify-center w-full gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-xs sm:text-label-md hover:bg-surface-container-high transition-colors"
                      href={WIX_PARTNER_URL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>View Partner Profile</span>
                      <span className="material-symbols-outlined text-[16px] text-secondary">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* 2. Fiverr Profile */}
                <div className="bg-surface-container-lowest p-4 sm:p-space-lg rounded-xl shadow-xs border border-surface-container flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex flex-col items-start gap-3 sm:gap-space-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1DBF73]/10 text-[#1DBF73] flex items-center justify-center font-bold text-xl sm:text-2xl tracking-tighter shadow-xs">
                      fi.
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-md text-base sm:text-headline-sm font-bold text-on-surface">Fiverr Profile</h3>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#1DBF73]/10 text-[#0d7d49]">
                          Top Rated
                        </span>
                      </div>
                      <p className="font-body-sm text-xs sm:text-body-sm text-secondary mt-space-xs leading-relaxed">
                        Top Rated Freelancer &amp; Wix Specialist with 500+ five-star reviews for custom web design &amp; development.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-md border-t border-surface-container">
                    <a
                      className="inline-flex items-center justify-center w-full gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-xs sm:text-label-md hover:bg-surface-container-high transition-colors font-medium"
                      href={FIVERR_PROFILE_URL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>View Fiverr Profile</span>
                      <span className="material-symbols-outlined text-[16px] text-secondary">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* 3. Fiverr Agency */}
                <div className="bg-surface-container-lowest p-4 sm:p-space-lg rounded-xl shadow-xs border border-surface-container flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex flex-col items-start gap-3 sm:gap-space-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 text-primary-container flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-[26px] sm:text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        corporate_fare
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-md text-base sm:text-headline-sm font-bold text-on-surface">Fiverr Agency</h3>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary">
                          Enterprise
                        </span>
                      </div>
                      <p className="font-body-sm text-xs sm:text-body-sm text-secondary mt-space-xs leading-relaxed">
                        Dedicated agency profile (CFC Designer) managing full-scale web production, migrations, and team workflows.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-md border-t border-surface-container">
                    <a
                      className="inline-flex items-center justify-center w-full gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-xs sm:text-label-md hover:bg-surface-container-high transition-colors font-medium"
                      href={FIVERR_AGENCY_URL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>View Agency Profile</span>
                      <span className="material-symbols-outlined text-[16px] text-secondary">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* 4. Clutch Profile (Highlight OFF - standard card) */}
                <div className="bg-surface-container-lowest p-4 sm:p-space-lg rounded-xl shadow-xs border border-surface-container flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex flex-col items-start gap-3 sm:gap-space-md">
                    <div className="w-full flex items-center justify-between">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center p-2 shadow-xs border border-surface-container">
                        <img
                          src="https://images.seeklogo.com/logo-png/35/1/clutch-logo-png_seeklogo-352148.png"
                          alt="Clutch Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        4.9 Rating
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-md text-base sm:text-headline-sm font-bold text-on-surface">Clutch Profile</h3>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-secondary">
                          Verified
                        </span>
                      </div>
                      <p className="font-body-sm text-xs sm:text-body-sm text-secondary mt-space-xs leading-relaxed">
                        Clutch B2B directory profile with independently gathered client reviews and verification.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-md border-t border-surface-container">
                    <a
                      className="inline-flex items-center justify-center w-full gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-xs sm:text-label-md hover:bg-surface-container-high transition-colors"
                      href={CLUTCH_PROFILE_URL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>View Profile</span>
                      <span className="material-symbols-outlined text-[16px] text-secondary">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: PERSONAL LINKS SECTION */}
          <section className="w-full py-6 sm:py-space-lg bg-surface-container-low/30">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {/* Wix Partner */}
                <a
                  className="inline-flex items-center gap-1.5 sm:gap-space-sm px-3 py-2 sm:px-space-md sm:py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-label-md shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container hover:border-primary-container/40 transition-all group"
                  href={WIX_PARTNER_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-container shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:text-primary transition-colors whitespace-nowrap">Wix Verified Partner</span>
                </a>

                {/* Fiverr Profile */}
                <a
                  className="inline-flex items-center gap-1.5 sm:gap-space-sm px-3 py-2 sm:px-space-md sm:py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-label-md shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container hover:border-[#1DBF73]/40 transition-all group"
                  href={FIVERR_PROFILE_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="w-4 h-4 rounded-full bg-[#1DBF73] text-white flex items-center justify-center font-bold text-[10px] shrink-0 leading-none">
                    fi.
                  </span>
                  <span className="group-hover:text-[#0d7d49] transition-colors whitespace-nowrap">Fiverr Profile</span>
                </a>

                {/* Fiverr Agency */}
                <a
                  className="inline-flex items-center gap-1.5 sm:gap-space-sm px-3 py-2 sm:px-space-md sm:py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-label-md shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container hover:border-primary-container/40 transition-all group"
                  href={FIVERR_AGENCY_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    corporate_fare
                  </span>
                  <span className="group-hover:text-primary transition-colors whitespace-nowrap">Fiverr Agency</span>
                </a>

                {/* LinkedIn */}
                <a
                  className="inline-flex items-center gap-1.5 sm:gap-space-sm px-3 py-2 sm:px-space-md sm:py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-label-md shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container hover:border-[#0A66C2]/40 transition-all group"
                  href={LINKEDIN_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0A66C2] shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                  <span className="group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  className="inline-flex items-center gap-1.5 sm:gap-space-sm px-3 py-2 sm:px-space-md sm:py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-label-md shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container transition-all group"
                  href={GITHUB_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                  <span className="group-hover:text-primary transition-colors">GitHub</span>
                </a>

                {/* Contact Directly via WhatsApp */}
                <div
                  className="inline-flex items-center gap-1.5 sm:gap-space-sm px-3 py-2 sm:px-space-md sm:py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-label-md shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container hover:border-[#25D366]/40 transition-all group"
                  title="Direct WhatsApp: +14094206273"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
                    </svg>
                    <span className="group-hover:text-[#25D366] transition-colors whitespace-nowrap">
                      WhatsApp: {WHATSAPP_DISPLAY}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyPhoneNumber}
                    className="p-1 hover:bg-surface-container rounded-full text-secondary hover:text-on-surface transition-colors ml-0.5 cursor-pointer"
                    title="Copy WhatsApp Number"
                  >
                    {copiedPhone ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  </button>
                </div>

                {/* My Website */}
                <a
                  className="inline-flex items-center gap-1.5 sm:gap-space-sm px-3 py-2 sm:px-space-md sm:py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-label-md shadow-xs border border-surface-container hover:shadow-md hover:bg-surface-container hover:border-primary-container/40 transition-all group"
                  href={WEBSITE_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Globe size={16} className="text-primary shrink-0" />
                  <span className="group-hover:text-primary transition-colors whitespace-nowrap">My Website (cfcdesigner.com)</span>
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-secondary">open_in_new</span>
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 5: PORTFOLIO SECTION (Text and Links Only - CRITICAL: NO IMAGES) */}
          <section className="w-full py-10 sm:py-space-2xl" id="selected-work">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-space-xl">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
                  Index
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface font-bold">My Work</h2>
                <p className="font-body-md text-xs sm:text-body-md text-secondary mt-space-xs max-w-2xl leading-relaxed">
                  A curated collection of 18+ live client websites engineered on Wix and Wix Studio across corporate advisory, luxury eCommerce, hospitality, healthcare, and creative industries.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-space-md">
                {projects.map((proj) => (
                  <a
                    key={proj.id}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface-container-lowest p-3.5 sm:p-space-lg rounded-xl shadow-xs border border-surface-container hover:shadow-md hover:border-primary-container/40 hover:bg-surface-container-low/40 transition-all duration-200 flex items-center justify-between cursor-pointer"
                    title={`Visit ${proj.name} (Live Wix Website)`}
                  >
                    <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0 pr-2">
                      <div className="flex items-center gap-1.5 sm:gap-space-xs flex-wrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container shrink-0"></span>
                        <span className="font-headline-sm text-sm sm:text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                          {proj.name}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Live Wix
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                        <span className="px-2 sm:px-2.5 py-0.5 rounded-full font-label-sm text-[11px] sm:text-label-sm bg-surface-container text-secondary font-medium truncate max-w-[150px] sm:max-w-none">
                          {proj.tags[0]}
                        </span>
                        <span className="px-2 sm:px-2.5 py-0.5 rounded-full font-label-sm text-[11px] sm:text-label-sm bg-primary/10 text-primary font-medium shrink-0">
                          {proj.tags[1]}
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-200 shrink-0 shadow-xs">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        arrow_outward
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Load More Projects Button */}
              {hasMoreProjects && (
                <div className="flex justify-center mt-6 sm:mt-space-xl">
                  <button
                    onClick={handleLoadMoreProjects}
                    className="inline-flex items-center justify-center gap-space-xs px-space-xl py-3 sm:py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-sm sm:text-label-md border border-surface-container shadow-xs hover:bg-surface-container hover:shadow-md transition-all duration-200 cursor-pointer w-full sm:w-auto"
                    id="load-more-projects"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">expand_more</span>
                    <span>Load More Projects (10 More)</span>
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* SECTION 6: SKILLS & TECHNOLOGIES SECTION */}
          <section className="w-full py-10 sm:py-space-2xl bg-surface-container-low/30" id="core-skills">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-space-xl">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
                  Capabilities
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface font-bold">Skills &amp; Technologies</h2>
                <p className="font-body-md text-xs sm:text-body-md text-secondary mt-space-xs max-w-xl">
                  Engineered stacks optimized for modularity, execution performance, and rapid deployment.
                </p>
              </div>

              {/* Categories in a structured grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-gutter">
                {/* Category 1: Wix Development (Highest Prominence) */}
                <div className="bg-surface-container-lowest p-5 sm:p-space-xl rounded-xl shadow-md border border-surface-container flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 left-0 h-1.5 bg-primary-container"></div>
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-space-md">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[22px] sm:text-[24px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                          stars
                        </span>
                        <h3 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">Wix Development</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-primary/10 text-primary">
                        Core Expertise
                      </span>
                    </div>
                    <p className="font-body-sm text-xs sm:text-body-sm text-secondary mb-4 sm:mb-space-lg leading-relaxed">
                      Specialized full-cycle development utilizing Wix ecosystem standards and programmatic Velo APIs.
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-space-md sm:py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-xs sm:text-label-md font-semibold">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        Wix
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-space-md sm:py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-xs sm:text-label-md font-semibold">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        Wix Studio
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-space-md sm:py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-xs sm:text-label-md font-semibold">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        Velo
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-sm border-t border-surface-container text-right">
                    <span className="font-label-sm text-[11px] sm:text-label-sm text-primary font-semibold">Enterprise Level Standards</span>
                  </div>
                </div>

                {/* Category 2: Frontend Development */}
                <div className="bg-surface-container-lowest p-5 sm:p-space-xl rounded-xl shadow-xs border border-surface-container flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-space-md">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[22px] sm:text-[24px] text-secondary">desktop_windows</span>
                        <h3 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">Frontend Development</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-surface-container text-secondary">
                        Client-Side
                      </span>
                    </div>
                    <p className="font-body-sm text-xs sm:text-body-sm text-secondary mb-4 sm:mb-space-lg leading-relaxed">
                      High-performance responsive rendering, modern framework architectures, and design tokens.
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        React.js
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        Next.js
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        JavaScript
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        TypeScript
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        HTML5
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        CSS3
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-sm border-t border-surface-container text-right">
                    <span className="font-label-sm text-[11px] sm:text-label-sm text-secondary">Modular Component Stacks</span>
                  </div>
                </div>

                {/* Category 3: Backend Development */}
                <div className="bg-surface-container-lowest p-5 sm:p-space-xl rounded-xl shadow-xs border border-surface-container flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-space-md">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[22px] sm:text-[24px] text-secondary">dns</span>
                        <h3 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">Backend Development</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-surface-container text-secondary">
                        Server &amp; Data
                      </span>
                    </div>
                    <p className="font-body-sm text-xs sm:text-body-sm text-secondary mb-4 sm:mb-space-lg leading-relaxed">
                      Reliable serverless microservices, resilient relational and document datastores, and REST endpoints.
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        Node.js
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        Express.js
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        NestJS
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        MongoDB
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        PostgreSQL
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 sm:px-space-sm sm:py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md">
                        REST API
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-sm border-t border-surface-container text-right">
                    <span className="font-label-sm text-[11px] sm:text-label-sm text-secondary">Scalable Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: SAAS PRODUCTS & APPLICATIONS */}
          <section className="w-full py-10 sm:py-space-2xl" id="saas-products">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-space-xl">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold mb-space-xs">
                  Products
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface font-bold">
                  SaaS Products &amp; Applications
                </h2>
                <p className="font-body-md text-xs sm:text-body-md text-secondary mt-space-xs max-w-xl">
                  Proprietary software products, tools, and digital solutions designed and engineered independently.
                </p>
              </div>

              {/* 3 Compact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-gutter">
                {/* App 1: Speed Up */}
                <div className="bg-surface-container-lowest p-5 sm:p-space-xl rounded-xl shadow-xs border border-surface-container flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container mb-3 sm:mb-space-md">
                      <span className="material-symbols-outlined text-[22px] sm:text-[26px]">speed</span>
                    </div>
                    <h3 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface mb-space-xs">
                      Speed Up – Phone Cleaner &amp; Booster
                    </h3>
                    <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed mb-4 sm:mb-space-lg">
                      High-efficiency utility application optimizing storage, cache management, and memory diagnostics.
                    </p>
                  </div>
                  <div className="pt-3 sm:pt-space-md border-t border-surface-container">
                    <button
                      onClick={() => setSelectedSaas('Speed Up – Phone Cleaner & Booster')}
                      className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md font-semibold text-primary hover:text-primary-container transition-colors cursor-pointer"
                    >
                      <span>View Application</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* App 2: CRM Pro */}
                <div className="bg-surface-container-lowest p-5 sm:p-space-xl rounded-xl shadow-xs border border-surface-container flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container mb-3 sm:mb-space-md">
                      <span className="material-symbols-outlined text-[22px] sm:text-[26px]">hub</span>
                    </div>
                    <h3 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface mb-space-xs">
                      CRM Pro – Business CRM Platform
                    </h3>
                    <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed mb-4 sm:mb-space-lg">
                      Lightweight, customizable pipeline and client lifecycle management platform for modern service agencies.
                    </p>
                  </div>
                  <div className="pt-3 sm:pt-space-md border-t border-surface-container">
                    <button
                      onClick={() => setSelectedSaas('CRM Pro – Business CRM Platform')}
                      className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md font-semibold text-primary hover:text-primary-container transition-colors cursor-pointer"
                    >
                      <span>View Application</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* App 3: NsSkin */}
                <div className="bg-surface-container-lowest p-5 sm:p-space-xl rounded-xl shadow-xs border border-surface-container flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container mb-3 sm:mb-space-md">
                      <span className="material-symbols-outlined text-[22px] sm:text-[26px]">face</span>
                    </div>
                    <h3 className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface mb-space-xs">
                      NsSkin – Face Analysis Tools
                    </h3>
                    <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed mb-4 sm:mb-space-lg">
                      AI-assisted facial diagnostics and skincare routine recommendation engine with real-time analysis.
                    </p>
                  </div>
                  <div className="pt-3 sm:pt-space-md border-t border-surface-container">
                    <button
                      onClick={() => setSelectedSaas('NsSkin – Face Analysis Tools')}
                      className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-label-md font-semibold text-primary hover:text-primary-container transition-colors cursor-pointer"
                    >
                      <span>View Application</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: HOURLY HIRING SECTION ($30 Per Hour - Bottom Banner) */}
          <section className="w-full py-10 sm:py-space-2xl bg-surface" id="hourly-engagement">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="bg-on-surface text-on-primary rounded-2xl p-5 sm:p-space-xl lg:p-space-2xl shadow-xl relative overflow-hidden">
                {/* Subtle accent gradient inside dark banner */}
                <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 sm:gap-space-xl">
                  {/* Banner Text & Value Props */}
                  <div className="flex flex-col items-start text-left max-w-2xl w-full">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/20 text-inverse-primary font-label-sm text-xs sm:text-label-sm font-semibold mb-3 sm:mb-space-md">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      Immediate Availability
                    </span>
                    <h2 className="font-headline-lg text-2xl sm:text-headline-lg lg:text-display text-on-primary tracking-tight font-extrabold leading-tight text-left">
                      Hire Me for Your Hourly Project
                    </h2>
                    <p className="font-body-md text-xs sm:text-body-md text-outline-variant mt-2 sm:mt-space-sm mb-4 sm:mb-space-lg leading-relaxed text-left">
                      Flexible, transparent hourly contracting for dedicated sprints, custom Velo scripts, responsive overhauls, and continuous platform architecture.
                    </p>

                    {/* 3 Short Value Propositions */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-start justify-start gap-2.5 sm:gap-space-md w-full">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] sm:text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="font-label-md text-xs sm:text-label-md text-on-primary font-medium text-left">High-Quality Work</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] sm:text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="font-label-md text-xs sm:text-label-md text-on-primary font-medium text-left">On-Time Delivery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] sm:text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="font-label-md text-xs sm:text-label-md text-on-primary font-medium text-left">Professional Communication</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Badge & WhatsApp Primary CTA */}
                  <div className="w-full lg:w-auto flex flex-col items-center bg-surface-container-lowest/10 backdrop-blur-md p-5 sm:p-space-xl rounded-xl text-center min-w-0 sm:min-w-[280px] shadow-inner border border-white/10">
                    <span className="font-label-sm text-[11px] sm:text-label-sm text-outline-variant uppercase tracking-wider mb-1">
                      Standard Rate
                    </span>
                    <div className="font-display text-3xl sm:text-[44px] lg:text-[52px] leading-tight font-extrabold text-on-primary my-1">
                      $30 <span className="text-base sm:text-headline-sm font-normal text-outline-variant">/ Hour</span>
                    </div>
                    <span className="font-body-sm text-[11px] sm:text-body-sm text-outline-variant mb-4 sm:mb-space-lg">
                      Billed incrementally • Timesheets verified
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-space-xl py-3.5 sm:py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-headline-sm text-sm sm:text-label-md font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-[#25D366]/40 cursor-pointer active:scale-95"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
                      </svg>
                      <span>Hire Me Now</span>
                    </a>
                    <span className="text-[11px] sm:text-xs text-white/70 mt-2">
                      WhatsApp: {WHATSAPP_DISPLAY}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-lowest py-6 sm:py-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)] border-t border-surface-container">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-space-md text-center md:text-left">
          <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
            © 2026 Tanvir (CFC Designer). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs sm:text-body-sm text-on-surface-variant">
            <a href={WIX_PARTNER_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              Wix Verified Partner
            </a>
            <span className="text-outline-variant">•</span>
            <a href={FIVERR_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0d7d49] transition-colors flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1DBF73]"></span>
              Fiverr 4.9★
            </a>
            <span className="text-outline-variant">•</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 transition-colors font-medium">
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

      {/* MODAL 1: PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-space-xl shadow-2xl border border-surface-container relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-secondary hover:text-on-surface rounded-full hover:bg-surface-container transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Project Detail
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
              {selectedProject.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-space-md">
              <span className="px-2.5 py-1 rounded-full text-[12px] bg-surface-container text-secondary font-medium">
                {selectedProject.tags[0]}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[12px] bg-primary/10 text-primary font-semibold">
                {selectedProject.tags[1]}
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">
              {selectedProject.description}
            </p>
            <div className="mb-space-lg">
              <h4 className="font-headline-sm text-label-md font-bold text-on-surface mb-2">Key Architecture &amp; Deliverables</h4>
              <ul className="space-y-1.5">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-body-sm text-on-surface">
                    <CheckCircle size={16} className="text-primary-container shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-space-md border-t border-surface-container flex items-center justify-between gap-space-md">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-space-lg py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md text-label-md font-semibold transition-colors cursor-pointer shadow-sm"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
                </svg>
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: HIRE HOURLY / INQUIRY MODAL */}
      {hireModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-xl shadow-2xl border border-surface-container relative">
            <button
              onClick={() => setHireModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-secondary hover:text-on-surface rounded-full hover:bg-surface-container transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {inquirySent ? (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary-container flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Inquiry Sent!</h3>
                <p className="font-body-md text-secondary mt-2 max-w-sm">
                  Thank you! Tanvir will review your project requirements and respond promptly.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                    Hourly Engagement
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-1">
                  Hire on Hourly ($30/hr)
                </h3>
                <p className="font-body-sm text-secondary mb-space-md">
                  Transparent timesheet tracking via Upwork, Fiverr, or direct WhatsApp milestone collaboration.
                </p>

                {/* WhatsApp Quick Button */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 mb-space-md rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-label-md font-bold transition-all shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
                  </svg>
                  <span>Chat on WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>

                {/* Interactive Hours Estimator */}
                <div className="bg-surface-container p-space-md rounded-xl mb-space-md">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Estimated Sprint Scope
                    </span>
                    <span className="font-headline-sm text-primary font-bold">{hours} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="80"
                    step="5"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full accent-primary-container cursor-pointer"
                  />
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-surface-container-high text-body-sm">
                    <span className="text-secondary">Estimated Investment:</span>
                    <span className="font-bold text-headline-sm text-on-surface">
                      ${hours * hourlyRate} <span className="text-xs text-secondary font-normal">USD</span>
                    </span>
                  </div>
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div>
                    <label className="block font-label-sm text-secondary mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-space-md py-2 rounded-lg bg-surface border border-surface-container text-body-sm text-on-surface focus:outline-none focus:border-primary-container"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-secondary mb-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-space-md py-2 rounded-lg bg-surface border border-surface-container text-body-sm text-on-surface focus:outline-none focus:border-primary-container"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-secondary mb-1">Project Brief / Stack</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe what you want to build or fix (Wix Studio, Velo, custom API, responsive overhaul)..."
                      className="w-full px-space-md py-2 rounded-lg bg-surface border border-surface-container text-body-sm text-on-surface focus:outline-none focus:border-primary-container"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2">
                    <a
                      href={FIVERR_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-secondary hover:text-primary transition-colors"
                    >
                      <span>Or hire on Fiverr</span>
                      <ExternalLink size={12} />
                    </a>
                    <button
                      type="submit"
                      className="px-space-xl py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-all shadow-sm cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 3: SAAS APPLICATION INFO */}
      {selectedSaas && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-space-xl shadow-2xl border border-surface-container relative">
            <button
              onClick={() => setSelectedSaas(null)}
              className="absolute top-4 right-4 p-2 text-secondary hover:text-on-surface rounded-full hover:bg-surface-container transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                SaaS Product Details
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">{selectedSaas}</h3>
            <p className="font-body-sm text-secondary leading-relaxed mb-space-lg">
              Engineered and maintained by Tanvir. Built with high-performance responsive frontend architecture, modular state handling, and automated background synchronization.
            </p>
            <div className="bg-surface-container-low p-space-md rounded-xl space-y-2 mb-space-lg text-body-sm text-on-surface">
              <div className="flex items-center justify-between">
                <span className="text-secondary">Status:</span>
                <span className="font-semibold text-emerald-600">Active &amp; Production</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">Core Architecture:</span>
                <span className="font-medium">React / Node.js / Velo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">Security &amp; Uptime:</span>
                <span className="font-medium">99.9% Cloud SLA</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedSaas(null)}
              className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FLOATING MOBILE WHATSAPP ACTION (Mobile Only) */}
      <aside aria-label="Quick WhatsApp Contact" className="sm:hidden fixed bottom-4 right-4 z-40">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/50 active:scale-95 transition-all border border-white/20 font-semibold text-xs tracking-wide"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.554 1.761.816 2.781.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.8-5.767-5.8zm7.545 5.765c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.54-.336-3.61-.926l-4.421 1.16 1.183-4.321c-.694-1.127-1.097-2.454-1.097-3.458 0-4.16 3.385-7.545 7.545-7.545s7.545 3.385 7.545 7.545zm-4.708 2.809c-.198-.099-1.171-.578-1.353-.644-.182-.066-.314-.099-.446.099-.133.198-.513.644-.629.776-.116.133-.231.149-.429.05-.198-.099-.838-.309-1.597-.986-.591-.527-.989-1.178-1.105-1.376-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.612-1.47-.161-.386-.326-.334-.446-.34l-.38-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.099.132 1.399 2.136 3.39 2.994.474.204.844.326 1.132.418.476.151.909.13 1.251.079.382-.057 1.171-.479 1.336-.942.166-.463.166-.86.116-.943-.049-.082-.181-.132-.379-.231z"/>
          </svg>
          <span>Chat on WhatsApp</span>
          <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse"></span>
        </a>
      </aside>
    </div>
  );
}

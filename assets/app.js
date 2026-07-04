/* Generated from src/app.jsx by build.js — do not edit directly. */
"use strict";
const {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView
} = window.Motion;
const {
  useState,
  useEffect,
  useRef
} = React;
const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
};
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return React.createElement("div", {
    style: {
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      top: 0
    }
  }, React.createElement("div", {
    className: "top-bar"
  }, React.createElement("div", {
    className: "container top-bar-container"
  }, React.createElement("a", {
    href: "tel:4168057642"
  }, "Call: 416-805-7642"), React.createElement("a", {
    href: "mailto:kyle_cuttingedge@hotmail.com"
  }, "Email: kyle_cuttingedge@hotmail.com"))), React.createElement(motion.header, {
    className: `header ${scrolled ? 'scrolled' : ''}`,
    initial: {
      y: -100
    },
    animate: {
      y: 0
    },
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    },
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "container nav-container"
  }, React.createElement("div", {
    className: "brand-logo"
  }, React.createElement("div", {
    className: "brand-logo-box"
  }, React.createElement("div", null, "CE"), React.createElement("div", null, "LS")), React.createElement("div", {
    className: "brand-logo-divider"
  }), React.createElement("div", {
    className: "brand-logo-text"
  }, React.createElement("div", {
    className: "brand-title-top"
  }, "CUTTING EDGE"), React.createElement("div", {
    className: "brand-pill"
  }, "LANDSCAPING &"), React.createElement("div", {
    className: "brand-title-bottom"
  }, "SNOWPLOWING"), React.createElement("div", {
    className: "brand-est"
  }, "EST 2004"))), React.createElement("nav", {
    className: "desktop-nav"
  }, React.createElement("ul", {
    className: "nav-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#home"
  }, "Home")), React.createElement("li", null, React.createElement("a", {
    href: "#about"
  }, "About Us")), React.createElement("li", null, React.createElement("a", {
    href: "#services"
  }, "Services")), React.createElement("li", null, React.createElement("a", {
    href: "#gallery"
  }, "Gallery")), React.createElement("li", null, React.createElement("a", {
    href: "#partners"
  }, "Partners")), React.createElement("li", null, React.createElement(motion.a, {
    href: "#contact",
    className: "nav-cta",
    whileHover: {
      scale: 1.05
    },
    whileTap: {
      scale: 0.95
    }
  }, "Get a Free Quote")))), React.createElement("div", {
    className: "mobile-hamburger",
    onClick: () => setIsMenuOpen(!isMenuOpen)
  }, React.createElement("div", {
    className: `hamburger-line ${isMenuOpen ? 'open-1' : ''}`
  }), React.createElement("div", {
    className: `hamburger-line ${isMenuOpen ? 'open-2' : ''}`
  }), React.createElement("div", {
    className: `hamburger-line ${isMenuOpen ? 'open-3' : ''}`
  }))), React.createElement(AnimatePresence, null, isMenuOpen && React.createElement(motion.div, {
    className: "mobile-nav-overlay",
    initial: {
      opacity: 0,
      height: 0
    },
    animate: {
      opacity: 1,
      height: 'auto'
    },
    exit: {
      opacity: 0,
      height: 0
    }
  }, React.createElement("ul", {
    className: "mobile-nav-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#home",
    onClick: () => setIsMenuOpen(false)
  }, "Home")), React.createElement("li", null, React.createElement("a", {
    href: "#about",
    onClick: () => setIsMenuOpen(false)
  }, "About Us")), React.createElement("li", null, React.createElement("a", {
    href: "#services",
    onClick: () => setIsMenuOpen(false)
  }, "Services")), React.createElement("li", null, React.createElement("a", {
    href: "#gallery",
    onClick: () => setIsMenuOpen(false)
  }, "Gallery")), React.createElement("li", null, React.createElement("a", {
    href: "#partners",
    onClick: () => setIsMenuOpen(false)
  }, "Partners")), React.createElement("li", null, React.createElement("a", {
    href: "#contact",
    className: "nav-cta",
    onClick: () => setIsMenuOpen(false)
  }, "Get a Free Quote")))))));
}
function Hero() {
  const [mode, setMode] = useState('summer');
  const bgImage = mode === 'summer' ? 'url(assets/summer.png)' : 'url(assets/winter.png)';
  return React.createElement("section", {
    id: "home",
    className: "hero",
    style: {
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      paddingBottom: '60px',
      overflowX: 'hidden'
    }
  }, React.createElement(AnimatePresence, {
    mode: "wait"
  }, React.createElement(motion.div, {
    key: mode,
    className: "hero-bg",
    style: {
      backgroundImage: bgImage,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.6)'
    },
    initial: {
      opacity: 0,
      scale: 1.05
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  })), React.createElement("div", {
    className: "hero-content container",
    style: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      boxSizing: 'border-box'
    }
  }, React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", {
    className: "hero-text"
  }, React.createElement(motion.h2, {
    style: {
      color: '#d4af37',
      fontFamily: "'Yellowtail', cursive",
      fontSize: 'clamp(1.6rem, 5vw, 3.5rem)',
      marginBottom: '-0.5rem',
      transform: 'rotate(-3deg)',
      display: 'block',
      width: '100%'
    },
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.1
    }
  }, "Transform Your Outdoors"), React.createElement(motion.h1, {
    style: {
      color: 'white',
      fontSize: 'clamp(1.8rem, 7vw, 4.5rem)',
      fontWeight: 900,
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      fontFamily: "'Montserrat', sans-serif",
      textTransform: 'uppercase',
      width: '100%',
      wordBreak: 'break-word'
    },
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.2,
      duration: 0.8
    }
  }, "Award-Winning Landscaping & Snowplowing"), React.createElement(motion.p, {
    style: {
      color: '#f1f5f9',
      fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
      marginBottom: '2.5rem',
      fontWeight: 500,
      width: '100%',
      lineHeight: '1.6',
      fontFamily: "'Montserrat', sans-serif"
    },
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.4,
      duration: 0.8
    }
  }, "Premium, fully-insured landscaping and hardscaping solutions tailored for luxury and comfort in the Greater Toronto Area."), React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.6
    },
    className: "hero-toggle"
  }, React.createElement("button", {
    onClick: () => setMode('summer'),
    className: `toggle-pill ${mode === 'summer' ? 'active' : ''}`
  }, "Landscaping"), React.createElement("button", {
    onClick: () => setMode('winter'),
    className: `toggle-pill ${mode === 'winter' ? 'active' : ''}`
  }, "Snowplowing"))), React.createElement(motion.div, {
    className: "hero-form-card",
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      delay: 0.8,
      type: "spring"
    }
  }, React.createElement("h3", null, "Request a Free Quote"), React.createElement("form", {
    action: "https://formsubmit.co/kyle_cuttingedge@hotmail.com",
    method: "POST"
  }, React.createElement("input", {
    type: "hidden",
    name: "_subject",
    value: "New Quote Request - Cutting Edge Landscaping"
  }), React.createElement("input", {
    type: "hidden",
    name: "_next",
    value: "https://cuttingedge2.vercel.app/?submitted=true"
  }), React.createElement("input", {
    type: "hidden",
    name: "_captcha",
    value: "false"
  }), React.createElement("div", {
    className: "form-group",
    style: {
      position: 'relative'
    }
  }, React.createElement("input", {
    type: "text",
    name: "name",
    className: "form-input",
    placeholder: "Full Name",
    required: true
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#ef4444',
      fontSize: '1.2rem',
      pointerEvents: 'none'
    }
  }, "*")), React.createElement("div", {
    className: "form-group",
    style: {
      position: 'relative'
    }
  }, React.createElement("input", {
    type: "email",
    name: "email",
    className: "form-input",
    placeholder: "Email Address",
    required: true
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#ef4444',
      fontSize: '1.2rem',
      pointerEvents: 'none'
    }
  }, "*")), React.createElement("div", {
    className: "form-group",
    style: {
      position: 'relative'
    }
  }, React.createElement("input", {
    type: "tel",
    name: "phone",
    className: "form-input",
    placeholder: "Phone Number",
    required: true
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#ef4444',
      fontSize: '1.2rem',
      pointerEvents: 'none'
    }
  }, "*")), React.createElement("div", {
    className: "form-group"
  }, React.createElement("input", {
    type: "text",
    name: "address",
    className: "form-input",
    placeholder: "Location / Address (Optional)"
  })), React.createElement("div", {
    className: "form-group",
    style: {
      position: 'relative'
    }
  }, React.createElement("select", {
    name: "service",
    className: "form-input",
    required: true,
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Select Service..."), React.createElement("option", {
    value: "landscaping"
  }, "Landscaping"), React.createElement("option", {
    value: "hardscaping"
  }, "Hardscaping"), React.createElement("option", {
    value: "snowplowing"
  }, "Snowplowing"), React.createElement("option", {
    value: "other"
  }, "Other / Maintenance")), React.createElement("span", {
    style: {
      position: 'absolute',
      right: '35px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#ef4444',
      fontSize: '1.2rem',
      pointerEvents: 'none'
    }
  }, "*")), React.createElement("button", {
    type: "submit",
    className: "btn-submit"
  }, "Get My Free Quote"))))));
}
function TrustBanner() {
  return React.createElement("div", {
    className: "trust-banner"
  }, React.createElement("div", {
    className: "container trust-container"
  }, React.createElement(motion.div, {
    className: "trust-badge",
    initial: {
      opacity: 0,
      y: 20
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.1
    }
  }, React.createElement("span", {
    className: "trust-badge-icon",
    style: {
      fontSize: '1rem',
      fontWeight: 800,
      marginRight: '5px'
    }
  }, "5.0 Rating"), React.createElement("div", null, React.createElement("div", {
    style: {
      color: '#d4af37'
    }
  }, "5.0 Rating"), React.createElement("div", null, "Google Reviews"))), React.createElement(motion.div, {
    className: "trust-badge",
    initial: {
      opacity: 0,
      y: 20
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.2
    }
  }, React.createElement("span", {
    className: "trust-badge-icon",
    style: {
      fontSize: '1rem',
      fontWeight: 800,
      marginRight: '5px'
    }
  }, "Top Rated"), React.createElement("div", null, React.createElement("div", {
    style: {
      color: '#d4af37'
    }
  }, "Best of the Best"), React.createElement("div", null, "HomeStars")))));
}
function TrustVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: "-20% 0px"
  });
  const [isMuted, setIsMuted] = useState(false);
  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => {
          console.log("Autoplay with sound prevented, falling back to muted", e);
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return React.createElement("section", {
    className: "trust-video-section",
    ref: containerRef
  }, React.createElement("video", {
    ref: videoRef,
    src: "assets/cutting edge demo video.mp4",
    className: "trust-video-element",
    muted: isMuted,
    loop: true,
    playsInline: true
  }), React.createElement("div", {
    className: "trust-video-overlay",
    style: {
      pointerEvents: 'none'
    }
  }, React.createElement("button", {
    onClick: toggleMute,
    style: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0,0,0,0.5)',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '50px',
      padding: '10px 20px',
      cursor: 'pointer',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      pointerEvents: 'auto'
    },
    onMouseOver: e => e.target.style.background = 'rgba(0,0,0,0.8)',
    onMouseOut: e => e.target.style.background = 'rgba(0,0,0,0.5)'
  }, isMuted ? '🔇 Unmute' : '🔊 Mute')));
}
function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const svgs = {
    flagstone: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M4 4h6v7H4zm8 0h8v5h-8zm-2 9H4v7h6zm4-2h6v9h-6z"
    })),
    wall: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M2 14h20v3H2zm0 5h20v3H2zM4 9h16v3H4z"
    })),
    spa: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z"
    })),
    fence: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M5 4v16M12 4v16M19 4v16M3 10h18M3 14h18"
    })),
    turf: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M3 16h18v4H3zm1.5-6h15l1.5-4H3z"
    })),
    house: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M12 3 2 12h3v8h14v-8h3L12 3zm-2 15v-5h4v5h-4z"
    })),
    pool: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M3 16h18v3H3zm3-4h12v3H6zm3-4h6v3H9z"
    })),
    snow: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M19 13h-4v-3H9v3H5l-3 6h20z"
    })),
    interlock: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M4 4h6v6H4zm8 0h8v6h-8zm-8 8h8v8H4zm10 0h6v8h-6z"
    })),
    sodding: React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M2 16h20v4H2zm4-6h12v4H6z"
    }))
  };
  const services = [{
    title: 'Flagstone Natural Stone',
    image: 'assets/flagstone natural stone.jpeg',
    objectPosition: 'center 35%',
    icon: svgs.flagstone
  }, {
    title: 'Retaining Walls',
    image: 'assets/retaining walls.jpeg',
    objectPosition: 'center',
    icon: svgs.wall
  }, {
    title: 'Hot Tubs',
    image: 'assets/hottubs.jpeg',
    objectPosition: 'center',
    icon: svgs.spa
  }, {
    title: 'Composite Decking',
    image: 'assets/deckfrances.jpeg',
    objectPosition: 'center',
    icon: svgs.fence
  }, {
    title: 'Artificial Turf',
    image: 'assets/artificalterf.jpeg',
    objectPosition: 'center',
    icon: svgs.turf
  }, {
    title: 'Property Maintenance',
    image: 'assets/property maintainance.jpeg',
    objectPosition: 'center',
    icon: svgs.house
  }, {
    title: 'Pools',
    image: 'assets/pond.jpeg',
    objectPosition: 'center',
    icon: svgs.pool
  }, {
    title: 'Snow Removal',
    image: 'assets/snow removal.jpeg',
    objectPosition: 'center',
    icon: svgs.snow
  }, {
    title: 'Interlocking Stone',
    image: 'assets/interlockingstone.jpeg',
    objectPosition: 'center',
    icon: svgs.interlock
  }, {
    title: 'Sodding',
    image: 'assets/sodding.jpeg',
    objectPosition: 'center',
    icon: svgs.sodding
  }];
  return React.createElement("section", {
    id: "services",
    className: "section bg-light",
    ref: ref
  }, React.createElement("div", {
    className: "container text-center"
  }, React.createElement(motion.div, {
    className: "accent-text",
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    }
  }, "Our Expertise"), React.createElement(motion.h2, {
    className: "section-title text-center",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      delay: 0.2
    }
  }, "Our Services"), React.createElement("div", {
    className: "services-grid"
  }, services.map((s, i) => React.createElement(motion.div, {
    key: i,
    className: "service-card",
    variants: itemVariants,
    whileHover: {
      scale: 1.05,
      translateY: -5
    }
  }, React.createElement("div", {
    className: "service-card-top"
  }, React.createElement("div", {
    className: "service-icon-primary"
  }, s.icon), React.createElement("h3", {
    className: "service-title"
  }, s.title)), React.createElement("div", {
    className: "service-img-wrapper"
  }, React.createElement("img", {
    src: s.image,
    alt: s.title,
    className: "service-image",
    style: {
      objectPosition: s.objectPosition || 'center'
    }
  })))))));
}
function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  const partners = [{
    name: 'Rymar Grass',
    image: 'assets/raymar grass.png'
  }, {
    name: 'Best Way Stone',
    image: 'assets/bestwaystones.png'
  }, {
    name: 'Permacon',
    image: 'assets/permacon.png'
  }, {
    name: 'Oaks Landscape Products',
    image: 'assets/oaks.png'
  }, {
    name: 'Banas Stones',
    image: 'assets/bannas stone.png'
  }, {
    name: 'In-lite',
    image: 'assets/inlite.png'
  }, {
    name: 'Surefoot Hardscape',
    image: 'assets/surefoot.png'
  }, {
    name: 'Techo-Bloc',
    image: 'assets/technobloc.png'
  }, {
    name: 'Unilock',
    image: 'assets/unilock.png'
  }];
  return React.createElement("section", {
    id: "partners",
    className: "section",
    ref: ref
  }, React.createElement("div", {
    className: "container text-center"
  }, React.createElement(motion.div, {
    className: "accent-text text-center",
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    }
  }, "Preferred Products"), React.createElement(motion.h2, {
    className: "section-title text-center",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      delay: 0.2
    }
  }, "Our Trusted Partners"), React.createElement(motion.div, {
    className: "partners-grid",
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "show" : "hidden"
  }, partners.map((p, i) => React.createElement(motion.div, {
    key: i,
    className: "partner-card",
    variants: itemVariants,
    whileHover: {
      scale: 1.05,
      borderColor: "var(--primary-green)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
    }
  }, React.createElement("img", {
    src: p.image,
    alt: p.name,
    className: "partner-logo",
    style: {
      transform: `scale(${p.scale || 1.8})`
    },
    onError: e => {
      e.target.style.display = 'none';
      e.target.nextSibling.style.display = 'block';
    }
  }), React.createElement("span", {
    className: "partner-name",
    style: {
      display: 'none'
    }
  }, p.name))))));
}
function AchievementCard({
  type,
  year
}) {
  return React.createElement(motion.div, {
    variants: itemVariants,
    style: {
      background: 'white',
      borderRadius: '16px',
      width: '180px',
      height: '180px',
      padding: '1.5rem',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      textAlign: 'center',
      marginTop: '10px'
    }
  }, type === 'best' ? React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block',
      marginBottom: '5px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-16px',
      left: '-20px',
      fontSize: '1.5rem',
      transform: 'rotate(-25deg)',
      zIndex: 2
    }
  }, "👑"), React.createElement("div", {
    style: {
      background: '#3ba4eb',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '8px',
      fontSize: '0.8rem',
      fontWeight: 'bold'
    }
  }, "HomeStars"), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-4px',
      left: '15px',
      width: '10px',
      height: '10px',
      background: '#3ba4eb',
      transform: 'rotate(45deg)'
    }
  })), React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: '1.4rem',
      lineHeight: '1.1',
      color: '#111827',
      marginTop: '15px'
    }
  }, "BEST", React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: '#f59e0b',
      fontStyle: 'italic',
      fontWeight: 600,
      margin: '0 4px',
      verticalAlign: 'middle'
    }
  }, "of the"), React.createElement("br", null), "BEST"), React.createElement("div", {
    style: {
      fontSize: '0.65rem',
      color: '#6b7280',
      marginTop: '8px',
      fontWeight: 700,
      letterSpacing: '1px'
    }
  }, "WINNER ", year)) : React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      position: 'relative',
      width: '90px',
      margin: '0 auto',
      marginTop: '-10px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-12px',
      left: '-15px',
      fontSize: '1.5rem',
      transform: 'rotate(-25deg)',
      zIndex: 2
    }
  }, "👑"), React.createElement("div", {
    style: {
      background: '#3ba4eb',
      width: '90px',
      height: '105px',
      margin: '0 auto',
      clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '12px'
    }
  }, React.createElement("div", {
    style: {
      color: 'white',
      fontSize: '0.8rem',
      fontWeight: 'bold'
    }
  }, "HomeStars"), React.createElement("div", {
    style: {
      color: 'white',
      fontSize: '2rem',
      marginTop: '20px',
      fontWeight: 'bold'
    }
  }, "✓")), React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40px',
      left: '-8px',
      right: '-8px',
      background: '#6b7280',
      color: 'white',
      fontSize: '0.7rem',
      padding: '4px 0',
      fontWeight: 'bold',
      letterSpacing: '2px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
      clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)'
    }
  }, "VERIFIED")))));
}
function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return React.createElement("section", {
    id: "achievements",
    className: "section",
    style: {
      position: 'relative',
      background: 'linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(assets/summer.png) center/cover fixed',
      padding: '6rem 0'
    },
    ref: ref
  }, React.createElement("div", {
    className: "container text-center"
  }, React.createElement(motion.div, {
    className: "accent-text text-center",
    style: {
      color: '#fcf6a7'
    },
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    }
  }, "Recognized Excellence"), React.createElement(motion.h2, {
    className: "section-title text-center text-white",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      delay: 0.1
    }
  }, "Achievements"), React.createElement(motion.div, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "show" : "hidden"
  }, React.createElement(AchievementCard, {
    type: "best",
    year: "2024"
  }), React.createElement(AchievementCard, {
    type: "verified"
  }), React.createElement(AchievementCard, {
    type: "best",
    year: "2023"
  }), React.createElement(AchievementCard, {
    type: "best",
    year: "2022"
  }))));
}
function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  const reviews = [{
    name: "Kevin",
    text: "Kyle and team were absolutely great and would highly recommend. Pricing was fair/competitive and he even threw in some extras at no extra charge. I was really just expecting sod and quite happy with the additional mulching and planting to make everything come together nicely. The whole project completed in 2 days and the crew was very professional. Love the final product and great customer experience."
  }, {
    name: "Home Stars Customer",
    text: "Kyle was super easy to work with from the word GO. The project was well priced and his team is very careful. I am very happy with my landscaping work. He keeps his word and delivers what he promised."
  }, {
    name: "Home Stars Customer",
    text: "We had our 1960s houses front steps & porch re-done in granite, walkway pavers replaced & redesigned, & a new front garden retaining wall with new plants planted. Kyle met with us 3 times at Islington Nurseries to consult us on which products to use & helped us choose which plants to use. The quality of the work done & the service was excellent. Kyle & his team were great to work with. I will recommend them to anybody needing landscape work done."
  }];
  return React.createElement("section", {
    id: "reviews",
    className: "section bg-navy text-white",
    ref: ref,
    style: {
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "text-center"
  }, React.createElement(motion.div, {
    className: "accent-text text-center",
    style: {
      color: '#fcf6a7'
    },
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    }
  }, "Client Stories"), React.createElement(motion.h2, {
    className: "section-title text-center text-white",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      delay: 0.1
    }
  }, "What They Say")), React.createElement(motion.div, {
    className: "reviews-grid",
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "show" : "hidden"
  }, reviews.map((r, i) => React.createElement(motion.div, {
    key: i,
    className: "review-card",
    variants: itemVariants
  }, React.createElement("div", {
    className: "review-quote-icon"
  }, "“"), React.createElement("div", {
    className: "review-stars"
  }, "★★★★★"), React.createElement("p", {
    className: "review-text"
  }, "\"", r.text, "\""), React.createElement("div", {
    className: "review-footer"
  }, React.createElement("div", {
    className: "review-author-info"
  }, React.createElement("h4", null, r.name), React.createElement("span", {
    className: "review-source"
  }, "HOME STARS REVIEWS")), React.createElement("div", {
    className: "review-verified"
  }, "VERIFIED")))))));
}
function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return React.createElement("section", {
    id: "contact",
    className: "section bg-navy text-white",
    ref: ref,
    style: {
      paddingBottom: '0'
    }
  }, React.createElement("div", {
    className: "container text-center"
  }, React.createElement(motion.div, {
    className: "accent-text text-center",
    style: {
      color: '#fcf6a7'
    },
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    }
  }, "Reach Out Today"), React.createElement(motion.h2, {
    className: "section-title text-center text-white",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      delay: 0.1
    }
  }, "Get a Quote"), React.createElement(motion.div, {
    className: "contact-grid",
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "show" : "hidden"
  }, React.createElement(motion.a, {
    href: "mailto:kyle_cuttingedge@hotmail.com",
    className: "contact-link",
    variants: itemVariants,
    whileHover: {
      scale: 1.05,
      backgroundColor: "rgba(255,255,255,0.1)",
      borderColor: "#d4af37"
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 800,
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '8px'
    }
  }, "Email Us"), React.createElement("span", null, "kyle_cuttingedge@hotmail.com")), React.createElement(motion.a, {
    href: "tel:4168057642",
    className: "contact-link",
    variants: itemVariants,
    whileHover: {
      scale: 1.05,
      backgroundColor: "rgba(255,255,255,0.1)",
      borderColor: "#d4af37"
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 800,
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '8px'
    }
  }, "Call Us"), React.createElement("span", null, "416 805 7642")), React.createElement(motion.a, {
    href: "https://www.google.com/maps/search/?api=1&query=66+Genthorn+Ave,+Etobicoke,+ON+M9W+2S9",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-link",
    variants: itemVariants,
    whileHover: {
      scale: 1.05,
      backgroundColor: "rgba(255,255,255,0.1)",
      borderColor: "#d4af37"
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 800,
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '8px'
    }
  }, "Visit Us Here"), React.createElement("span", null, "66 Genthorn Ave, Etobicoke, ON M9W 2S9")))));
}
function GalleryItemComponent({
  item
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20%"
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return React.createElement(motion.div, {
    ref: ref,
    className: `gallery-item ${isMobile && isInView ? 'mobile-in-view' : ''}`,
    variants: itemVariants,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      once: true,
      margin: "50px"
    }
  }, React.createElement("img", {
    src: item.src,
    alt: item.desc || 'Landscaping project by Cutting Edge Landscaping',
    loading: "lazy",
    style: {
      '--base-scale': item.scale || 1
    },
    onError: e => {
      const card = e.target.closest('.gallery-item');
      if (card) card.style.display = 'none';
    }
  }), React.createElement("div", {
    className: "gallery-overlay"
  }, React.createElement("p", null, item.desc)));
}
function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const galleryItems = [{
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.16 AM.jpeg',
    desc: 'Custom driveway and walkway interlocking design for a residential client.',
    scale: 1.35
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.17 AM (1).jpeg',
    desc: 'Custom stone fire pit with a gravel patio and cedar privacy hedging.'
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.17 AM.jpeg',
    desc: 'Tumbled-paver walkway with a contrasting border beside a natural stone wall.'
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.18 AM (1).jpeg',
    desc: 'Raised large-format paver patio with a stepping-stone approach set in river rock.',
    scale: 1.35
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.19 AM (1).jpeg',
    desc: 'Large-format stone walkway with a custom wood privacy gate along the side of the home.'
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.20 AM (2).jpeg',
    desc: 'Custom cedar deck with wide steps, metal railing and a horizontal-slat privacy screen.'
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.21 AM (1).jpeg',
    desc: 'Herringbone paver entrance courtyard with a contrasting border and formal planters.',
    scale: 1.35
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.21 AM (2).jpeg',
    desc: 'Covered composite deck with glass railings and a warm wood-clad ceiling.'
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.21 AM (3).jpeg',
    desc: 'Modern covered deck with a black-framed pavilion and glass railing.'
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.21 AM.jpeg',
    desc: 'Large-format paver patio with wood steps and a glass railing beside a modern home.'
  }, {
    src: 'assets/WhatsApp Image 2026-06-30 at 8.36.22 AM.jpeg',
    desc: 'Modern linear fire table with built-in cedar bench seating on a slab patio.'
  }, {
    src: 'assets/artificalterf.jpeg',
    desc: 'Pet-friendly artificial turf with natural stone stepping stones — lush, low-maintenance and durable all year round.'
  }, {
    src: 'assets/deckfrances.jpeg',
    desc: 'Durable and aesthetic deck construction tailored to client specifications.'
  }, {
    src: 'assets/flagstone natural stone.jpeg',
    desc: 'Intricate flagstone natural stone steps and walkway integration.'
  }, {
    src: 'assets/hottubs.jpeg',
    desc: 'Hot tub surround landscaping for an ultimate backyard oasis.'
  }, {
    src: 'assets/interlockingstone.jpeg',
    desc: 'Precision interlocking-stone patio built to withstand Canadian winters.',
    scale: 1.35
  }, {
    src: 'assets/pond.jpeg',
    desc: 'Custom pool installation with seamless hardscape borders.'
  }, {
    src: 'assets/property maintainance.jpeg',
    desc: 'Professional garden bed planting and ongoing property maintenance.'
  }, {
    src: 'assets/retaining walls.jpeg',
    desc: 'Structurally sound and visually striking retaining wall tiers.'
  }, {
    src: 'assets/snow removal.jpeg',
    desc: 'Rapid-response residential snow plowing and winter property management.'
  }, {
    src: 'assets/sodding.jpeg',
    desc: 'Complete lawn overhaul with premium grade sod installation.'
  }];
  return React.createElement("section", {
    id: "gallery",
    className: "section",
    ref: ref
  }, React.createElement("div", {
    className: "container text-center"
  }, React.createElement(motion.div, {
    className: "accent-text",
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    }
  }, "Our Gallery"), React.createElement(motion.h2, {
    className: "section-title text-center",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      delay: 0.2
    }
  }, "Recent Projects"), React.createElement("div", {
    className: "gallery-grid"
  }, galleryItems.map((item, i) => React.createElement(GalleryItemComponent, {
    key: i,
    item: item
  })))));
}
function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const steps = [{
    num: '01',
    sub: 'GET IN TOUCH',
    title: 'Initial Consultation'
  }, {
    num: '02',
    sub: 'WE SERVE',
    title: 'Site Visit & Assessment'
  }, {
    num: '03',
    sub: 'THE BUILD',
    title: 'Professional Execution'
  }, {
    num: '04',
    sub: 'FINAL STEP',
    title: 'Final Walkthrough'
  }];
  return React.createElement("section", {
    id: "process",
    className: "section bg-navy text-white",
    ref: ref
  }, React.createElement("div", {
    className: "container text-center"
  }, React.createElement(motion.div, {
    className: "accent-text text-center",
    style: {
      color: '#fcf6a7'
    },
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    }
  }, "How We Work"), React.createElement(motion.h2, {
    className: "section-title text-center text-white",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      delay: 0.1
    }
  }, "Our Process"), React.createElement("div", {
    className: "process-timeline"
  }, React.createElement("div", {
    className: "process-line"
  }), React.createElement("div", {
    className: "process-steps"
  }, steps.map((s, i) => React.createElement(motion.div, {
    key: i,
    className: `process-card ${i % 2 === 0 ? 'down' : 'up'}`,
    variants: itemVariants,
    initial: "hidden",
    animate: isInView ? "show" : "hidden"
  }, React.createElement("div", {
    className: "step-num"
  }, s.num), React.createElement("div", {
    className: "step-content"
  }, React.createElement("div", {
    className: "step-sub"
  }, s.sub), React.createElement("div", {
    className: "step-title"
  }, s.title))))))));
}
function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return React.createElement("section", {
    id: "about",
    className: "section bg-light",
    ref: ref,
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 0',
      backgroundColor: '#ffffff'
    }
  }, React.createElement("div", {
    className: "about-watermark"
  }, "ABOUT US"), React.createElement("div", {
    className: "container about-container"
  }, React.createElement("div", {
    className: "about-text-column"
  }, React.createElement(motion.div, {
    className: "accent-text",
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      type: "spring"
    },
    style: {
      marginBottom: '1rem',
      textAlign: 'left'
    }
  }, "Who We Are"), React.createElement(motion.h2, {
    className: "about-heading",
    initial: {
      opacity: 0,
      y: 30
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      duration: 0.8
    }
  }, "Creating stunning landscapes since ", React.createElement("span", {
    style: {
      color: 'var(--primary-green)'
    }
  }, "2004.")), React.createElement(motion.div, {
    className: "about-text-block",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }, React.createElement("p", null, "Cutting Edge Landscaping & Snowplowing has been creating stunning landscapes surrounding Toronto, Ontario, since 2004. We combine our talent and expertise with our clients' visions and concepts — creating beautiful outdoor living areas for many years."), React.createElement("p", null, "We are involved in numerous skillful associations to be acknowledged as an industry leader. We are proud of our dedication to controlling budgetary constraints and timelines and the transparency we communicate with our clients and consultants."), React.createElement("p", null, "Interlocking stone and flagstone natural stone are among our specializations — excellent choices for pathways, driveways, and patios, adding elegance and durability to your landscape.")), React.createElement(motion.div, {
    className: "about-highlight-box",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      duration: 0.8,
      delay: 0.4
    }
  }, React.createElement("p", null, "A constant focus on detail, dependable service, and a personalized, step-by-step process for every client has earned the reputation of Cutting Edge Landscaping. Our determination to benefit our clients has resulted in an impressive referral rate among the top in the industry."), React.createElement("p", {
    className: "highlight-strong"
  }, "By focusing on teamwork and family values, Cutting Edge Landscaping & Snowplowing is dedicated to helping our clients achieve their visions. We are the industry leader with the highest quality of artistry and commitment to our work."), React.createElement("div", {
    className: "about-tags"
  }, React.createElement("span", {
    className: "about-tag"
  }, React.createElement("span", {
    className: "tag-dot"
  }), " COMMERCIAL"), React.createElement("span", {
    className: "about-tag"
  }, React.createElement("span", {
    className: "tag-dot"
  }), " RESIDENTIAL"), React.createElement("span", {
    className: "about-tag"
  }, React.createElement("span", {
    className: "tag-dot"
  }), " INDUSTRIAL")))), React.createElement("div", {
    className: "about-image-column"
  }, React.createElement(motion.div, {
    className: "about-image-wrapper primary-wrapper",
    initial: {
      opacity: 0,
      scale: 0.9
    },
    animate: isInView ? {
      opacity: 1,
      scale: 1
    } : {},
    transition: {
      duration: 0.8,
      delay: 0.3
    }
  }, React.createElement("img", {
    src: "assets/deckfrances.jpeg",
    alt: "Beautiful landscaping project",
    className: "about-img main-img"
  }), React.createElement("div", {
    className: "about-badge badge-years"
  }, React.createElement("div", {
    className: "badge-num"
  }, "20+"), React.createElement("div", {
    className: "badge-text"
  }, "YEARS OF", React.createElement("br", null), "EXCELLENCE"))), React.createElement(motion.div, {
    className: "about-image-wrapper secondary-wrapper",
    initial: {
      opacity: 0,
      x: 50
    },
    animate: isInView ? {
      opacity: 1,
      x: 0
    } : {},
    transition: {
      duration: 0.8,
      delay: 0.5
    }
  }, React.createElement("img", {
    src: "assets/flagstone natural stone.jpeg",
    alt: "Hardscaping project",
    className: "about-img secondary-img"
  }), React.createElement("div", {
    className: "about-badge badge-specialty"
  }, React.createElement("div", {
    className: "badge-specialty-sub"
  }, "SPECIALTY"), React.createElement("div", {
    className: "badge-specialty-title"
  }, "Hardscaping"))))));
}
function App() {
  return React.createElement("div", null, React.createElement(Header, null), React.createElement(Hero, null), React.createElement(TrustBanner, null), React.createElement(TrustVideo, null), React.createElement(Services, null), React.createElement(Process, null), React.createElement(Gallery, null), React.createElement(Achievements, null), React.createElement(Partners, null), React.createElement(Reviews, null), React.createElement(AboutUs, null), React.createElement(Contact, null), React.createElement("footer", {
    className: "bg-navy text-white",
    style: {
      padding: '3rem 0',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    style: {
      color: 'white',
      fontFamily: 'Montserrat',
      fontWeight: 900
    }
  }, "CUTTING EDGE"), React.createElement("p", null, "Landscaping & Snowplowing"), React.createElement("p", {
    style: {
      marginTop: '2rem',
      color: '#a0aab5'
    }
  }, "© 2004 - 2026 Cutting Edge Landscaping & Snowplowing"))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));

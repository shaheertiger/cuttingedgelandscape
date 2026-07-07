#!/usr/bin/env node
/*
 * Generates SEO landing pages for each core service into /services/.
 * Each page is self-contained static HTML (no React, no CDN) so it renders
 * instantly and is fully crawlable. Also regenerates sitemap.xml (combined
 * with the area pages from build-areas.js).
 *
 * Run:  node scripts/build-services.js   (or npm run build:services)
 */
const fs = require('fs');
const path = require('path');
const { CITIES } = require('./build-areas.js');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'services');
const ORIGIN = 'https://cutting-edge-landscaping.ca';
const PHONE_DISPLAY = '416-805-7642';
const PHONE_TEL = '4168057642';
const EMAIL = 'kyle_cuttingedge@hotmail.com';

const REVIEWS = [
  ['Kevin', 'Kyle and team were absolutely great and would highly recommend. Pricing was fair and competitive, the whole project finished in 2 days and the crew was very professional.'],
  ['HomeStars Customer', 'Kyle was super easy to work with from the word GO. The project was well priced and his team is very careful. He keeps his word and delivers what he promised.'],
];

const SERVICES = [
  {
    slug: 'interlocking-etobicoke-toronto',
    name: 'Interlocking',
    title: 'Interlocking Stone & Driveway Contractors in Etobicoke and Toronto',
    serviceType: 'Interlocking stone and driveway installation',
    keywords: ['interlock driveway', 'interlocking toronto', 'interlocking etobicoke', 'interlocking driveway toronto', 'interlock patio', 'interlocking stone toronto', 'interlocking contractors toronto'],
    desc: 'Interlocking stone driveway, patio and walkway installation in Etobicoke, Toronto and the GTA. Durable pavers built for freeze-thaw winters. Free quote: ' + PHONE_DISPLAY + '.',
    blurb: 'Cutting Edge builds interlocking driveways, patios and walkways across Etobicoke and Toronto using premium pavers designed to hold up to Canadian freeze-thaw winters — properly excavated, graded and compacted for a base that lasts.',
    features: [
      ['Interlocking Driveways', 'Precision-cut paver driveways with proper base depth and drainage so they stay flat through every winter.'],
      ['Interlocking Patios', 'Custom patio layouts, borders and accent bands in a wide range of paver styles and colours.'],
      ['Walkways & Steps', 'Interlocking walkways and steps that tie your driveway, entrance and backyard together.'],
      ['Pool Decks & Surrounds', 'Slip-resistant interlocking pool decks and surrounds finished with clean, coordinated edging.'],
      ['Repairs & Re-levelling', 'Sunken, shifted or cracked interlocking releveled, re-sanded or rebuilt to match your existing stone.'],
      ['Permeable & Eco Pavers', 'Permeable paver systems that manage stormwater runoff and meet local drainage requirements.'],
    ],
    faqs: [
      ['How much does interlocking cost per square foot in Toronto?', 'Pricing depends on paver style, base depth, access and site prep, but most Etobicoke and Toronto interlocking projects fall in the mid-to-high range per square foot. Contact us for a free, itemized quote.'],
      ['Do you offer polymeric sand joints?', 'Yes, we finish every interlocking project with polymeric sand to lock pavers in place, suppress weeds and resist ants.'],
      ['How long does an interlocking driveway last?', 'A properly built interlocking driveway with a compacted gravel base and edge restraints typically lasts 20-30+ years with basic maintenance.'],
      ['Do I need a permit for a new driveway in Etobicoke or Toronto?', 'Driveway widening or new curb cuts can require a City of Toronto permit. We handle the assessment and can advise on what applies to your property.'],
      ['Can you match existing interlocking for a repair?', 'In most cases yes — we carry relationships with major suppliers like Unilock, Techo-Bloc and Permacon and can usually source a close or exact match.'],
    ],
  },
  {
    slug: 'snow-removal-etobicoke-toronto',
    name: 'Snow Removal',
    title: 'Snow Removal & Snow Plowing Services in Etobicoke and Toronto',
    serviceType: 'Residential and commercial snow removal and snow plowing',
    keywords: ['snow removal toronto', 'snow removal etobicoke', 'residential snow removal toronto', 'snow plowing toronto', 'snow removal service toronto', 'driveway snow removal toronto'],
    desc: 'Residential and commercial snow removal, plowing and salting in Etobicoke, Toronto and the GTA. 24/7 storm response and seasonal contracts. Free quote: ' + PHONE_DISPLAY + '.',
    blurb: 'From the first flake to the last storm of the season, Cutting Edge keeps Etobicoke and Toronto driveways, walkways and parking lots clear and safe with fast, reliable snow plowing, shovelling and salting.',
    features: [
      ['Residential Driveway Plowing', 'Scheduled plowing for single driveways and townhome complexes, all winter long.'],
      ['Commercial Snow & Ice Management', 'Parking lots, loading docks and commercial walkways cleared and salted on a reliable schedule.'],
      ['Sidewalk & Walkway Clearing', 'Hand shovelling and snow-blowing for entrances, steps and walkways plows can’t reach.'],
      ['Salting & De-icing', 'Pre-storm and post-storm salting to keep surfaces safe and compliant with liability standards.'],
      ['24/7 Storm Response', 'Crews dispatched around the clock during major snow events, not just business hours.'],
      ['Seasonal Contracts', 'Flat-rate seasonal snow contracts so there are no surprise bills after a big storm.'],
    ],
    faqs: [
      ['How much does snow removal cost per season in Toronto?', 'Seasonal contract pricing depends on driveway size, number of visits and property type. Get a free quote and we’ll give you a flat seasonal rate.'],
      ['Do you offer on-call or per-visit snow removal?', 'Yes, alongside seasonal contracts we offer on-call and per-visit service for residential and commercial properties.'],
      ['What snowfall trigger do you plow at?', 'Standard residential routes trigger at 2-5 cm depending on your contract; commercial properties are typically serviced at lower trigger depths to meet insurance and liability standards.'],
      ['Do you handle commercial parking lots?', 'Yes, we service commercial lots, plazas and multi-unit properties across Etobicoke, Toronto and the GTA with plowing, salting and snow hauling as needed.'],
      ['Are you insured for snow and ice liability?', 'Yes, Cutting Edge is fully insured for residential and commercial snow and ice management.'],
    ],
  },
  {
    slug: 'sod-installation-etobicoke-toronto',
    name: 'Sod Installation',
    title: 'Sod Installation & Sodding Services in Etobicoke and Toronto',
    serviceType: 'Sod installation and lawn sodding',
    keywords: ['sod installation toronto', 'sodding toronto', 'sod installation etobicoke', 'lawn sodding toronto', 'new sod installation'],
    desc: 'Sod installation and sodding for new lawns and lawn renovations in Etobicoke, Toronto and the GTA. Instant, healthy green lawns. Free quote: ' + PHONE_DISPLAY + '.',
    blurb: 'Cutting Edge installs premium-grade sod for new-build lawns, full lawn renovations and patchy-lawn repairs across Etobicoke and Toronto, with proper grading and soil prep for a lawn that establishes fast and stays healthy.',
    features: [
      ['New Lawn Sod Installation', 'Full sod installation for new-build homes and bare-lot yards, front and back.'],
      ['Lawn Tear-Out & Regrading', 'Old, patchy or weed-choked lawns stripped and regraded before new sod goes down.'],
      ['Soil Prep & Topsoil', 'Quality triple-mix topsoil and proper grading so sod roots quickly and drains well.'],
      ['Sod for New Builds', 'Complete yard finishing for newly built homes, coordinated with grading and drainage.'],
      ['Patchy Lawn Repair', 'Targeted sod patching for dead or thin sections without redoing the whole yard.'],
      ['Post-Installation Watering Guide', 'A clear watering schedule and care guide so your new sod takes root successfully.'],
    ],
    faqs: [
      ['What’s the best time of year to lay sod in Toronto?', 'Spring and early fall are ideal for sod installation in the GTA, though sod can be laid through summer with a consistent watering schedule.'],
      ['How much does sod installation cost per square foot?', 'Cost depends on square footage, grading needs and site access. Contact us for a free, itemized quote for your property.'],
      ['How soon can I walk on new sod?', 'Avoid heavy foot traffic for the first 2-3 weeks while roots establish; light use is generally fine after about a week.'],
      ['Do you remove the old lawn first?', 'Yes, we strip and regrade the existing lawn before laying new sod so it has a clean, level base to root into.'],
      ['How much watering does new sod need?', 'New sod needs daily watering for the first 1-2 weeks, tapering off as roots establish. We provide a written watering schedule with every installation.'],
    ],
  },
  {
    slug: 'landscaping-etobicoke-toronto',
    name: 'Landscaping',
    title: 'Landscaping Company in Etobicoke Serving Toronto and the GTA',
    serviceType: 'Residential landscaping and hardscaping',
    keywords: ['landscaping toronto', 'landscaping etobicoke', 'landscaping company toronto', 'landscaping company etobicoke', 'landscape contractors toronto', 'backyard landscaping toronto', 'front yard landscaping toronto'],
    desc: 'Full-service landscaping company based in Etobicoke, serving Toronto and the GTA. Backyard makeovers, front yard curb appeal, hardscaping and planting. Free quote: ' + PHONE_DISPLAY + '.',
    blurb: 'Cutting Edge is a full-service landscaping company based in Etobicoke, serving Toronto and the wider GTA since 2004 — from front-yard curb-appeal refreshes to complete backyard transformations, designed and built by one crew start to finish.',
    features: [
      ['Full Backyard Transformations', 'Complete backyard redesigns combining hardscaping, planting, lighting and grading into one build.'],
      ['Front Yard Curb Appeal', 'Walkways, garden beds and stonework that make a strong first impression.'],
      ['Garden Beds & Planting', 'Planting design and installation suited to Southern Ontario soil and climate.'],
      ['Interlocking & Hardscaping', 'Driveways, patios, walkways and retaining walls integrated into the overall landscape design.'],
      ['Retaining Walls & Grading', 'Grade correction and retaining walls that turn awkward slopes into usable yard space.'],
      ['Design/Build Project Management', 'One team handling design, permits where needed, and construction, start to finish.'],
    ],
    faqs: [
      ['How much does a full landscaping project cost?', 'Project cost depends heavily on scope — a front yard refresh and a full backyard rebuild are very different budgets. We provide a free, itemized quote after a site visit.'],
      ['Do you offer design services?', 'Yes, we work with you on layout and material selection as part of the design/build process, so the design matches what we can actually build for your budget.'],
      ['How long does a backyard makeover take?', 'Most backyard projects take anywhere from a few days to a few weeks depending on scope, weather and material lead times.'],
      ['Do you handle permits and drainage?', 'Yes, we assess grading and drainage as part of every project and handle permit requirements where they apply.'],
      ['What areas of the GTA do you serve?', 'We’re based in Etobicoke and serve Toronto and every community within about 30 km, including Mississauga, Brampton, Vaughan, Oakville and more — see our full list of service areas below.'],
    ],
  },
  {
    slug: 'retaining-walls-etobicoke-toronto',
    name: 'Retaining Walls',
    title: 'Retaining Wall Contractors in Etobicoke and Toronto',
    serviceType: 'Retaining wall design and construction',
    keywords: ['retaining wall toronto', 'retaining wall contractor', 'retaining wall installation toronto', 'garden retaining wall toronto', 'stone retaining wall toronto'],
    desc: 'Retaining wall design and construction in Etobicoke, Toronto and the GTA. Engineered block and natural-stone walls that manage grade and create usable yard space. Free quote: ' + PHONE_DISPLAY + '.',
    blurb: 'Cutting Edge designs and builds retaining walls across Etobicoke and Toronto that manage grade changes, stop erosion and turn sloped, unusable yards into tiered, functional outdoor space — built to last through freeze-thaw cycles.',
    features: [
      ['Interlocking Block Retaining Walls', 'Segmental block retaining walls with proper base, backfill and drainage for long-term stability.'],
      ['Natural Stone Retaining Walls', 'Armour stone and natural-stone walls for a heavier, more organic look.'],
      ['Tiered & Terraced Walls', 'Multi-tier wall systems that turn steep slopes into usable, plantable terraces.'],
      ['Grading & Drainage Correction', 'Grading and weeping-tile drainage integrated into every wall to prevent frost heave and water damage.'],
      ['Engineered Walls for Grade Changes', 'Engineered wall design for taller walls and larger grade changes where required.'],
      ['Garden & Planter Walls', 'Lower garden and planter walls that define beds and add structure to a landscape.'],
    ],
    faqs: [
      ['How much does a retaining wall cost in Toronto?', 'Cost depends on wall height, length, material and site access. Contact us for a free, itemized quote for your property.'],
      ['Do I need an engineer or permit for a retaining wall?', 'In Ontario, walls over roughly 1 metre (about 3 feet) in height typically require an engineered design and may require a permit. We advise on what applies to your specific wall.'],
      ['What’s the best material for a retaining wall?', 'Segmental interlocking block is durable and cost-effective for most residential walls; natural armour stone suits a heavier, more rustic look. We’ll recommend the right fit for your yard and budget.'],
      ['How tall can a retaining wall be without a permit in Ontario?', 'Rules vary by municipality, but walls under about 1 metre generally don’t require an engineer or permit. Taller walls almost always do — we’ll confirm the requirement for your address.'],
      ['How long do retaining walls last?', 'A properly engineered retaining wall with correct drainage typically lasts 30+ years with minimal maintenance.'],
    ],
  },
];

function esc(s) { return String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;'); }

function featuresHtml(s) {
  return s.features.map(([t, d]) =>
    `        <article class="lp-card">
          <h3>${esc(t)}</h3>
          <p>${esc(d)}</p>
        </article>`).join('\n');
}

function faqHtml(s) {
  return s.faqs.map(([q, a]) =>
    `        <div class="lp-faq"><h3>${esc(q)}</h3><p>${esc(a)}</p></div>`).join('\n');
}

function areasHtml() {
  return CITIES.map(c => `<a href="/areas/${c.slug}">${esc(c.name)}</a>`).join('\n          ');
}

function otherServicesHtml(current) {
  return SERVICES.filter(s => s.slug !== current.slug).map(s =>
    `<a href="/services/${s.slug}">${esc(s.name)}</a>`).join('\n          ');
}

function jsonLd(s) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: ORIGIN + '/services/' },
          { '@type': 'ListItem', position: 3, name: s.name, item: `${ORIGIN}/services/${s.slug}` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${ORIGIN}/services/${s.slug}#service`,
        name: s.title,
        serviceType: s.serviceType,
        description: s.desc,
        areaServed: [
          { '@type': 'City', name: 'Etobicoke' },
          { '@type': 'City', name: 'Toronto' },
          ...CITIES.filter(c => c.slug !== 'etobicoke' && c.slug !== 'toronto').map(c => ({ '@type': 'City', name: c.name })),
        ],
        provider: {
          '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
          '@id': ORIGIN + '/#business',
          name: 'Cutting Edge Landscaping & Snowplowing',
          telephone: '+1-416-805-7642',
          email: EMAIL,
          url: ORIGIN + '/',
          image: ORIGIN + '/assets/summer.png',
          priceRange: '$$',
          address: { '@type': 'PostalAddress', streetAddress: '66 Genthorn Ave', addressLocality: 'Etobicoke', addressRegion: 'ON', postalCode: 'M9W 2S9', addressCountry: 'CA' },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', ratingCount: '3', reviewCount: '3' },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faqs.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };
  return JSON.stringify(data, null, 2);
}

function page(s) {
  const title = `${s.title} | Cutting Edge`;
  const url = `${ORIGIN}/services/${s.slug}`;
  const keywordsAttr = s.keywords.join(', ') + ', Cutting Edge Landscaping';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${esc(s.desc)}" />
  <meta name="keywords" content="${esc(keywordsAttr)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <meta name="theme-color" content="#1f4228" />
  <meta name="geo.region" content="CA-ON" />
  <meta name="geo.placename" content="Etobicoke, Ontario" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Cutting Edge Landscaping & Snowplowing" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${esc(s.desc)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/assets/summer.png" />
  <meta property="og:locale" content="en_CA" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${esc(s.desc)}" />
  <meta name="twitter:image" content="${ORIGIN}/assets/summer.png" />
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Yellowtail&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  <script type="application/ld+json">
${jsonLd(s)}
  </script>
  <style>
    :root{--green:#1f4228;--accent:#3a8a3f;--navy:#0e2030;--gold:#d4af37;--dark:#333;--light:#666;--bg:#f5f7fa;--white:#fff}
    *{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{font-family:'Montserrat',sans-serif;color:var(--dark);line-height:1.6;background:var(--white)}
    a{color:inherit}
    .lp-wrap{max-width:1160px;margin:0 auto;padding:0 20px}
    .lp-topbar{background:var(--navy);color:#cdd6e0;font-size:.85rem}
    .lp-topbar .lp-wrap{display:flex;flex-wrap:wrap;gap:6px 24px;justify-content:center;padding:8px 20px}
    .lp-topbar a{color:#cdd6e0;text-decoration:none}
    .lp-header{position:sticky;top:0;z-index:50;background:var(--white);box-shadow:0 2px 12px rgba(0,0,0,.08)}
    .lp-header .lp-wrap{display:flex;align-items:center;justify-content:space-between;padding:14px 20px}
    .lp-brand{font-weight:900;color:var(--navy);text-decoration:none;font-size:1.05rem;letter-spacing:.5px}
    .lp-brand span{color:var(--green)}
    .lp-callbtn{background:var(--green);color:#fff;text-decoration:none;padding:10px 18px;border-radius:50px;font-weight:800;font-size:.9rem}
    .lp-hero{position:relative;color:#fff;text-align:center;padding:96px 20px;background:linear-gradient(rgba(14,32,48,.72),rgba(14,32,48,.78)),url('/assets/summer.png') center/cover}
    .lp-hero .lp-eyebrow{font-family:'Yellowtail',cursive;color:var(--gold);font-size:2rem;transform:rotate(-3deg);display:inline-block;margin-bottom:.25rem}
    .lp-hero h1{font-size:clamp(1.6rem,4.4vw,2.9rem);font-weight:900;text-transform:uppercase;line-height:1.15;margin-bottom:1rem}
    .lp-hero p{max-width:720px;margin:0 auto 2rem;font-size:clamp(1rem,2.5vw,1.15rem)}
    .lp-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
    .lp-btn{padding:14px 28px;border-radius:50px;font-weight:800;text-decoration:none;font-size:.95rem}
    .lp-btn.primary{background:var(--gold);color:var(--navy)}
    .lp-btn.ghost{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.4)}
    .lp-section{padding:64px 0}
    .lp-section.alt{background:var(--bg)}
    .lp-section h2{font-size:clamp(1.5rem,4vw,2.2rem);color:var(--navy);font-weight:900;margin-bottom:1rem;text-align:center}
    .lp-lead{max-width:820px;margin:0 auto 1.25rem;text-align:center;color:var(--light);font-size:1.06rem}
    .lp-trust{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:1.5rem}
    .lp-badge{background:var(--white);border:1px solid #e5e9ef;border-radius:12px;padding:12px 18px;font-weight:800;color:var(--navy);font-size:.9rem}
    .lp-badge b{color:var(--green)}
    .lp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px;margin-top:2rem}
    .lp-card{background:var(--white);border-radius:14px;padding:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,.06);border-top:4px solid var(--green)}
    .lp-card h3{color:var(--navy);font-size:1.1rem;margin-bottom:.5rem}
    .lp-card p{color:var(--light);font-size:.94rem}
    .lp-quote{background:var(--navy);color:#fff}
    .lp-quote h2{color:#fff}
    .lp-form{max-width:560px;margin:1.5rem auto 0;display:grid;gap:12px}
    .lp-form input,.lp-form select,.lp-form textarea{width:100%;padding:13px 15px;border:none;border-radius:8px;font-family:inherit;font-size:1rem}
    .lp-form button{background:var(--gold);color:var(--navy);border:none;padding:15px;border-radius:8px;font-weight:900;font-size:1rem;cursor:pointer;text-transform:uppercase;letter-spacing:.5px}
    .lp-reviews{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-top:2rem}
    .lp-review{background:var(--white);border-radius:14px;padding:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,.06)}
    .lp-stars{color:var(--gold);letter-spacing:2px;margin-bottom:.5rem}
    .lp-review p{color:var(--dark);font-style:italic;margin-bottom:.75rem}
    .lp-review .who{font-weight:800;color:var(--navy);font-size:.9rem}
    .lp-faqs{max-width:820px;margin:2rem auto 0;display:grid;gap:1.1rem}
    .lp-faq{background:var(--white);border-radius:14px;padding:1.25rem 1.5rem;box-shadow:0 10px 30px rgba(0,0,0,.06)}
    .lp-faq h3{color:var(--navy);font-size:1.02rem;margin-bottom:.4rem}
    .lp-faq p{color:var(--light);font-size:.95rem}
    .lp-nearby{display:flex;flex-wrap:wrap;gap:10px 18px;justify-content:center;margin-top:1.5rem}
    .lp-nearby a{color:var(--green);font-weight:700;text-decoration:none;font-size:.95rem}
    .lp-nearby a:hover{text-decoration:underline}
    .lp-footer{background:var(--navy);color:#a0aab5;text-align:center;padding:2.5rem 20px;font-size:.9rem}
    .lp-footer a{color:var(--gold);text-decoration:none}
    .lp-footer .lp-fbrand{color:#fff;font-weight:900;font-size:1.3rem;margin-bottom:.35rem}
  </style>
</head>
<body>
  <div class="lp-topbar"><div class="lp-wrap">
    <a href="tel:${PHONE_TEL}">Call: ${PHONE_DISPLAY}</a>
    <a href="mailto:${EMAIL}">Email: ${EMAIL}</a>
  </div></div>
  <header class="lp-header"><div class="lp-wrap">
    <a class="lp-brand" href="/">CUTTING EDGE <span>Landscaping &amp; Snowplowing</span></a>
    <a class="lp-callbtn" href="tel:${PHONE_TEL}">Call ${PHONE_DISPLAY}</a>
  </div></header>

  <section class="lp-hero">
    <span class="lp-eyebrow">${esc(s.name)}</span>
    <h1>${esc(s.title)}</h1>
    <p>${esc(s.blurb)}</p>
    <div class="lp-btns">
      <a class="lp-btn primary" href="#quote">Get a Free Quote</a>
      <a class="lp-btn ghost" href="tel:${PHONE_TEL}">Call ${PHONE_DISPLAY}</a>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-wrap">
      <h2>Trusted ${esc(s.name)} Contractors Since 2004</h2>
      <p class="lp-lead">Cutting Edge Landscaping &amp; Snowplowing is a fully-insured, award-winning contractor based in Etobicoke, serving Toronto and the wider Greater Toronto Area.</p>
      <div class="lp-trust">
        <div class="lp-badge"><b>5.0</b> Google Rating</div>
        <div class="lp-badge">HomeStars <b>Best of the Best</b></div>
        <div class="lp-badge"><b>20+</b> Years Experience</div>
        <div class="lp-badge">Fully <b>Insured</b></div>
      </div>
    </div>
  </section>

  <section class="lp-section alt">
    <div class="lp-wrap">
      <h2>${esc(s.name)} Services in Etobicoke &amp; Toronto</h2>
      <p class="lp-lead">Here&rsquo;s what&rsquo;s included in our ${esc(s.name.toLowerCase())} work.</p>
      <div class="lp-grid">
${featuresHtml(s)}
      </div>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-wrap">
      <h2>What Clients Say</h2>
      <div class="lp-reviews">
${REVIEWS.map(([who, txt]) => `        <div class="lp-review"><div class="lp-stars">★★★★★</div><p>&ldquo;${esc(txt)}&rdquo;</p><div class="who">${who} &middot; HomeStars Review</div></div>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="lp-section alt">
    <div class="lp-wrap">
      <h2>${esc(s.name)} FAQs</h2>
      <div class="lp-faqs">
${faqHtml(s)}
      </div>
    </div>
  </section>

  <section class="lp-section lp-quote" id="quote">
    <div class="lp-wrap">
      <h2>Get Your Free ${esc(s.name)} Quote</h2>
      <p class="lp-lead" style="color:#cdd6e0">Tell us about your project and we&rsquo;ll get back to you with a free, no-obligation estimate.</p>
      <form class="lp-form" action="https://formsubmit.co/${EMAIL}" method="POST">
        <input type="hidden" name="_subject" value="New Quote Request (${esc(s.name)}) - Cutting Edge Landscaping" />
        <input type="hidden" name="_next" value="${url}?submitted=true" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="Service" value="${esc(s.name)}" />
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <input type="text" name="address" placeholder="City / Neighbourhood" required />
        <textarea name="message" rows="3" placeholder="Briefly describe your project (optional)"></textarea>
        <button type="submit">Get My Free Quote</button>
      </form>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-wrap">
      <h2>Areas We Serve</h2>
      <p class="lp-lead">Based in Etobicoke, we bring ${esc(s.name.toLowerCase())} services to every community within about 30&nbsp;km across the GTA.</p>
      <nav class="lp-nearby" aria-label="Service areas">
          ${areasHtml()}
      </nav>
    </div>
  </section>

  <section class="lp-section alt">
    <div class="lp-wrap">
      <h2>Other Services</h2>
      <nav class="lp-nearby" aria-label="Other services">
          ${otherServicesHtml(s)}
      </nav>
      <p style="text-align:center;margin-top:1.75rem"><a class="lp-btn primary" href="/">&larr; Back to Cutting Edge Landscaping</a></p>
    </div>
  </section>

  <footer class="lp-footer">
    <div class="lp-fbrand">CUTTING EDGE</div>
    <div>Landscaping &amp; Snowplowing &middot; Etobicoke, Toronto &amp; the Greater Toronto Area</div>
    <div style="margin-top:.75rem">66 Genthorn Ave, Etobicoke, ON M9W 2S9 &middot; <a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a> &middot; <a href="mailto:${EMAIL}">${EMAIL}</a></div>
    <div style="margin-top:1rem">&copy; 2004 - 2026 Cutting Edge Landscaping &amp; Snowplowing</div>
  </footer>
</body>
</html>
`;
}

function indexPage() {
  const title = 'Our Services | Cutting Edge Landscaping & Snowplowing (Etobicoke & Toronto)';
  const desc = 'Interlocking, snow removal, sod installation, landscaping and retaining walls in Etobicoke, Toronto and the GTA. See our dedicated service pages for pricing, FAQs and free quotes.';
  const url = `${ORIGIN}/services/`;
  const links = SERVICES.map(s => `        <a class="lp-card" href="/services/${s.slug}" style="text-decoration:none"><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p></a>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <meta name="theme-color" content="#1f4228" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/assets/summer.png" />
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Yellowtail&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    :root{--green:#1f4228;--navy:#0e2030;--gold:#d4af37;--dark:#333;--light:#666;--bg:#f5f7fa;--white:#fff}
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Montserrat',sans-serif;color:var(--dark);background:var(--bg)}
    .lp-wrap{max-width:1160px;margin:0 auto;padding:0 20px}
    .lp-header{background:var(--white);box-shadow:0 2px 12px rgba(0,0,0,.08)}
    .lp-header .lp-wrap{display:flex;align-items:center;justify-content:space-between;padding:14px 20px}
    .lp-brand{font-weight:900;color:var(--navy);text-decoration:none}
    .lp-brand span{color:var(--green)}
    .lp-callbtn{background:var(--green);color:#fff;text-decoration:none;padding:10px 18px;border-radius:50px;font-weight:800;font-size:.9rem}
    .lp-hero{background:linear-gradient(rgba(14,32,48,.72),rgba(14,32,48,.78)),url('/assets/summer.png') center/cover;color:#fff;text-align:center;padding:72px 20px}
    .lp-hero h1{font-size:clamp(1.8rem,5vw,3rem);font-weight:900;text-transform:uppercase}
    .lp-hero p{max-width:720px;margin:1rem auto 0}
    .lp-section{padding:56px 0}
    .lp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
    .lp-card{background:var(--white);border-radius:14px;padding:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,.06);border-top:4px solid var(--green);color:inherit}
    .lp-card h3{color:var(--navy);margin-bottom:.4rem}
    .lp-card p{color:var(--light);font-size:.92rem}
    .lp-footer{background:var(--navy);color:#a0aab5;text-align:center;padding:2.5rem 20px;font-size:.9rem}
    .lp-footer a{color:var(--gold);text-decoration:none}
  </style>
</head>
<body>
  <header class="lp-header"><div class="lp-wrap">
    <a class="lp-brand" href="/">CUTTING EDGE <span>Landscaping &amp; Snowplowing</span></a>
    <a class="lp-callbtn" href="tel:${PHONE_TEL}">Call ${PHONE_DISPLAY}</a>
  </div></header>
  <section class="lp-hero">
    <h1>Our Services</h1>
    <p>Interlocking, snow removal, sod installation, landscaping and retaining walls for Etobicoke, Toronto and the Greater Toronto Area.</p>
  </section>
  <section class="lp-section"><div class="lp-wrap">
    <div class="lp-grid">
${links}
    </div>
  </div></section>
  <footer class="lp-footer">
    <div style="color:#fff;font-weight:900;font-size:1.3rem">CUTTING EDGE</div>
    <div>66 Genthorn Ave, Etobicoke, ON M9W 2S9 &middot; <a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a></div>
    <div style="margin-top:1rem">&copy; 2004 - 2026 Cutting Edge Landscaping &amp; Snowplowing</div>
  </footer>
</body>
</html>
`;
}

function sitemap() {
  const today = process.env.BUILD_DATE || '2026-07-07';
  const urls = [
    { loc: ORIGIN + '/', pri: '1.0', freq: 'monthly' },
    { loc: ORIGIN + '/areas/', pri: '0.8', freq: 'monthly' },
    ...CITIES.map(c => ({ loc: `${ORIGIN}/areas/${c.slug}`, pri: '0.8', freq: 'monthly' })),
    { loc: ORIGIN + '/services/', pri: '0.8', freq: 'monthly' },
    ...SERVICES.map(s => ({ loc: `${ORIGIN}/services/${s.slug}`, pri: '0.9', freq: 'monthly' })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`).join('\n')}
</urlset>
`;
}

// --- write ---
fs.mkdirSync(OUT, { recursive: true });
let n = 0;
for (const s of SERVICES) { fs.writeFileSync(path.join(OUT, s.slug + '.html'), page(s)); n++; }
fs.writeFileSync(path.join(OUT, 'index.html'), indexPage());
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap());
console.log(`Generated ${n} service pages + services/index.html + combined sitemap.xml (${CITIES.length + SERVICES.length + 3} URLs)`);
module.exports = { SERVICES };

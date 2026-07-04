#!/usr/bin/env node
/*
 * Generates SEO landing pages for each service-area city into /areas/.
 * Each page is self-contained static HTML (no React, no CDN) so it renders
 * instantly and is fully crawlable. Also regenerates sitemap.xml.
 *
 * Run:  node scripts/build-areas.js   (or npm run build:areas)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'areas');
const ORIGIN = 'https://cutting-edge-landscaping.ca';
const PHONE_DISPLAY = '416-805-7642';
const PHONE_TEL = '4168057642';
const EMAIL = 'kyle_cuttingedge@hotmail.com';

const SERVICES = [
  ['Interlocking Stone', 'Driveways, walkways and patios in interlocking pavers, built to survive Canadian freeze-thaw winters.'],
  ['Flagstone &amp; Natural Stone', 'Flagstone steps, walkways and patios that add timeless, durable character to any property.'],
  ['Retaining Walls', 'Engineered, great-looking retaining walls that manage grade and create usable, tiered yards.'],
  ['Composite Decking', 'Low-maintenance composite and cedar decks with glass or metal railings and privacy screens.'],
  ['Artificial Turf', 'Pet- and family-friendly artificial turf with proper drainage — green all year, no mowing.'],
  ['Sodding &amp; Lawn Care', 'Fresh sod, grading and lawn renovation for an instant, healthy green lawn.'],
  ['Pools &amp; Ponds', 'Pool and pond installation with seamless natural-stone and paver surrounds.'],
  ['Hot Tubs', 'Hot tub decks and surrounds that turn a backyard into a private, year-round retreat.'],
  ['Property Maintenance', 'Ongoing residential and commercial garden, bed and property maintenance.'],
  ['Snow Removal &amp; Snowplowing', 'Rapid-response residential and commercial snowplowing and de-icing all winter long.'],
];

const REVIEWS = [
  ['Kevin', 'Kyle and team were absolutely great and would highly recommend. Pricing was fair and competitive, the whole project finished in 2 days and the crew was very professional.'],
  ['HomeStars Customer', 'Kyle was super easy to work with from the word GO. The project was well priced and his team is very careful. He keeps his word and delivers what he promised.'],
];

const CITIES = [
  { slug: 'etobicoke', name: 'Etobicoke', region: 'Toronto', lat: 43.6205, lng: -79.5132,
    blurb: 'Etobicoke is our home turf. Our yard sits at 66 Genthorn Avenue, and since 2004 we have transformed properties right across Etobicoke — from century homes in The Kingsway to waterfront lots in Mimico and Humber Bay.',
    note: 'Because we are based right here in Etobicoke, local clients get our fastest response times and priority scheduling for summer builds and winter snow routes alike.',
    hoods: ['The Kingsway', 'Islington-City Centre', 'Mimico', 'New Toronto', 'Long Branch', 'Alderwood', 'Rexdale', 'Markland Wood', 'Princess-Rosethorn', 'Thistletown', 'Humber Bay', 'Eringate'] },
  { slug: 'toronto', name: 'Toronto', region: 'Toronto', lat: 43.6532, lng: -79.3832,
    blurb: 'From downtown gardens to established homes in High Park, Leaside and the Beaches, Cutting Edge brings durable interlocking, natural stone and full-service landscaping to properties right across the City of Toronto.',
    note: 'We handle tight urban access, laneway builds and heritage streetscapes every day, and provide winter snow contracts for Toronto homes and businesses.',
    hoods: ['High Park', 'Roncesvalles', 'The Junction', 'Leaside', 'Forest Hill', 'Rosedale', 'The Beaches', 'Swansea', 'Bloor West Village', 'Davisville'] },
  { slug: 'north-york', name: 'North York', region: 'Toronto', lat: 43.7615, lng: -79.4111,
    blurb: 'Willowdale, Don Mills and Bayview Village homeowners trust Cutting Edge for patios, retaining walls and pool surrounds built for North York’s mature-tree lots and clay soils.',
    note: 'Larger North York lots are ideal for tiered retaining walls, natural-stone patios and full backyard transformations — our specialty.',
    hoods: ['Willowdale', 'Don Mills', 'Bayview Village', 'North York Centre', 'Newtonbrook', 'Downsview', 'York Mills', 'Bathurst Manor'] },
  { slug: 'mississauga', name: 'Mississauga', region: 'Peel', lat: 43.5890, lng: -79.6441,
    blurb: 'From the lakeside streets of Port Credit and Lorne Park to the newer communities of Churchill Meadows and Erin Mills, we design and build premium outdoor spaces across Mississauga.',
    note: 'Mississauga is one of our busiest markets, minutes from our Etobicoke yard — great for both quick consultations and reliable winter snow service.',
    hoods: ['Port Credit', 'Lorne Park', 'Streetsville', 'Clarkson', 'Erin Mills', 'Meadowvale', 'Cooksville', 'Lakeview', 'Churchill Meadows', 'Malton'] },
  { slug: 'brampton', name: 'Brampton', region: 'Peel', lat: 43.7315, lng: -79.7624,
    blurb: 'Brampton’s fast-growing neighbourhoods — Springdale, Mount Pleasant, Castlemore and Bramalea — call for hardscaping built to last. We deliver interlocking driveways, retaining walls and complete yard makeovers across the city.',
    note: 'New Brampton builds often start with a blank slate; we handle grading, sodding, interlocking and planting to finish the yard end to end.',
    hoods: ['Bramalea', 'Springdale', 'Mount Pleasant', 'Castlemore', 'Heart Lake', 'Fletcher’s Meadow', 'Sandringham', 'Downtown Brampton'] },
  { slug: 'vaughan', name: 'Vaughan', region: 'York', lat: 43.8361, lng: -79.4983,
    blurb: 'In Vaughan we build premium outdoor living spaces for homes in Woodbridge, Maple, Kleinburg and Vellore Village, plus dependable commercial snow removal through the winter.',
    note: 'From estate lots in Kleinburg to family homes in Maple, Vaughan projects are a perfect fit for our natural-stone and interlocking work.',
    hoods: ['Woodbridge', 'Maple', 'Concord', 'Kleinburg', 'Vellore Village', 'Patterson', 'Thornhill'] },
  { slug: 'woodbridge', name: 'Woodbridge', region: 'York', lat: 43.7758, lng: -79.5967,
    blurb: 'Woodbridge homeowners choose Cutting Edge for elegant interlocking, natural-stone patios and custom decks that suit the community’s large lots and established streetscapes.',
    note: 'Woodbridge’s generous properties are ideal for outdoor kitchens, layered patios and feature walls that make the most of the space.',
    hoods: ['Pine Valley', 'Vellore', 'Sonoma Heights', 'West Woodbridge', 'Islington Woods'] },
  { slug: 'oakville', name: 'Oakville', region: 'Halton', lat: 43.4675, lng: -79.6877,
    blurb: 'From Old Oakville and Bronte to Glen Abbey and Joshua Creek, we craft refined landscapes — flagstone walkways, natural-stone patios and layered gardens — for Oakville’s discerning homeowners.',
    note: 'Oakville clients value craftsmanship and detail; our flagstone and natural-stone work is a natural match for the town’s upscale streets.',
    hoods: ['Old Oakville', 'Bronte', 'Glen Abbey', 'River Oaks', 'Joshua Creek', 'Kerr Village', 'West Oak Trails'] },
  { slug: 'richmond-hill', name: 'Richmond Hill', region: 'York', lat: 43.8828, lng: -79.4403,
    blurb: 'Richmond Hill properties in Oak Ridges, Bayview Hill and Mill Pond get four-season care from Cutting Edge — from spring hardscape builds to winter snowplowing.',
    note: 'We keep Richmond Hill driveways and walkways clear all winter and rebuild them beautifully come spring.',
    hoods: ['Oak Ridges', 'Bayview Hill', 'Mill Pond', 'Jefferson', 'Observatory', 'Rouge Woods'] },
  { slug: 'markham', name: 'Markham', region: 'York', lat: 43.8561, lng: -79.3370,
    blurb: 'Unionville, Cornell and Berczy Village homeowners rely on us for interlocking, retaining walls and artificial turf tailored to Markham’s mix of heritage and new-build streets.',
    note: 'Markham’s newer subdivisions and historic Unionville homes both benefit from our clean, durable hardscaping.',
    hoods: ['Unionville', 'Cornell', 'Berczy Village', 'Cathedraltown', 'Milliken Mills', 'Markham Village', 'Thornhill'] },
  { slug: 'caledon', name: 'Caledon', region: 'Peel', lat: 43.8630, lng: -79.8661,
    blurb: 'Across Caledon — Bolton, Caledon East and Palgrave — we handle larger rural and estate properties with retaining walls, natural stone and dependable winter snow clearing for long driveways.',
    note: 'Caledon’s estate lots and long laneways are well suited to our heavy hardscaping and commercial-grade snow removal.',
    hoods: ['Bolton', 'Caledon East', 'Palgrave', 'Inglewood', 'Cheltenham', 'Mono Mills', 'Alton'] },
  { slug: 'milton', name: 'Milton', region: 'Halton', lat: 43.5183, lng: -79.8774,
    blurb: 'Milton’s growing communities of Timberlea, Beaty and Scott trust Cutting Edge for interlocking driveways, sodding and complete backyard builds beneath the Niagara Escarpment.',
    note: 'From brand-new Milton subdivisions to established streets, we build yards that are ready for family life year-round.',
    hoods: ['Old Milton', 'Timberlea', 'Beaty', 'Scott', 'Dempsey', 'Bronte Meadows', 'Willmott', 'Coates'] },
];

function esc(s) { return String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;'); }

function servicesHtml() {
  return SERVICES.map(([t, d]) =>
    `        <article class="lp-card">
          <h3>${t}</h3>
          <p>${d}</p>
        </article>`).join('\n');
}

function nearbyHtml(current) {
  return CITIES.filter(c => c.slug !== current.slug).map(c =>
    `<a href="/areas/${c.slug}">Landscaping in ${c.name}</a>`).join('\n          ');
}

function jsonLd(c) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: ORIGIN + '/areas/' },
          { '@type': 'ListItem', position: 3, name: c.name, item: `${ORIGIN}/areas/${c.slug}` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${ORIGIN}/areas/${c.slug}#service`,
        name: `Landscaping & Snow Removal in ${c.name}`,
        serviceType: 'Landscaping, hardscaping and snow removal',
        description: `Award-winning landscaping, hardscaping and snow removal in ${c.name}, Ontario by Cutting Edge Landscaping & Snowplowing — interlocking stone, flagstone, retaining walls, decks, artificial turf, sodding, pools and snowplowing.`,
        areaServed: { '@type': 'City', name: c.name, geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng } },
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
    ],
  };
  return JSON.stringify(data, null, 2);
}

function page(c) {
  const title = `Landscaping & Snowplowing in ${c.name}, ON | Cutting Edge`;
  const desc = `Award-winning landscaping, hardscaping & snow removal in ${c.name}, Ontario. Interlocking stone, flagstone, retaining walls, decks, artificial turf, sodding, pools & 24/7 snowplowing. 5.0-rated, serving ${c.name} & the GTA since 2004. Free quote: ${PHONE_DISPLAY}.`;
  const url = `${ORIGIN}/areas/${c.slug}`;
  const hoods = c.hoods.join(', ');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="keywords" content="landscaping ${c.name}, landscaper ${c.name}, snow removal ${c.name}, snowplowing ${c.name}, interlocking ${c.name}, hardscaping ${c.name}, retaining walls ${c.name}, artificial turf ${c.name}, Cutting Edge Landscaping" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <meta name="theme-color" content="#1f4228" />
  <meta name="geo.region" content="CA-ON" />
  <meta name="geo.placename" content="${c.name}, Ontario" />
  <meta name="geo.position" content="${c.lat};${c.lng}" />
  <meta name="ICBM" content="${c.lat}, ${c.lng}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Cutting Edge Landscaping & Snowplowing" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/assets/summer.png" />
  <meta property="og:locale" content="en_CA" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${desc}" />
  <meta name="twitter:image" content="${ORIGIN}/assets/summer.png" />
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Yellowtail&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  <script type="application/ld+json">
${jsonLd(c)}
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
    .lp-hero h1{font-size:clamp(1.8rem,5vw,3.2rem);font-weight:900;text-transform:uppercase;line-height:1.1;margin-bottom:1rem}
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
    .lp-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:1.5rem}
    .lp-chip{background:var(--white);border:1px solid #e5e9ef;color:var(--dark);padding:6px 14px;border-radius:50px;font-size:.88rem;font-weight:600}
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
    <span class="lp-eyebrow">Transform Your Outdoors</span>
    <h1>Landscaping &amp; Snowplowing in ${c.name}, Ontario</h1>
    <p>${esc(c.blurb)}</p>
    <div class="lp-btns">
      <a class="lp-btn primary" href="#quote">Get a Free Quote</a>
      <a class="lp-btn ghost" href="tel:${PHONE_TEL}">Call ${PHONE_DISPLAY}</a>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-wrap">
      <h2>Your Trusted ${c.name} Landscaper Since 2004</h2>
      <p class="lp-lead">Cutting Edge Landscaping &amp; Snowplowing is a fully-insured, award-winning landscaping and snow-removal company serving ${c.name} and the wider Greater Toronto Area. ${esc(c.note)}</p>
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
      <h2>Landscaping &amp; Snow Services in ${c.name}</h2>
      <p class="lp-lead">Complete outdoor construction and maintenance for ${c.name} homes and businesses — summer and winter.</p>
      <div class="lp-grid">
${servicesHtml()}
      </div>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-wrap">
      <h2>Proudly Serving Every ${c.name} Neighbourhood</h2>
      <p class="lp-lead">We work throughout ${c.name}, including ${esc(hoods)} and surrounding areas.</p>
      <div class="lp-chips">
        ${c.hoods.map(h => `<span class="lp-chip">${esc(h)}</span>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="lp-section alt">
    <div class="lp-wrap">
      <h2>What ${c.name}-Area Clients Say</h2>
      <div class="lp-reviews">
${REVIEWS.map(([who, txt]) => `        <div class="lp-review"><div class="lp-stars">★★★★★</div><p>&ldquo;${esc(txt)}&rdquo;</p><div class="who">${who} &middot; HomeStars Review</div></div>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="lp-section lp-quote" id="quote">
    <div class="lp-wrap">
      <h2>Get Your Free ${c.name} Quote</h2>
      <p class="lp-lead" style="color:#cdd6e0">Tell us about your project and we&rsquo;ll get back to you with a free, no-obligation estimate.</p>
      <form class="lp-form" action="https://formsubmit.co/${EMAIL}" method="POST">
        <input type="hidden" name="_subject" value="New Quote Request (${c.name}) - Cutting Edge Landscaping" />
        <input type="hidden" name="_next" value="${url}?submitted=true" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="Service Area" value="${c.name}, ON" />
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <select name="service" required>
          <option value="" disabled selected>Select a Service…</option>
          <option>Landscaping</option>
          <option>Hardscaping / Interlocking</option>
          <option>Snow Removal</option>
          <option>Other / Maintenance</option>
        </select>
        <textarea name="message" rows="3" placeholder="Briefly describe your project (optional)"></textarea>
        <button type="submit">Get My Free Quote</button>
      </form>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-wrap">
      <h2>Other Areas We Serve</h2>
      <p class="lp-lead">Based in Etobicoke, we serve every community within about 30&nbsp;km across the GTA.</p>
      <nav class="lp-nearby" aria-label="Nearby service areas">
          ${nearbyHtml(c)}
      </nav>
      <p style="text-align:center;margin-top:1.75rem"><a class="lp-btn primary" href="/">&larr; Back to Cutting Edge Landscaping</a></p>
    </div>
  </section>

  <footer class="lp-footer">
    <div class="lp-fbrand">CUTTING EDGE</div>
    <div>Landscaping &amp; Snowplowing &middot; ${c.name} &amp; the Greater Toronto Area</div>
    <div style="margin-top:.75rem">66 Genthorn Ave, Etobicoke, ON M9W 2S9 &middot; <a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a> &middot; <a href="mailto:${EMAIL}">${EMAIL}</a></div>
    <div style="margin-top:1rem">&copy; 2004 - 2026 Cutting Edge Landscaping &amp; Snowplowing</div>
  </footer>
</body>
</html>
`;
}

function indexPage() {
  const title = 'Service Areas | Cutting Edge Landscaping & Snowplowing (GTA)';
  const desc = 'Cutting Edge Landscaping & Snowplowing serves Etobicoke and every community within about 30 km across the Greater Toronto Area. Find landscaping and snow removal in your city.';
  const url = `${ORIGIN}/areas/`;
  const links = CITIES.map(c => `        <a class="lp-card" href="/areas/${c.slug}" style="text-decoration:none"><h3>${c.name}</h3><p>Landscaping, hardscaping &amp; snow removal in ${c.name}, ON.</p></a>`).join('\n');
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
    <h1>Service Areas</h1>
    <p>Based in Etobicoke, Cutting Edge Landscaping &amp; Snowplowing serves every community within about 30&nbsp;km across the Greater Toronto Area.</p>
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
  const today = process.env.BUILD_DATE || '2026-07-04';
  const urls = [
    { loc: ORIGIN + '/', pri: '1.0', freq: 'monthly' },
    { loc: ORIGIN + '/areas/', pri: '0.8', freq: 'monthly' },
    ...CITIES.map(c => ({ loc: `${ORIGIN}/areas/${c.slug}`, pri: '0.8', freq: 'monthly' })),
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
for (const c of CITIES) { fs.writeFileSync(path.join(OUT, c.slug + '.html'), page(c)); n++; }
fs.writeFileSync(path.join(OUT, 'index.html'), indexPage());
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap());
console.log(`Generated ${n} area pages + areas/index.html + sitemap.xml (${CITIES.length + 2} URLs)`);
module.exports = { CITIES };

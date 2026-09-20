// ─────────────────────────────────────────────────────────────
// StyleChild Parties — single source of truth for copy + NAP.
// Real business info pulled from stylechild.com footer.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: "StyleChild",
  legal: "StylechildbyJL",
  tagline: "Kick Up Your Party!",
  phone: "(561) 617-5901",
  phoneHref: "tel:+15616175901",
  email: "Info@StyleChild.com",
  address1: "1101 Holland Drive, Suite 5",
  address2: "Boca Raton, FL 33487",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=1101+Holland+Drive+Suite+5+Boca+Raton+FL+33487",
  instagram: "https://www.instagram.com/stylechildbyjl/",
  facebook: "https://www.facebook.com/stylechildbyjl/",
  shop: "https://stylechild.com",
  serviceArea: "Boca Raton · Delray · Boynton · Parkland · Fort Lauderdale · Palm Beach",
};

// Lead form delivery. Option A (default): FormSubmit AJAX endpoint → Info@StyleChild.com.
// FormSubmit emails a one-time activation link to that inbox on the first submission.
// Option B: paste a GoHighLevel inline-form URL into GHL_FORM_EMBED_URL and the page
// renders the GHL iframe instead of the native form.
export const FORM = {
  endpoint: "https://formsubmit.co/ajax/Info@StyleChild.com",
  GHL_FORM_EMBED_URL: "",
};

// Google Ads — paste the conversion tag once the campaign is created.
export const ADS = {
  gtagId: "", // e.g. "AW-123456789"
  conversionLabel: "", // e.g. "AbC-D_efG-h12_34-567"
};

export const NAV = [
  { label: "The Party", href: "/#party" },
  { label: "Packages", href: "/packages/" },
  { label: "Themes", href: "/themes/" },
  { label: "What's Included", href: "/#included" },
  { label: "Gallery", href: "/gallery/" },
  { label: "FAQ", href: "/#faq" },
];

export const HERO = {
  kicker: "You're invited to",
  title: "Kick Up Your Party!",
  sub: "Sneakers, crowns, tees, slippers, squishies, spa days, superheroes. We do all types of parties. Tell us your kid's favorite theme and we'll make it happen.",
  cta: "Plan My Party",
  cta2: "See Packages",
};

export const INTRO = {
  eyebrow: "The Ultimate Party",
  title: "Whatever the occasion, we've got you covered.",
  body: [
    "At StyleChild, the party is built around whatever your kid loves. Every guest customizes something to take home, and we take care of the rest. Seriously, all of it.",
    "Any theme, any craft: crowns, tees, slippers, squishies, sneakers, spa day. From paper goods and décor to glitter and games, we bring the magic. You bring the kids.",
  ],
  points: [
    { title: "Not just birthdays", body: "Think days off, playdates, rainy-day fun, team celebrations and end-of-season parties." },
    { title: "Your place or ours", body: "We'll host you at StyleChild HQ in Boca Raton or bring the full party straight to you." },
    { title: "Bash in a Box", body: "Our party-in-a-box ships the fun right to your door. Wherever you live, you won't miss it." },
  ],
};

export const SLIDER = [
  { src: "/photos/ai-crowns.jpg", alt: "Girls wearing crowns they decorated at a StyleChild party", caption: "Crown + tiara bar" },
  { src: "/photos/real-kids-sneakers.jpg", alt: "Kids customizing sneakers at StyleChild HQ", caption: "Sneaker styler bar" },
  { src: "/photos/ai-slippers.jpg", alt: "Personalized fur slippers with names and icons", caption: "Custom slippers" },
  { src: "/photos/real-spidey-boy.jpg", alt: "Spider-Man themed birthday at StyleChild HQ", caption: "Superhero bash" },
  { src: "/photos/ai-boys.jpg", alt: "Boys showing custom sneakers and custom tees", caption: "Custom kicks + tees" },
  { src: "/photos/real-cupcakes.jpg", alt: "DIY cupcake decorating trays", caption: "DIY cupcake decorating" },
  { src: "/photos/real-lipgloss-bar.jpg", alt: "Lip gloss keychain and charm bar", caption: "Lip gloss + charm bar" },
  { src: "/photos/real-birthday-girl.jpg", alt: "Birthday girl at StyleChild HQ", caption: "Parties at HQ" },
  { src: "/photos/ai-mixed.jpg", alt: "Kids holding squishies, candy boxes and custom sweatshirts", caption: "Squishies, candy + more" },
  { src: "/photos/real-wicked-table.jpg", alt: "Wicked themed sneaker party table", caption: "Any theme they love" },
  { src: "/photos/real-spidey-boxes.jpg", alt: "Personalized Spider-Man party boxes", caption: "Personalized everything" },
  { src: "/photos/real-hq-booth.jpg", alt: "StyleChild heat-transfer booth at an event", caption: "Events + activations" },
];

export const WHY = {
  eyebrow: "Why parents choose StyleChild",
  title: "You enjoy the party. We run it.",
  sub: "Most party planners hand you a checklist. We hand you a finished party.",
  points: [
    { icon: "🎯", title: "Zero work for parents", body: "Décor, supplies, hosting, games, clean-up. You send the guest list and show up." },
    { icon: "🎁", title: "A favor kids actually keep", body: "Every guest customizes something they love and takes it home: a crown, a tee, slippers, a squishy, sneakers. No goodie-bag junk." },
    { icon: "🏠", title: "Anywhere you want it", body: "Our Boca Raton HQ, your backyard or clubhouse, or shipped to any address as a Bash in a Box." },
    { icon: "🎂", title: "Any age, any occasion", body: "Birthdays, playdates, days off, team parties and camp weeks, ages 5 to 13 and beyond." },
  ],
  proof: ["500+ parties", "Boca Raton since 2019", "Fully hosted"],
  contact: {
    title: "Let's plan it together.",
    body: "Our Boca Raton party team is one call away. Tell us the date, the age and the vibe, and we'll map out the whole day with you, from the theme and the craft stations to the last piece of confetti. No pressure, no homework. Just a plan you'll love.",
    cta: "Call Now",
    cta2: "Or send us the details",
    note: "Real people answer. We reply to messages within one business day.",
  },
};

export const INCLUDED = {
  eyebrow: "What the party brings",
  title: "Everything. Boxed, styled and ready.",
  sub: "Every StyleChild party is a fully produced event. Here's what's inside.",
  items: [
    { icon: "✨", title: "The Main Creative Station", body: "Built around your theme. Every guest customizes their own keepsake: crowns, slippers, sweatshirts, squishies, Caboodles, sneakers and more." },
    { icon: "🧶", title: "A Welcome Craft", body: "Friendship bracelets, keychains, wands or lip gloss charms to kick things off while guests arrive." },
    { icon: "🎨", title: "All the Supplies", body: "Transfers, patches, paint markers, gems, beads, charms and stickers. Nothing for you to buy." },
    { icon: "🎈", title: "Décor & Paper Goods", body: "Holographic tablecloths, balloons, plates, cups, napkins and a personalized welcome sign for the birthday kid." },
    { icon: "🎉", title: "Games & Glitter", body: "Hosted activities, music and a confetti moment so the energy never dips. We run the room." },
    { icon: "🧹", title: "Set-Up & Clean-Up", body: "Our team arrives early, styles the space, hosts the party and leaves it spotless. You just enjoy." },
  ],
};

export const WAYS = {
  eyebrow: "3 ways to party",
  title: "Pick your party style.",
  cards: [
    {
      tag: "We send it",
      title: "Bash in a Box",
      body: "The whole party shipped to your door. The craft for every guest, supplies, décor and a step-by-step party plan. Wherever you live, you won't miss the fun.",
      image: "/photos/bash-in-a-box.jpg",
      color: "orange",
      cta: "Get a Box Quote",
    },
    {
      tag: "Come to us",
      title: "Parties at StyleChild HQ",
      body: "Just come ready to party and walk into a fully decorated, personalized space in Boca Raton. Graffiti walls, your theme's creative stations, cake moment, all handled.",
      image: "/photos/hq-party.jpg",
      color: "pink",
      cta: "Book HQ",
    },
    {
      tag: "We come to you",
      title: "Parties Wherever You Are",
      body: "Backyard, clubhouse, park or school. We bring the full StyleChild experience straight to you, set it up, host it and pack it out.",
      image: "/photos/outdoor-kicks.jpg",
      color: "purple",
      cta: "Bring the Party",
    },
  ],
};

export const STEPS = [
  { n: "01", title: "Tell us about the party", body: "Kid's age, date, headcount and vibe. Two minutes, no commitment." },
  { n: "02", title: "We design the experience", body: "Theme, décor, creative stations and activities built around what your kid loves. You approve, we produce." },
  { n: "03", title: "Party day, handled", body: "We set up, host, run the games and clean up. You enjoy it with your kid." },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Parties hosted" },
  { value: 100, suffix: "%", label: "Parent-free set-up & clean-up" },
  { value: 26, suffix: "", label: "Creative stations to choose from" },
  { value: 5, suffix: "★", label: "Parents' favorite party" },
];

export const GALLERY = [
  { src: "/photos/strip-3.jpg", alt: "Kids customizing white sneakers at a StyleChild party" },
  { src: "/photos/real-spidey-boy.jpg", alt: "Spider-Man themed birthday at StyleChild HQ" },
  { src: "/photos/hq-party.jpg", alt: "Birthday group at StyleChild HQ in Boca Raton" },
  { src: "/photos/real-cupcakes.jpg", alt: "DIY cupcake decorating trays at a Wicked themed party" },
  { src: "/photos/real-kids-sneakers.jpg", alt: "Kids decorating sneakers together at StyleChild HQ" },
  { src: "/photos/strip-2.jpg", alt: "Bead bar and party décor" },
  { src: "/photos/real-lipgloss-bar.jpg", alt: "Lip gloss keychain and charm bar set-up" },
  { src: "/photos/outdoor-kicks.jpg", alt: "Custom Kicks Bar at an outdoor party" },
  { src: "/photos/real-birthday-girl.jpg", alt: "Birthday girl in front of the StyleChild graffiti wall" },
  { src: "/photos/strip-4.jpg", alt: "Kids decorating t-shirts with stencils" },
  { src: "/photos/real-wicked-table.jpg", alt: "Wicked themed sneaker party table" },
  { src: "/photos/table-party.jpg", alt: "Party table with white sneakers and markers" },
  { src: "/photos/real-spidey-boxes.jpg", alt: "Personalized Spider-Man party boxes" },
  { src: "/photos/strip-1.jpg", alt: "Rainbow laces and markers" },
  { src: "/photos/real-hq-booth.jpg", alt: "StyleChild heat-transfer booth at an event" },
  { src: "/photos/strip-5.jpg", alt: "Stencil doodles on a sneaker" },
];

export const TESTIMONIALS = [
  {
    quote: "[REPLACE — real parent review] Easiest party I've ever thrown. I didn't lift a finger and the kids still talk about what they made.",
    name: "[Parent name]",
    meta: "Boca Raton · 9th birthday",
  },
  {
    quote: "[REPLACE — real parent review] They set up in our backyard, ran everything and left it cleaner than they found it.",
    name: "[Parent name]",
    meta: "Parkland · 7th birthday",
  },
  {
    quote: "[REPLACE — real parent review] Bash in a Box was perfect for our out-of-state cousins. Everything was in there.",
    name: "[Parent name]",
    meta: "Shipped · playdate party",
  },
];

export const FAQ = [
  { q: "What ages are StyleChild parties for?", a: "Most parties are ages 5 to 13, but we host toddlers through teens (and adults!). Activities are adjusted for the group." },
  { q: "How many kids can you host?", a: "HQ parties comfortably host up to 20 kids. Parties at your location can scale larger. Bash in a Box ships in any quantity." },
  { q: "What do parents need to do?", a: "Send us the guest count and show up. We handle décor, supplies, hosting, games and clean-up. Cake and food can be added or you bring your own." },
  { q: "Do you only do birthdays?", a: "No. Playdates, days off school, team parties, camp weeks, holiday events and corporate family days are all fair game." },
  { q: "Where do you travel?", a: "Boca Raton, Delray, Boynton, Parkland, Fort Lauderdale and Palm Beach County. Farther out? Ask, or let us ship a Bash in a Box." },
  { q: "How far ahead should I book?", a: "Weekends fill 3 to 6 weeks out. Tell us your date and we'll confirm availability within one business day." },
];

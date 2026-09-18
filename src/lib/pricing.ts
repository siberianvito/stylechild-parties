// ─────────────────────────────────────────────────────────────
// StyleChild Party Menu 2026 — transcribed from
// StyleChild_Customer_Party_Pricing_ProposalStyle_v12.pdf
// ─────────────────────────────────────────────────────────────

export const MENU_META = {
  year: "2026",
  facts: [
    { big: "1.5", small: "hours", label: "at StyleChild HQ" },
    { big: "10", small: "guest", label: "weekend minimum" },
    { big: "100%", small: "", label: "fully customizable" },
  ],
  intro:
    "Choose a full party package or build your own StyleChild experience from our creative stations.",
  packagesNote:
    "Simple package pricing for 10 or 20 guests. Larger groups are available by custom quote. All party packages include a welcome craft and a thoughtfully timed, full-service party experience with everything needed from start to finish. Food is not included.",
};

export type Package = {
  slug: string;
  name: string;
  short: string;
  body: string;
  welcome?: string;
  price10: number;
  price20: number;
  color: "orange" | "pink" | "purple" | "turq" | "yellow" | "sky";
  emoji: string;
  image: string;
  ages: string;
  highlights: string[];
};

export const PACKAGES: Package[] = [
  {
    slug: "sneaker-party",
    name: "StyleChild Sneaker Party",
    short: "The signature. Every guest designs their own kicks.",
    body: "The ultimate StyleChild experience for kids who love to create and customize. Guests begin with a friendship bracelet or keychain welcome craft, then each child designs their own StyleChild Kicks using a curated assortment of laces, shoe charms, beads and fun accessories. Our team guides the party from start to finish so every guest leaves with a completely personalized pair of sneakers.",
    welcome: "Friendship bracelet or keychain",
    price10: 850,
    price20: 1450,
    color: "orange",
    emoji: "👟",
    image: "/themes/sneaker.jpg",
    ages: "Ages 5–13",
    highlights: ["StyleChild Kicks for every guest", "Laces, charms, beads + accessories", "Hosted start to finish"],
  },
  {
    slug: "princess-prince",
    name: "Princess + Prince Party",
    short: "Wands, crowns, treasure boxes and a royal visit.",
    body: "A magical celebration designed especially for younger guests. Kids begin by creating their own magic wands and/or crowns, then decorate a keepsake magic makeup box or wooden treasure box. The celebration includes a special 30–45 minute visit from the princess character of your choice, based on availability, for an extra touch of birthday magic.",
    welcome: "Magic wands and/or crowns",
    price10: 1150,
    price20: 1550,
    color: "pink",
    emoji: "👑",
    image: "/themes/princess.jpg",
    ages: "Best for ages 3–7",
    highlights: ["Wand + crown making", "Keepsake makeup or treasure box", "30–45 min princess character visit"],
  },
  {
    slug: "candyland",
    name: "Candyland Party",
    short: "Candy boxes, candy tees and a candy bar to fill up.",
    body: "A colorful, candy-inspired celebration packed with sweet creativity. Guests decorate their own candy boxes, design custom candy-themed T-shirts, create wearable candy necklaces and finish by visiting a customized candy bar to fill their boxes with treats to take home. A fun, interactive party that works for a wide range of ages.",
    price10: 950,
    price20: 1400,
    color: "sky",
    emoji: "🍭",
    image: "/themes/candyland.jpg",
    ages: "All ages",
    highlights: ["Decorate-your-own candy box", "Custom candy-themed tees", "Candy necklaces + candy bar"],
  },
  {
    slug: "caboodle-beauty-bash",
    name: "Caboodle Beauty Bash",
    short: "Lip gloss keychains, a personalized Caboodle and the Beauty Bar.",
    body: "The perfect beauty bash for kids who love all things glam. Guests start by creating lip gloss keychains, with beading for younger guests or charm links for older kids. Each child then decorates a pre-personalized Caboodle with fun vinyl stickers before shopping our Beauty Bar for 4–5 beauty and makeup goodies to fill it. Everyone leaves with a customized Caboodle packed with favorites.",
    welcome: "Lip gloss keychains",
    price10: 1000,
    price20: 1600,
    color: "purple",
    emoji: "💄",
    image: "/themes/caboodle.jpg",
    ages: "Ages 6–13",
    highlights: ["Pre-personalized Caboodle", "Vinyl sticker decorating", "Beauty Bar: 4–5 goodies each"],
  },
  {
    slug: "spa-craft",
    name: "Spa Craft Party",
    short: "Hair clips, bedazzled brushes, mini manis and headbands.",
    body: "A creative spa-inspired celebration combining crafting, beauty and a little pampering. Guests design their own Emi Jay-inspired hair clips and bedazzled brushes, enjoy a mini mani station and visit our spa headband transfer bar to choose three icons and create a personalized headband. A fun, hands-on beauty experience with plenty to take home.",
    price10: 900,
    price20: 1350,
    color: "turq",
    emoji: "🧖",
    image: "/themes/spa.jpg",
    ages: "Ages 6–13",
    highlights: ["Emi Jay-inspired clips + brushes", "Mini mani station", "Spa headband transfer bar"],
  },
  {
    slug: "all-star-sports",
    name: "All Star Sports Package",
    short: "Built around their favorite game. Balls, jerseys, swag.",
    body: "A customizable sports celebration built around the birthday child's favorite game. Choose basketball, football, baseball, soccer or another favorite sport. Guests can create and customize sport-themed balls, jerseys and other coordinating swag and crafts for a completely personalized All Star experience.",
    price10: 900,
    price20: 1350,
    color: "sky",
    emoji: "🏀",
    image: "/themes/sports.jpg",
    ages: "Ages 5–13",
    highlights: ["Pick the sport", "Custom balls + jerseys", "Coordinating swag + crafts"],
  },
  {
    slug: "squishy",
    name: "Make Your Own Squishy + Squishy Box",
    short: "Create a squishy, then design the box it lives in.",
    body: "A colorful, hands-on party centered around one of kids' favorite collectibles. Guests begin with a keychain-making welcome craft, then create and decorate their own squishy and design a custom squishy box to match. Each child leaves with a one-of-a-kind squishy creation and personalized box to take home.",
    welcome: "Keychain making",
    price10: 850,
    price20: 1700,
    color: "yellow",
    emoji: "🧸",
    image: "/themes/squishy.jpg",
    ages: "Ages 5–12",
    highlights: ["Keychain welcome craft", "Make + decorate a squishy", "Custom squishy box"],
  },
  {
    slug: "superhero-bash",
    name: "Superhero Bash",
    short: "Capes, masks and a superhero guest appearance.",
    body: "An action-packed celebration for little superheroes. Guests begin with a superhero keychain welcome craft, then create and customize their own superhero capes and masks so they can transform into their own character. The party also includes a special superhero character guest appearance, bringing the adventure to life and making the birthday child feel like the star of the day.",
    welcome: "Superhero keychain making",
    price10: 1150,
    price20: 1550,
    color: "orange",
    emoji: "🦸",
    image: "/themes/superhero.jpg",
    ages: "Best for ages 3–8",
    highlights: ["Superhero keychain craft", "Custom capes + masks", "Superhero character appearance"],
  },
];

export const GUEST_TIERS = [10, 20, 30, 40, 50] as const;
export type GuestTier = (typeof GUEST_TIERS)[number];

export type Station = { name: string; includes: string; prices: [number, number, number, number, number] };
export type StationGroup = { group: string; blurb?: string; items: Station[] };

export const STATIONS_INTRO =
  "Perfect for birthdays, school events and larger celebrations. Pricing below covers up to the guest count shown. Staffing and travel may be additional for larger or off-site events.";

export const STATION_GROUPS: StationGroup[] = [
  {
    group: "Signature",
    items: [
      { name: "Sneaker Styler Bar", includes: "StyleChild Kicks, laces, charms + beads", prices: [650, 1200, 1800, 2350, 2900] },
    ],
  },
  {
    group: "Transfer Bars",
    blurb: "Pick the piece, then personalize it at a curated transfer bar.",
    items: [
      { name: "T-Shirt", includes: "Custom tee + curated transfer bar", prices: [400, 700, 1000, 1300, 1600] },
      { name: "Sweatshirt", includes: "Sweatshirt + curated transfer bar", prices: [550, 1000, 1500, 1950, 2400] },
      { name: "Sleep Mask", includes: "Sleep masks + transfer choices", prices: [300, 525, 800, 1050, 1300] },
      { name: "Spa Headband", includes: "Headbands + 3 icons per guest", prices: [300, 525, 800, 1050, 1300] },
      { name: "Robe", includes: "Robe + transfer personalization", prices: [400, 750, 1150, 1500, 1850] },
      { name: "UGG-Style Slippers", includes: "UGG-style slippers + permanent heat transfer", prices: [650, 1300, 1950, 2600, 3250] },
      { name: "Makeup Bag", includes: "Customize with curated transfers", prices: [300, 525, 800, 1050, 1300] },
    ],
  },
  {
    group: "Patch Bars",
    blurb: "Iron-on patches and embellishments, applied on the spot.",
    items: [
      { name: "T-Shirt", includes: "T-shirts + patches", prices: [400, 700, 1000, 1300, 1600] },
      { name: "Hat", includes: "Hats + patches", prices: [400, 700, 1000, 1300, 1600] },
      { name: "Jean Jacket", includes: "Jean jackets + patches/embellishments", prices: [600, 1100, 1650, 2150, 2650] },
      { name: "Makeup Bag", includes: "Customize with curated patches", prices: [350, 625, 950, 1250, 1550] },
    ],
  },
  {
    group: "DIY Craft Bars",
    blurb: "Hands-on stations that send every guest home with a keepsake.",
    items: [
      { name: "Bandana Bracelet Bar", includes: "Bandana bracelet craft", prices: [300, 525, 800, 1050, 1300] },
      { name: "Headphone Decorating", includes: "Headphones + decorating materials", prices: [450, 825, 1250, 1650, 2050] },
      { name: "Lip Gloss Keychain Bar", includes: "Lip gloss keychains + beads/charms", prices: [300, 525, 800, 1050, 1300] },
      { name: "Charm Bar", includes: "Curated charm experience", prices: [350, 625, 950, 1250, 1550] },
      { name: "DIY Mirrors", includes: "Mirrors + gems/stickers", prices: [250, 450, 700, 950, 1200] },
      { name: "DIY Hair Brushes", includes: "Brushes + gems/stickers", prices: [250, 450, 700, 950, 1200] },
      { name: "Emi Jay-Inspired Hair Clips", includes: "Clips + gems/embellishments", prices: [300, 525, 800, 1050, 1300] },
      { name: "DIY Water Bottles", includes: "Bottles + decorating materials", prices: [300, 550, 850, 1100, 1400] },
      { name: "Bracelet + Keychain Bar", includes: "Beads, letters + charms", prices: [250, 425, 650, 900, 1150] },
      { name: "DIY Canvas Pouches", includes: "Canvas pouches + decorating materials", prices: [300, 525, 800, 1050, 1300] },
      { name: "DIY Basketball Hoops", includes: "Custom mini hoops", prices: [400, 725, 1100, 1450, 1800] },
      { name: "Magic Wand Bar", includes: "Wands + decorating materials", prices: [300, 525, 800, 1050, 1300] },
      { name: "Crown + Tiara Bar", includes: "Crowns/tiaras + decorating materials", prices: [300, 525, 800, 1050, 1300] },
      { name: "Personalized Caboodle Decorating", includes: "Personalized Caboodle + decorating materials", prices: [500, 1000, 1500, 2000, 2500] },
    ],
  },
];

export const ADD_ONS = [
  { name: "Hair Tinsel", price: 300, detail: "1 hour" },
  { name: "Mini Mani Station", price: 300, detail: "Starting price" },
  { name: "Mani + Pedi Station", price: 400, detail: "Starting price" },
  { name: "30 Minute Dance Party", price: 250, detail: "Dance instructor" },
  { name: "Customized Candy Bar", price: 350, detail: "Up to 10 guests" },
  { name: "Candy Microphone Craft", price: 250, detail: "Up to 10 guests" },
  { name: "DIY Cupcake Decorating", price: 300, detail: "Up to 10 guests" },
  { name: "Candy Necklace Station", price: 250, detail: "Up to 10 guests" },
];

export const INVITATION =
  "A complimentary emailable or uploadable party invitation is available upon request.";

export const GOOD_TO_KNOW = [
  { icon: "🎨", title: "Fully customizable", body: "All StyleChild parties can be customized based on theme, age, guest count and budget." },
  { icon: "⏱️", title: "1.5 hours at HQ", body: "Parties at the StyleChild location are 1.5 hours. Hosts have 30 minutes prior to set up additional food or décor." },
  { icon: "🎈", title: "Weekend minimum", body: "Weekend parties require a minimum of 10 children." },
  { icon: "🚐", title: "We come to you", body: "Off-site activations start at $750. Travel, delivery and additional staffing may apply." },
  { icon: "👩‍🎨", title: "Big groups, more hands", body: "Large events may require additional attendants based on the activity and number of guests." },
  { icon: "📅", title: "Reserve your date", body: "A 50% non-refundable deposit reserves the date. Final guest count and final payment are due three weeks prior." },
  { icon: "🏷️", title: "Starting pricing", body: "Pricing is starting pricing and may change based on personalization, premium products, specialty inventory or event complexity." },
  { icon: "🍕", title: "Food not included", body: "Bring your own food and cake, or ask us about the Customized Candy Bar and DIY Cupcake Decorating add-ons." },
];

export const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Necklaces" | "Rings" | "Bracelets" | "Stickers" | "Accessories";
  image: string;
  watermark: string;
  featured?: boolean;
  description: string;
};

export type GalleryItem = {
  id: string;
  image: string;
  title: string;
  category: "Products" | "Cafe" | "Events";
  href?: string;
};

export type Review = {
  name: string;
  quote: string;
  rating: number;
};

export const site = {
  name: "Raven Store",
  tagline: "Anime Jewelry & Café — Tirana",
  address: "Rruga Pjetër Bogdani, Tiranë 1015, Albania",
  phone: "+355 69 396 3699",
  instagram: "https://www.instagram.com/ravenstore.al/",
  hours: "Open until 11 PM daily",
  priceRange: "ALL 500–1,000 per person",
  rating: 4.9,
  reviewCount: 287
};

export const products: Product[] = [
  {
    id: "raven-pendant-crimson",
    name: "Raven Pendant Crimson Cross",
    price: 3200,
    category: "Necklaces",
    image: "/images/image1.jpg",
    watermark: "紅",
    featured: true,
    description: "Polished metal, blood-red stone, midnight aura."
  },
  {
    id: "raven-pendant-silver",
    name: "Raven Pendant Silver Sigil",
    price: 3400,
    category: "Necklaces",
    image: "/images/image6.jpg",
    watermark: "月",
    featured: true,
    description: "Silver geometry with an anime relic finish."
  },
  {
    id: "velvet-rose-ring",
    name: "Velvet Rose Ring",
    price: 1900,
    category: "Rings",
    image: "/images/image7.jpg",
    watermark: "影",
    description: "A small gothic bloom forged for quiet drama."
  },
  {
    id: "obsidian-bracelet",
    name: "Obsidian Thread Bracelet",
    price: 1600,
    category: "Bracelets",
    image: "/images/image9.jpg",
    watermark: "夜",
    description: "Layered cords and black stone for everyday edge."
  },
  {
    id: "akuma-tee",
    name: "Akuma Raven Tee",
    price: 2500,
    category: "Accessories",
    image: "/images/image3.jpg",
    watermark: "鴉",
    description: "Soft black cotton with a crimson raven crest."
  },
  {
    id: "moon-sticker-pack",
    name: "Moon Shrine Sticker Pack",
    price: 900,
    category: "Stickers",
    image: "/images/image8.jpg",
    watermark: "星",
    description: "Glossy mini icons for laptops, journals, and cases."
  },
  {
    id: "gothic-keychain",
    name: "Gothic Keychain Sigil",
    price: 1200,
    category: "Accessories",
    image: "/images/image4.jpg",
    watermark: "夢",
    description: "Small accessory, loud presence."
  }
];

export const menu = {
  cocktails: [
    { name: "Crimson Eclipse", price: "ALL 700", description: "Berry, citrus, smoke." },
    { name: "Tokyo After Dark", price: "ALL 750", description: "Coffee liqueur, spice, gloss." }
  ],
  hotDrinks: [
    { name: "Black Raven Latte", price: "ALL 350", description: "Velvet espresso with dark cocoa." },
    { name: "Sakura Matcha", price: "ALL 400", description: "Earthy green tea with floral foam." }
  ],
  desserts: [
    { name: "Lotus Moon Jar", price: "ALL 500", description: "Biscoff cream, crumble, and soft layers." },
    { name: "Red Velvet Shard", price: "ALL 450", description: "Silky cake with cherry glaze." }
  ],
  snacks: [
    { name: "Midnight Toasts", price: "ALL 300", description: "Crisp bites with whipped cheese." },
    { name: "Kuro Croffle", price: "ALL 420", description: "Caramelized layers, warm and sweet." }
  ]
};

export const fallbackGallery: GalleryItem[] = [
  {
    id: "g1",
    image: "/images/image1.jpg",
    title: "Crimson pendant spotlight",
    category: "Products"
  },
  {
    id: "g2",
    image: "/images/food2.jpg",
    title: "Late-night café glow",
    category: "Cafe"
  },
  {
    id: "g3",
    image: "/images/food3.jpg",
    title: "Lotus dessert ritual",
    category: "Cafe"
  },
  {
    id: "g4",
    image: "/images/image5.jpg",
    title: "Anime night gathering",
    category: "Events"
  },
  {
    id: "g5",
    image: "/images/image2.jpg",
    title: "Display case details",
    category: "Products"
  },
  {
    id: "g6",
    image: "/images/food1.jpg",
    title: "Coffee and sigils",
    category: "Cafe"
  },
  {
    id: "g7",
    image: "/images/image8.jpg",
    title: "Shelf drop highlights",
    category: "Products"
  },
  {
    id: "g8",
    image: "/images/image2.jpg",
    title: "Community table",
    category: "Events"
  },
  {
    id: "g9",
    image: "/images/food2.jpg",
    title: "Raven wall art",
    category: "Cafe"
  },
  {
    id: "g10",
    image: "/images/image9.jpg",
    title: "Jewelry gift box",
    category: "Products"
  },
  {
    id: "g11",
    image: "/images/food3.jpg",
    title: "Counter after dusk",
    category: "Cafe"
  },
  {
    id: "g12",
    image: "/images/image4.jpg",
    title: "Event night shadows",
    category: "Events"
  }
];

export const reviews: Review[] = [
  {
    name: "Griselda Pirjasi",
    quote: "A little gem in Tirana. The jewelry feels curated, the café feels cinematic, and every corner has character.",
    rating: 5
  },
  {
    name: "yuzu",
    quote: "The atmosphere is unreal. It feels like stepping into an anime side street with dessert and accessories waiting inside.",
    rating: 5
  },
  {
    name: "Night crowd favorite",
    quote: "Warm lights, dramatic details, and a menu that keeps you lingering past sunset.",
    rating: 5
  }
];

export const japaneseStrip = [
  "真夜中のカフェ",
  "秘密のジュエリー",
  "赤い月の下で",
  "ティラナの夜",
  "アニメの世界へ"
];

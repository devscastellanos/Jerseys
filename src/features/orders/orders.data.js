import { slugify } from "../../utils/formatters";

export const CUSTOM_CATEGORIES = [
  {
    id: "selecciones", label: "Selecciones", icon: "🌍",
    items: [
      { name: "Argentina",  flag: "🇦🇷", gradient: "linear-gradient(135deg,#74b9e7,#fff 50%,#74b9e7)", 
        photos: ["/images/Argentina/1.jpg", "/images/Argentina/2.jpg","/images/Argentina/3.jpg", "/images/Argentina/4.jpg", "/images/Argentina/5.jpg"] },
      { name: "Portugal",   flag: "🇵🇹", gradient: "linear-gradient(135deg,#006600,#cc0000)", version: "Alternativa",
        photos: ["/images/Portugal/1.jpg", "/images/Portugal/2.jpg","/images/Portugal/3.jpg", "/images/Portugal/4.jpg", "/images/Portugal/5.jpg"] },
      { name: "Brasil",     flag: "🇧🇷", gradient: "linear-gradient(135deg,#009c3b,#ffdf00)" },
      { name: "Francia",    flag: "🇫🇷", gradient: "linear-gradient(135deg,#002395,#fff 50%,#ed2939)" },
      { name: "España",     flag: "🇪🇸", gradient: "linear-gradient(135deg,#c60b1e,#ffc400 50%,#c60b1e)" },
      { name: "Alemania",   flag: "🇩🇪", gradient: "linear-gradient(135deg,#111,#d00 50%,#ffce00)" },
      
    ],
  },
  {
    id: "premier", label: "Premier League", icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    items: [
      { name: "Manchester City", flag: "🩵", gradient: "linear-gradient(135deg,#6cabdd,#1c2c5b)" },
      { name: "Arsenal",         flag: "❤️", gradient: "linear-gradient(135deg,#ef0107,#fff)" },
      { name: "Liverpool",       flag: "🔴", gradient: "linear-gradient(135deg,#c8102e,#00b2a9)" },
      { name: "Chelsea",         flag: "💙", gradient: "linear-gradient(135deg,#034694,#fff)" },
      { name: "Manchester Utd",  flag: "♟️", gradient: "linear-gradient(135deg,#da291c,#ffe500)" },
      { name: "Tottenham",       flag: "🤍", gradient: "linear-gradient(135deg,#132257,#fff)" },
    ],
  },
  {
    id: "laliga", label: "La Liga", icon: "🇪🇸",
    items: [
      { name: "Real Madrid",     flag: "👑", gradient: "linear-gradient(135deg,#f5f5f5,#febe10)" },
      { name: "FC Barcelona",    flag: "🔵", gradient: "linear-gradient(135deg,#a50044,#004d98)" },
      { name: "Atletico Madrid", flag: "❤️", gradient: "linear-gradient(135deg,#cb3524,#272e61)" },
      { name: "Sevilla",         flag: "⚪", gradient: "linear-gradient(135deg,#f0f0f0,#d4021d)" },
      { name: "Real Betis",      flag: "💚", gradient: "linear-gradient(135deg,#00954c,#fff)" },
    ],
  },
  {
    id: "seriea", label: "Serie A", icon: "🇮🇹",
    items: [
      { name: "Inter Milan", flag: "⚫", gradient: "linear-gradient(135deg,#010e80,#111)" },
      { name: "AC Milan",    flag: "🔴", gradient: "linear-gradient(135deg,#fb090b,#111)" },
      { name: "Juventus",    flag: "⚪", gradient: "linear-gradient(135deg,#111,#e8e8e8)" },
      { name: "Napoli",      flag: "💙", gradient: "linear-gradient(135deg,#12a0d7,#fff)" },
      { name: "Roma",        flag: "🟡", gradient: "linear-gradient(135deg,#8e1f2f,#f5a621)" },
    ],
  },
  {
    id: "otros", label: "Otros", icon: "🌐",
    items: [
      { name: "PSG",               flag: "🗼", gradient: "linear-gradient(135deg,#003370,#d00027)" },
      { name: "Bayern Munich",     flag: "🔴", gradient: "linear-gradient(135deg,#dc052d,#fff)" },
      { name: "Borussia Dortmund", flag: "🟡", gradient: "linear-gradient(135deg,#fde100,#111)" },
      { name: "Ajax",              flag: "⚡", gradient: "linear-gradient(135deg,#d2122e,#fff)" },
      { name: "Boca Juniors",      flag: "💛", gradient: "linear-gradient(135deg,#003087,#f5c518)" },
      { name: "River Plate",       flag: "❤️", gradient: "linear-gradient(135deg,#fff,#ee0000 50%,#fff)" },
      { name: "Flamengo",          flag: "🔥", gradient: "linear-gradient(135deg,#e30000,#111)" },
      { name: "Nacional Col",      flag: "🟢", gradient: "linear-gradient(135deg,#007a37,#fff)" },
      { name: "Millonarios",       flag: "💙", gradient: "linear-gradient(135deg,#0047ab,#fff)" },
      { name: "America de Cali",   flag: "🔴", gradient: "linear-gradient(135deg,#dd1e2f,#fff)" },
    ],
  },
];

export const ALL_CUSTOM = CUSTOM_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    slug: "encargo-" + slugify(item.name),
    category: cat.label,
    categoryId: cat.id,
    isCustom: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    version: "Local", // ← configurable por equipo
    price: null,
    badges: [{ label: "POR ENCARGO", color: "#003893" }],
    desc: `Camiseta oficial ${item.name}. Pedido por encargo, 12–15 días hábiles. Precio y disponibilidad por WhatsApp.`,
    photos: item.photos ?? [],
  }))
);

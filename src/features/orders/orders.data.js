import { version } from "react";
import { slugify } from "../../utils/formatters";

export const CUSTOM_CATEGORIES = [
  {
    id: "selecciones", label: "Selecciones", icon: "🌍",
    items: [
      { name: "Argentina",  flag: "🇦🇷", gradient: "linear-gradient(135deg,#74b9e7,#fff 50%,#74b9e7)", price: "95000",
        photos: ["/images/Argentina/1.jpg", "/images/Argentina/2.jpg","/images/Argentina/3.jpg", "/images/Argentina/4.jpg", "/images/Argentina/5.jpg", "/images/Argentina/6.jpg"] },
      { name: "Portugal",version: "Alternativa",   flag: "🇵🇹", gradient: "linear-gradient(135deg,#006600,#cc0000)", price: "95000",
        photos: ["/images/Portugal/1.jpg", "/images/Portugal/2.jpg","/images/Portugal/3.jpg", "/images/Portugal/4.jpg", "/images/Portugal/5.jpg", "/images/Portugal/6.jpg"] },
      { name: "Brasil",     flag: "🇧🇷", gradient: "linear-gradient(135deg,#009c3b,#ffdf00)", price: "95000",
        photos: ["/images/Brasil/1.jpg", "/images/Brasil/2.jpg","/images/Brasil/3.jpg", "/images/Brasil/4.jpg", "/images/Brasil/5.jpg"]
       },
      { slug: "ColombiaVisitante",
        name: "Colombia Visitante",    flag: "🇫🇷", gradient: "linear-gradient(135deg,#002395,#fff 50%,#ed2939)", price: "95000", version: "Visitante",
        photos: ["/images/ColVisitante/1.jpg", "/images/ColVisitante/2.jpg","/images/ColVisitante/3.jpg", "/images/ColVisitante/4.jpg", "/images/ColVisitante/5.jpg", "/images/ColVisitante/6.jpg", "/images/ColVisitante/7.jpg"] },
      { name: "España",     flag: "🇪🇸", gradient: "linear-gradient(135deg,#c60b1e,#ffc400 50%,#c60b1e)", price: "95000",
        photos: ["/images/España/1.jpg", "/images/España/2.jpg","/images/España/3.jpg", "/images/España/4.jpg", "/images/España/5.jpg"] },
      { name: "Alemania",   flag: "🇩🇪", gradient: "linear-gradient(135deg,#111,#d00 50%,#ffce00)", price: "95000",
        photos: ["/images/Alemania/1.jpg", "/images/Alemania/2.jpg","/images/Alemania/3.jpg", "/images/Alemania/4.jpg", "/images/Alemania/5.jpg", "/images/Alemania/6.jpg"] },
      
    ],
  },
  {
    id: "premier", label: "Premier League", icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    items: [
      { name: "Manchester City", flag: "🩵", gradient: "linear-gradient(135deg,#6cabdd,#1c2c5b)", price: "95000", version: "Alternativa",
        photos: ["/images/City/1.jpg", "/images/City/2.jpg","/images/City/3.jpg", "/images/City/4.jpg"]
       },
      { name: "Arsenal",         flag: "❤️", gradient: "linear-gradient(135deg,#ef0107,#fff)", price: "95000", version: "Visitante",
        photos: ["/images/Arsenal/1.jpg", "/images/Arsenal/2.jpg","/images/Arsenal/3.jpg", "/images/Arsenal/4.jpg", "/images/Arsenal/5.jpg"]
       },
      { name: "Liverpool",       flag: "🔴", gradient: "linear-gradient(135deg,#c8102e,#00b2a9)", price: "95000",
        photos: ["/images/Liverpool/1.jpg", "/images/Liverpool/2.jpg","/images/Liverpool/3.jpg", "/images/Liverpool/4.jpg", "/images/Liverpool/5.jpg"]
       },
      { name: "Chelsea",         flag: "💙", gradient: "linear-gradient(135deg,#034694,#fff)", price: "95000",
        photos: ["/images/Chelsea/1.jpg", "/images/Chelsea/2.jpg","/images/Chelsea/3.jpg", "/images/Chelsea/4.jpg", "/images/Chelsea/5.jpg"]
       },
      { name: "Manchester Utd",  flag: "♟️", gradient: "linear-gradient(135deg,#da291c,#ffe500)", price: "95000", version: "Visitante",
        photos: ["/images/United/1.jpg", "/images/United/2.jpg","/images/United/3.jpg", "/images/United/4.jpg", "/images/United/5.jpg"]
       },
    ],
  },
  {
    id: "otros", label: "Otros", icon: "🌐",
    items: [
      { name: "Real Madrid",     flag: "👑", gradient: "linear-gradient(135deg,#f5f5f5,#febe10)", price: "95000",
        photos: ["/images/RealMadrid/1.jpg", "/images/RealMadrid/2.jpg","/images/RealMadrid/3.jpg", "/images/RealMadrid/4.jpg", "/images/RealMadrid/5.jpg"],},
      { name: "FC Barcelona",    flag: "🔵", gradient: "linear-gradient(135deg,#a50044,#004d98)", price: "95000",
        photos: ["/images/Barcelona/1.jpg", "/images/Barcelona/2.jpg","/images/Barcelona/3.jpg", "/images/Barcelona/4.jpg", "/images/Barcelona/5.jpg"],},
      { name: "PSG",               flag: "🗼", gradient: "linear-gradient(135deg,#003370,#d00027)", price: "95000",
        photos: ["/images/PSG/1.jpg", "/images/PSG/2.jpg","/images/PSG/3.jpg", "/images/PSG/4.jpg", "/images/PSG/5.jpg"],},
      { name: "Nacional",      flag: "🟢", gradient: "linear-gradient(135deg,#007a37,#fff)", price: "95000",
        photos: ["/images/Nacional/1.jpg", "/images/Nacional/2.jpg","/images/Nacional/3.jpg", "/images/Nacional/4.jpg", "/images/Nacional/5.jpg"],},
      { name: "Millonarios",       flag: "💙", gradient: "linear-gradient(135deg,#0047ab,#fff)", price: "95000",
        photos: ["/images/Millonarios/1.jpg", "/images/Millonarios/2.jpg","/images/Millonarios/3.jpg", "/images/Millonarios//4.jpg", "/images/Millonarios//5.jpg"],},
      { name: "America de Cali",   flag: "🔴", gradient: "linear-gradient(135deg,#dd1e2f,#fff)", price: "95000",
        photos: ["/images/America/1.jpg", "/images/America/2.jpg","/images/America/3.jpg", "/images/America/4.jpg", "/images/America/5.jpg"],},
      { name: "Bayern Munich",     flag: "🔴", gradient: "linear-gradient(135deg,#dc052d,#fff)", price: "95000",
        photos: ["/images/Bayern/1.jpg", "/images/Bayern/2.jpg","/images/Bayern/3.jpg", "/images/Bayern/4.jpg", "/images/Bayern/5.jpg"],
       },
    ],
  },
];

export const ALL_CUSTOM = CUSTOM_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    slug: item.slug ?? "encargo-" + slugify(item.name),
    category: cat.label,
    categoryId: cat.id,
    isCustom: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    version: item.version ?? "Local",
    price: item.price ?? "95000",
    badges: [{ label: "POR ENCARGO", color: "#003893" }],
    desc: `Camiseta oficial ${item.name}. Pedido por encargo, 12–15 días hábiles. Precio y disponibilidad por WhatsApp.`,
    photos: item.photos ?? [],
  }))
);

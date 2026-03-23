export const COLOMBIA_PRODUCTS = [
  {
    slug: "ColombiaMenPlayer",
    name: "Colombia — Jugador Hombre",
    type: "jugador", gender: "hombre",
    price: 95000,
    badges: [{ label: "JUGADOR", color: "#e8b800" }, { label: "HOMBRE", color: "#1a1a1a" }],
    desc: "Versión auténtica Player Issue. Tela Dri-FIT ADV, corte ajustado, igual a la que usa la Selección en cancha.",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    version: "Local", // ← cambia a "Visitante" cuando quieras
    emoji: "🏅",
    gradient: "linear-gradient(135deg,#f9d923,#f0a500)",
    photos: ["/images/Colombia/MenPlayer/1.jpeg", "/images/Colombia/MenPlayer/2.jpg", "/images/Colombia/MenPlayer/3.jpg", "/images/Colombia/MenPlayer/4.jpg", "/images/Colombia/MenPlayer/5.jpeg"], 
  },
  {
    slug: "ColombiaMenFan",
    name: "Colombia — Fan Hombre",
    type: "fan", gender: "hombre",
    price: 75000,
    badges: [{ label: "FAN", color: "#003893" }, { label: "HOMBRE", color: "#1a1a1a" }],
    desc: "Réplica Fan Edition. Corte regular cómodo para uso diario, tallaje amplio de S hasta 4XL.",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    version: "Local",
    emoji: "⭐",
    gradient: "linear-gradient(135deg,#003893,#0054d1)",
    photos: ["images/Colombia/MenFan/1.jpeg", "images/Colombia/MenFan/2.jpg", "images/Colombia/MenFan/3.jpg", "images/Colombia/MenFan/4.jpg", "images/Colombia/MenFan/5.jpg"],
  },
  {
    slug: "ColombiaWomenPlayer",
    name: "Colombia — Jugador Mujer",
    type: "jugador", gender: "mujer",
    price: 95000,
    badges: [{ label: "JUGADOR", color: "#e8b800" }, { label: "MUJER", color: "#9b2c6b" }],
    desc: "Corte femenino Player Issue. Tela premium técnica, diseño selección oficial.",
    sizes: ["XS", "S", "M", "L", "XL"],
    version: "Local",
    emoji: "🌟",
    gradient: "linear-gradient(135deg,#f9d923,#e8b800)",
    photos: ["/images/Colombia/WomenPlayer/5.jpg", "/images/Colombia/WomenPlayer/2.jpg", "/images/Colombia/WomenPlayer/3.jpg", "/images/Colombia/WomenPlayer/4.jpg", "/images/Colombia/WomenPlayer/6.jpg"],
  },
  {
    slug: "ColombiaWomenFan",
    name: "Colombia — Fan Mujer",
    type: "fan", gender: "mujer",
    price: 75000,
    badges: [{ label: "FAN", color: "#c8102e" }, { label: "MUJER", color: "#9b2c6b" }],
    desc: "Fan Edition para mujer. Disponible en corte regular y crop fit. Cómoda y estilosa.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    version: "Local",
    emoji: "💛",
    gradient: "linear-gradient(135deg,#c8102e,#e8374a)",
    photos: ["images/Colombia/WomenFan/1.jpg", "images/Colombia/WomenFan/2.jpg", "images/Colombia/WomenFan/3.jpg", "images/Colombia/WomenFan/4.jpg","images/Colombia/WomenFan/5.jpg"],
  },
  {
    slug: "ColombiaKid",
    name: "Colombia — Niño (Encargo)",
    type: "fan", gender: "nino",
    price: 95000,
    badges: [{ label: "KID KIT", color: "#f97316" }, { label: "NIÑO", color: "#15803d" }],
    desc: "Kit completo para niño: camiseta + pantaloneta. Tallas de 3 a 14 años. Ideal para el pequeño hincha de la Tricolor.",
    sizes: ["3-4", "4-5", "5-6", "6-7", "8-9", "10-11", "12-13"],
    version: "Local",
    emoji: "⚽",
    gradient: "linear-gradient(135deg,#f9d923,#003893)",
    photos: ["/images/Colombia/Kid/1.jpg","/images/Colombia/Kid/2.jpg","/images/Colombia/Kid/3.jpg","/images/Colombia/Kid/4.jpg","/images/Colombia/Kid/5.jpg"],
  },
   {
    slug: "ColombiaTraining",
    name: "Colombia — Entrenamiento (Encargo)",
    type: "player", gender: "hombre",
    price: 90000,
    badges: [{ label: "ENTRENAMIENTO", color: "#16cbf9" }, { label: "HOMBRE", color: "#1a1a1a" }],
    desc: "Camiseta de entrenamiento oficial de la Selección Colombia. Perfecta para entrenar o para un look casual con estilo futbolero.",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    version: "-",
    emoji: "⚽",
    gradient: "linear-gradient(135deg,#f9d923,#003893)",
    photos: ["/images/Colombia/WhiteTraining/1.jpg","/images/Colombia/WhiteTraining/2.jpg","/images/Colombia/WhiteTraining/3.jpg"],
  },
    { 
    slug: "ColombiaPresentation",
    name: "Colombia Presentacion (Encargo)",
    type: "player", gender: "hombre",
    price: 98000,
    badges: [{ label: "PRESENTACIÓN", color: "#5a16f9" }, { label: "HOMBRE", color: "#1a1a1a" }],
    desc: "Camiseta de presentación oficial de la Selección Colombia. Usada en eventos y presentaciones, con un diseño elegante y detalles exclusivos.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    version: "-",
    emoji: "⚽",
    gradient: "linear-gradient(135deg,#f9d923,#003893)",
    photos: ["/images/Colombia/Presentacion/1.jpg", "/images/Colombia/Presentacion/2.jpg","/images/Colombia/Presentacion/3.jpg", "/images/Colombia/Presentacion/4.jpg", "/images/Colombia/Presentacion/5.jpg"] },
];
export const DIFERENCIAS = [
  {
    q: "¿Cuál es la diferencia entre camiseta “Fans / Stadium” y camiseta “Jugador / Player / Match”?",
    a: `La diferencia entre camiseta “Fans / Stadium” y camiseta “Jugador / Player / Match” es básicamente cómo está hecha y para qué uso.

1) Fit (cómo queda puesta)
Fans (Stadium / Replica): corte más “normal” y cómodo. No queda tan pegada.
Jugador (Player / Match): corte entallado/ajustado, pensado para rendimiento y que “no te agarren” en juego.

2) Tela y sensación
Fans: tela más gruesita y resistente para uso diario.
Jugador: tela más liviana, más respirable; se siente más “técnica”.

3) Detalles y acabados
Fans: logos y escudos suelen venir bordados o en parches más “durables”.
Jugador: muchas veces vienen termopegados (heat-pressed) para pesar menos. Se ven brutales, pero son más delicados con lavadas si no las cuidas.

4) Ventilación
Fans: ventilación normal.
Jugador: trae paneles, perforaciones o zonas extra de ventilación (depende del club/marca).

5) Precio y durabilidad
Fans: generalmente más barata y aguanta mejor el trajín.
Jugador: más cara y requiere más cuidado (lavar al revés, agua fría, no secadora).`,
  },
];
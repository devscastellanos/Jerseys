import { useState } from "react";

const FAQS = [
  { q: "¿Cómo son las tallas?",                      a: "Las tallas son estándar Colombia. Si tienes dudas entre dos tallas, te recomendamos la más grande." },
  { q: "¿Cuánto demora el envío?",                   a: "Envíos a todo Colombia en 2–5 días hábiles. Medellín y Bogotá en 24–48 horas. Envío gratis en pedidos mayores a $150.000." },
  { q: "¿Cuál es la diferencia entre Jugador y Fan?", a: "La versión Jugador es la misma que usa la selección en cancha: tela técnica, corte ajustado y acabados premium. La Fan es igual visualmente pero más cómoda para uso diario." },
  { q: "¿Cómo pago?",                                a: "Aceptamos Nequi/Daviplata, PSE, efectivo y contra entrega en ciudades principales." },
  { q: "¿Cuánto demoran los encargos?",              a: "Los pedidos por encargo tienen tiempo de entrega de 5–10 días hábiles. Confirmamos disponibilidad antes de recibir cualquier pago." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      {FAQS.map((f, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e8e8e8", cursor: "pointer" }} onClick={() => setOpen(open === i ? null : i)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0" }}>
            <span style={{ fontWeight: 700, fontSize: "0.93rem" }}>{f.q}</span>
            <span style={{ fontSize: "1.2rem", color: "#003893", transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)", display: "block" }}>+</span>
          </div>
          {open === i && (
            <div style={{ paddingBottom: 16, color: "#555", fontSize: "0.87rem", lineHeight: 1.7 }}>
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

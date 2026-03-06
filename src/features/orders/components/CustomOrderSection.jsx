import { useState } from "react";
import { CUSTOM_CATEGORIES, ALL_CUSTOM } from "../orders.data";
import CustomJerseyCard                  from "./CustomJerseyCard";
import { whatsappBase }                  from "../../../utils/whatsapp";

export default function CustomOrderSection({ navigate }) {
  const [activeTab, setActiveTab] = useState("selecciones");
  const currentItems = ALL_CUSTOM.filter((i) => i.categoryId === activeTab);

  return (
    <section id="encargos" style={{ padding: "72px 24px", background: "#f0f4ff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#003893,#0054d1)", borderRadius: 30, padding: "6px 18px", marginBottom: 14 }}>
            <span>🌍</span>
            <span style={{ color: "#f9d923", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Pedidos por Encargo</span>
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", textTransform: "uppercase", margin: "0 0 10px" }}>
            Más camisetas disponibles
          </h2>
          <p style={{ color: "#555", fontSize: "0.93rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Elige tallas directamente o haz clic en "Ver detalles" para ver fotos y hacer tu pedido completo.
          </p>
        </div>

        {/* tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 30 }}>
          {CUSTOM_CATEGORIES.map((cat) => (
            <button
              key={cat.id} onClick={() => setActiveTab(cat.id)}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 30, border: "2px solid", borderColor: activeTab === cat.id ? "#003893" : "#d0d8f0", background: activeTab === cat.id ? "#003893" : "#fff", color: activeTab === cat.id ? "#fff" : "#444", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", transition: "all 0.18s", boxShadow: activeTab === cat.id ? "0 4px 14px rgba(0,56,147,0.25)" : "none" }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12 }}>
          {currentItems.map((item, i) => (
            <CustomJerseyCard key={i} item={item} navigate={navigate} />
          ))}
          {/* consult card */}
          <div
            onClick={() => { window.open(`${whatsappBase()}?text=${encodeURIComponent("Hola! Busco una camiseta que no está en el catálogo. ¿La consiguen?")}`, "_blank"); }}
            style={{ background: "linear-gradient(135deg,#f9d923,#e8b800)", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "14px 10px", textAlign: "center", minHeight: 140, transition: "transform 0.18s,box-shadow 0.18s", boxShadow: "0 2px 12px rgba(248,215,35,0.3)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(248,215,35,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(248,215,35,0.3)"; }}
          >
            <span style={{ fontSize: "1.8rem", marginBottom: 6 }}>➕</span>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.82rem", color: "#0a0a0a", lineHeight: 1.3, margin: 0 }}>¿No la ves? Consúltanos</p>
          </div>
        </div>

        {/* info bar */}
        <div style={{ marginTop: 28, background: "#fff", borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", flexWrap: "wrap" }}>
          <span style={{ fontSize: "1.4rem" }}>⏱️</span>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.87rem" }}>Pedidos por encargo</p>
            <p style={{ margin: "2px 0 0", fontSize: "0.8rem", color: "#666", lineHeight: 1.5 }}>
              Tiempo estimado <strong>5–10 días hábiles</strong>. Precio varía por equipo. Confirmamos sin compromiso.
            </p>
          </div>
          <a href={whatsappBase()} target="_blank" rel="noopener noreferrer" style={{ background: "#003893", color: "#fff", borderRadius: 12, padding: "10px 20px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
            📲 Consultar
          </a>
        </div>
      </div>
    </section>
  );
}

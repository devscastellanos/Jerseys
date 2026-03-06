import { useState } from "react";
import Badge        from "../../../components/ui/Badge";
import JerseyArtBox from "../../../components/ui/JerseyArtBox";
import MiniSizeQty  from "./MiniSizeQty";
import { fmt, totalUnits, totalAmount } from "../../../utils/formatters";
import { buildWhatsappMsg, whatsappLink } from "../../../utils/whatsapp";

export default function ProductCard({ p, navigate }) {
  const [items, setItems] = useState([]);
  const goTo = () => navigate(`#/producto/${p.slug}`);

  const units    = totalUnits(items);
  const amount   = totalAmount(items, p.price);
  const canOrder = units > 0;

  return (
    <div
      style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", transition: "transform 0.2s,box-shadow 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.13)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"; }}
    >
      {/* image */}
      <div style={{ padding: "18px 18px 10px", background: "#fafafa", cursor: "pointer" }} onClick={goTo}>
        <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
          {p.photos?.length > 0
            ? <img src={p.photos[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <JerseyArtBox gradient={p.gradient} emoji={p.emoji} height="100%" fontSize="3rem" />
          }
        </div>
      </div>

      <div style={{ padding: "14px 18px 18px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {p.badges.map((b) => <Badge key={b.label} label={b.label} color={b.color} />)}
        </div>

        <h3 onClick={goTo} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.2rem", lineHeight: 1.1, cursor: "pointer" }}>
          {p.name}
        </h3>

        {/* version badge */}
        {p.version && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.07em" }}>Versión:</span>
            <span style={{ background: "#003893", color: "#fff", borderRadius: 20, padding: "3px 12px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.05em" }}>
              {p.version}
            </span>
          </div>
        )}

        <MiniSizeQty sizes={p.sizes} items={items} onChange={setItems} />

        {/* price row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid #f0f0f0" }}>
          <div>
            <p style={{ margin: 0, fontSize: "0.7rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.06em" }}>Precio unit.</p>
            <p style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", fontWeight: 900 }}>{fmt(p.price)}</p>
          </div>
          {amount !== null && units > 0 && (
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: 0, fontSize: "0.7rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.06em" }}>Total</p>
              <p style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", fontWeight: 900, color: "#003893" }}>{fmt(amount)}</p>
            </div>
          )}
        </div>

        <a
          href={canOrder ? whatsappLink(buildWhatsappMsg(p, items, false)) : "#"}
          onClick={(e) => { if (!canOrder) e.preventDefault(); }}
          target="_blank" rel="noopener noreferrer"
          style={{ display: "block", textAlign: "center", background: canOrder ? "linear-gradient(135deg,#f9d923,#e8b800)" : "#ddd", color: canOrder ? "#0a0a0a" : "#999", borderRadius: 12, padding: "11px 16px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase", boxShadow: canOrder ? "0 4px 12px rgba(248,215,35,0.4)" : "none", transition: "all 0.15s", cursor: canOrder ? "pointer" : "not-allowed" }}
        >
          {canOrder ? `Pedir ${units} ud${units !== 1 ? "s" : ""} 📲` : "Selecciona tallas →"}
        </a>
      </div>
    </div>
  );
}

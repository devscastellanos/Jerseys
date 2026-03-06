import { useState, useEffect } from "react";
import Badge        from "../components/ui/Badge";
import PhotoGallery from "../features/product/components/PhotoGallery";
import SizeQtyTable from "../features/catalog/components/SizeQtyTable";
import { findProduct }                   from "../utils/products";
import { fmt, totalUnits, totalAmount }  from "../utils/formatters";
import { buildWhatsappMsg, whatsappLink } from "../utils/whatsapp";

export default function ProductPage({ slug, navigate }) {
  const product  = findProduct(slug);
  const [items, setItems] = useState([]);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  useEffect(() => { setItems([]); }, [slug]);

  if (!product) return (
    <div style={{ textAlign: "center", padding: "80px 24px" }}>
      <p style={{ fontSize: "3rem" }}>😕</p>
      <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2rem", marginBottom: 12 }}>
        Producto no encontrado
      </h2>
      <button
        onClick={() => navigate("#/")}
        style={{ background: "#003893", color: "#fff", border: "none", borderRadius: 12, padding: "12px 24px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1rem", cursor: "pointer" }}
      >
        ← Volver al inicio
      </button>
    </div>
  );

  const isCustom = product.isCustom;
  const units    = totalUnits(items);
  const amount   = totalAmount(items, product.price);
  const canOrder = units > 0;
  const waMsg    = buildWhatsappMsg(product, items, isCustom);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f3" }}>

      {/* breadcrumb */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#888", flexWrap: "wrap" }}>
          <button onClick={() => navigate("#/")} style={{ background: "none", border: "none", cursor: "pointer", color: "#003893", fontWeight: 700, fontSize: "0.82rem", padding: 0 }}>Inicio</button>
          <span>›</span>
          {isCustom && <><span>{product.category}</span><span>›</span></>}
          <span style={{ color: "#0a0a0a", fontWeight: 600 }}>{product.name}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>

          {/* gallery */}
          <PhotoGallery
            photos={product.photos}
            gradient={product.gradient}
            emoji={product.flag || product.emoji}
          />

          {/* info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {product.badges.map((b) => <Badge key={b.label} label={b.label} color={b.color} />)}
              {isCustom && <Badge label={product.category} color="#555" />}
            </div>

            <div>
              <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.6rem)", lineHeight: 1.05, textTransform: "uppercase" }}>
                {product.name}
              </h1>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, marginTop: 8 }}>{product.desc}</p>
            </div>

            {/* price */}
            <div style={{ borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "14px 0" }}>
              {product.price ? (
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2.2rem" }}>{fmt(product.price)}</span>
                  <span style={{ color: "#888", fontSize: "0.82rem" }}>por unidad</span>
                </div>
              ) : (
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff8e1", border: "1px solid #f9d923", borderRadius: 10, padding: "10px 14px" }}>
                  <span>💬</span>
                  <span style={{ fontWeight: 700, fontSize: "0.87rem", color: "#7a5800" }}>Precio por consultar en WhatsApp</span>
                </div>
              )}
            </div>

            {/* version */}
            {product.version && (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: "0.77rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>Versión:</span>
                <span style={{ background: "#003893", color: "#fff", borderRadius: 20, padding: "5px 16px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.05em" }}>
                  {product.version}
                </span>
              </div>
            )}

            {/* size + qty */}
            <SizeQtyTable sizes={product.sizes} items={items} onChange={setItems} />

            {/* total */}
            {amount !== null && units > 0 && (
              <div style={{ background: "#f0f4ff", borderRadius: 12, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#555" }}>Total ({units} ud{units !== 1 ? "s" : ""})</span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "#003893" }}>{fmt(amount)}</span>
              </div>
            )}

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href={canOrder ? whatsappLink(waMsg) : "#"}
                onClick={(e) => { if (!canOrder) e.preventDefault(); }}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: canOrder ? "#25d366" : "#ccc", color: "#fff", borderRadius: 14, padding: "15px 24px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.05em", textTransform: "uppercase", boxShadow: canOrder ? "0 4px 18px rgba(37,211,102,0.35)" : "none", transition: "transform 0.15s,background 0.2s", cursor: canOrder ? "pointer" : "not-allowed" }}
                onMouseEnter={(e) => { if (canOrder) e.currentTarget.style.transform = "scale(1.02)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                📲 {isCustom ? "Consultar disponibilidad" : "Pedir por WhatsApp"}
              </a>
              {!canOrder && (
                <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#c8102e", fontWeight: 600 }}>
                  ⚠️ Agrega al menos una talla con cantidad para pedir
                </p>
              )}
            </div>

            {/* encargo notice */}
            {isCustom && (
              <div style={{ background: "#fff8e1", border: "1px solid #f9d923", borderRadius: 14, padding: "14px 16px", display: "flex", gap: 10 }}>
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>⏱️</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#7a5800", marginBottom: 3 }}>Pedido por encargo</p>
                  <p style={{ fontSize: "0.8rem", color: "#8a6500", lineHeight: 1.6 }}>
                    Tiempo estimado 5–10 días hábiles. Confirmamos disponibilidad antes de recibir pago.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <button
            onClick={() => navigate("#/")}
            style={{ background: "none", border: "2px solid #ddd", borderRadius: 12, padding: "10px 24px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", color: "#555", transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#003893"; e.currentTarget.style.color = "#003893"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ddd"; e.currentTarget.style.color = "#555"; }}
          >
            ← Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
}

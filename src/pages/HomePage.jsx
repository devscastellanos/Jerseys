import { useState } from "react";
import ProductCard from "../features/catalog/components/ProductCard";
import FilterBar from "../features/catalog/components/FilterBar";
import CustomOrderSection from "../features/orders/components/CustomOrderSection";
import FAQ from "../features/catalog/components/FAQ";
import Footer from "../components/layout/Footer";
import { COLOMBIA_PRODUCTS } from "../features/catalog/catalog.data";
import { whatsappBase } from "../utils/whatsapp";

export default function HomePage({ navigate }) {
  const [filter, setFilter] = useState("all");

  const filtered = COLOMBIA_PRODUCTS.filter(
    (p) => filter === "all" || p.gender === filter || p.type === filter,
  );

  return (
    <>
      {/* ── HERO ── */}
      <header
        style={{
          background:
            "linear-gradient(135deg,#003893 0%,#001f5c 55%,#0a0a0a 100%)",
          padding: "80px 24px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {[
          { s: 500, t: -120, r: -80 },
          { s: 300, b: -80, l: -60 },
          { s: 180, t: 40, l: "30%" },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: c.s,
              height: c.s,
              borderRadius: "50%",
              border: "1.5px solid rgba(249,217,35,0.45)",
              top: c.t,
              bottom: c.b,
              left: c.l,
              right: c.r,
              pointerEvents: "none",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background:
              "linear-gradient(90deg,#f9d923 33%,#003893 33%,#003893 66%,#c8102e 66%)",
          }}
        />

        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(249,217,35,0.12)",
              border: "1px solid rgba(249,217,35,0.4)",
              borderRadius: 30,
              padding: "6px 18px",
              marginBottom: 20,
              color: "#f9d923",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            ⚽ Colección Oficial Mundial 2026
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem,7vw,5rem)",
              color: "#fff",
              lineHeight: 1.0,
              marginBottom: 20,
              textTransform: "uppercase",
            }}
          >
            Viste los colores{" "}
            <span style={{ color: "#f9d923", display: "block" }}>
              de Colombia 🇨🇴
            </span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto 36px",
            }}
          >
            Camisetas para hombre y mujer, versión{" "}
            <strong style={{ color: "#f9d923" }}>Jugador</strong> y{" "}
            <strong style={{ color: "#f9d923" }}>Fan</strong>. Envíos a todo el
            país.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#catalogo"
              style={{
                background: "linear-gradient(135deg,#f9d923,#e8b800)",
                color: "#0a0a0a",
                borderRadius: 14,
                padding: "14px 28px",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: "1.05rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "0 6px 24px rgba(248,215,35,0.45)",
              }}
            >
              Ver Catálogo →
            </a>
            <a
              href="#encargos"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 14,
                padding: "14px 28px",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              🌍 Por encargo
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
              justifyContent: "center",
              marginTop: 52,
              flexWrap: "wrap",
            }}
          >
            {[
              ["5", "Modelos"],
              ["1.1", "Calidad"],
              ["🚀", "Envío rápido"],
            ].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    color: "#f9d923",
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.82rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── CATALOG ── */}
      <section
        id="catalogo"
        style={{ padding: "72px 24px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p
            style={{
              color: "#003893",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Catálogo 2026
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem,4vw,3rem)",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Elige tu camiseta
          </h2>
          <FilterBar filter={filter} setFilter={setFilter} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))",
            gap: 24,
          }}
        >
          {filtered.map((p) => (
            <ProductCard key={p.slug} p={p} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* ── CUSTOM ORDERS ── */}
      <CustomOrderSection navigate={navigate} />

      {/* ── WHY US ── */}
      <section style={{ background: "#0a0a0a", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 900,
                fontSize: "2.2rem",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              ¿Por qué elegirnos?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
            }}
          >
            {[
              [
                "🏆",
                "Calidad garantizada",
                "Misma tela y diseño que la selección oficial.",
              ],
              [
                "📦",
                "Envío a todo Colombia",
                "Despachos desde Bogotá. Tracking incluido.",
              ],
              [
                "👕",
                "Tallas S a 4XL",
                "Para todos los cuerpos. Hombre, mujer y niño.",
              ],
              [
                "💬",
                "Atención personalizada",
                "Resolvemos tus dudas por WhatsApp al instante.",
              ],
            ].map(([icon, t, d]) => (
              <div
                key={t}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: "28px 22px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    color: "#f9d923",
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                >
                  {t}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.86rem",
                    lineHeight: 1.6,
                  }}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#003893",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Preguntas frecuentes
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem,3.5vw,2.5rem)",
              textTransform: "uppercase",
              marginBottom: 36,
            }}
          >
            Todo lo que necesitas saber
          </h2>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg,#f9d923,#e8b800,#f9d923)",
          padding: "72px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background:
              "linear-gradient(90deg,#003893 33%,#c8102e 33%,#c8102e 66%,#003893 66%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: 12 }}>🇨🇴⚽</div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#0a0a0a",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            ¡No te quedes sin la tuya!
          </h2>
          <p
            style={{
              color: "rgba(0,0,0,0.6)",
              fontSize: "1rem",
              marginBottom: 28,
            }}
          >
            Stock limitado. Haz tu pedido ahora y recíbela antes del Mundial.
          </p>
          <a
            href={whatsappBase()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#003893",
              color: "#fff",
              borderRadius: 14,
              padding: "16px 36px",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              boxShadow: "0 8px 28px rgba(0,56,147,0.35)",
            }}
          >
            📲 Pedir por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

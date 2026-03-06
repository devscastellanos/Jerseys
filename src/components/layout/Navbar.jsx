import { whatsappBase } from "../../utils/whatsapp";

export default function Navbar({ navigate }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.93)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      padding: "0 24px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", height: 64,
        display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 12,
      }}>
        <button
          onClick={() => navigate("#/")}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "none", border: "none", cursor: "pointer",
            padding: 0, flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "1.6rem" }}>🇨🇴</span>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "1.2rem",
            letterSpacing: "0.04em", color: "#003893",
          }}>
            CAMISETAS COLOMBIA
          </span>
        </button>

        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{
            background: "linear-gradient(90deg,#f9d923,#c8102e,#003893)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.08em",
          }}>
            MUNDIAL 2026 🏆
          </span>
          <a href="#encargos" style={{
            color: "#444", fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700, fontSize: "0.85rem",
          }}>
            🌍 Encargos
          </a>
          <a
            href={whatsappBase()}
            target="_blank" rel="noopener noreferrer"
            style={{
              background: "#25d366", color: "#fff", borderRadius: 10,
              padding: "8px 16px", fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: "0.85rem",
            }}
          >
            📲 WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

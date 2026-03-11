import { whatsappBase } from "../../utils/whatsapp";
import { SITE_NAME, SITE_YEAR } from "../../constants";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", padding: "28px 24px", textAlign: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
        🇨🇴 {SITE_NAME} {SITE_YEAR} · Hecho por Sebastian Castellanos ·{" "}
        <a href={whatsappBase()} style={{ color: "#f9d923" }}>WhatsApp</a>
      </p>
    </footer>
  );
}

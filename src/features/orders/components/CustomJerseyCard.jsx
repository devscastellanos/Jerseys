import { useState } from "react";
import JerseyArtBox from "../../../components/ui/JerseyArtBox";
import MiniSizeQty from "../../catalog/components/MiniSizeQty";
import { totalUnits } from "../../../utils/formatters";
import { buildWhatsappMsg, whatsappLink } from "../../../utils/whatsapp";

export default function CustomJerseyCard({ item, navigate }) {
  const [items, setItems] = useState([]);
  const goTo = () => navigate(`#/producto/${item.slug}`);
  const units = totalUnits(items);
  const canOrder = units > 0;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.18s,box-shadow 0.18s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
      }}
    >
      <div
        onClick={goTo}
        style={{
          height: 88,
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {item.photos?.length > 0 ? (
          <img
            src={item.photos[0]}
            alt={item.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <JerseyArtBox
            gradient={item.gradient}
            emoji={item.flag}
            height="88px"
            fontSize="2rem"
          />
        )}
      </div>

      <div
        style={{
          padding: "9px 10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        <p
          onClick={goTo}
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "0.86rem",
            cursor: "pointer",
            lineHeight: 1.2,
          }}
        >
          {item.name}
        </p>

        <MiniSizeQty sizes={item.sizes} items={items} onChange={setItems} />

        <button
          onClick={() => {
            if (!canOrder) return;
            window.open(
              whatsappLink(buildWhatsappMsg(item, items, true)),
              "_blank",
            );
          }}
          style={{
            background: canOrder ? "#003893" : "#ddd",
            color: canOrder ? "#fff" : "#999",
            border: "none",
            borderRadius: 9,
            padding: "7px 8px",
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "0.78rem",
            cursor: canOrder ? "pointer" : "not-allowed",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => {
            if (canOrder) e.currentTarget.style.background = "#0054d1";
          }}
          onMouseLeave={(e) => {
            if (canOrder) e.currentTarget.style.background = "#003893";
          }}
        >
          {canOrder
            ? `Pedir ${units} ud${units !== 1 ? "s" : ""} →`
            : "Selecciona tallas"}
        </button>

        <p
          onClick={goTo}
          style={{
            fontSize: "0.68rem",
            color: "#003893",
            fontWeight: 700,
            textAlign: "center",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          Ver detalles / fotos →
        </p>
      </div>
    </div>
  );
}

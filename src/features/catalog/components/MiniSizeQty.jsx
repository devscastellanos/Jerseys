import { totalUnits } from "../../../utils/formatters";

export default function MiniSizeQty({ sizes, items, onChange }) {
  const getQty = (s) => items.find((i) => i.size === s)?.qty || 0;

  const incDec = (size, delta) => {
    const q = Math.max(0, getQty(size) + delta);
    if (q === 0) onChange(items.filter((i) => i.size !== size));
    else {
      const ex = items.find((i) => i.size === size);
      if (ex) onChange(items.map((i) => (i.size === size ? { ...i, qty: q } : i)));
      else    onChange([...items, { size, qty: q }]);
    }
  };

  const units = totalUnits(items);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.07em" }}>Tallas</p>
        {units > 0 && (
          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#003893" }}>
            {units} ud{units !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {sizes.map((size) => {
          const q = getQty(size);
          return (
            <div key={size} style={{
              borderRadius: 8,
              border: `2px solid ${q > 0 ? "#f9d923" : "#e0e0e0"}`,
              background: q > 0 ? "#fffbea" : "#fafafa",
              overflow: "hidden", textAlign: "center", minWidth: 38,
              transition: "border 0.15s,background 0.15s",
            }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", color: q > 0 ? "#0a0a0a" : "#aaa", padding: "2px 4px 0" }}>
                {size}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "2px 2px 4px", gap: 1 }}>
                <button
                  onClick={() => incDec(size, -1)} disabled={q === 0}
                  style={{ width: 18, height: 18, border: "none", borderRadius: 4, background: q > 0 ? "#e0e0e0" : "transparent", color: q > 0 ? "#333" : "#ddd", fontSize: "0.8rem", fontWeight: 700, cursor: q > 0 ? "pointer" : "default", lineHeight: 1, padding: 0 }}
                >−</button>
                <span style={{ width: 18, textAlign: "center", fontSize: "0.8rem", fontWeight: 800, fontFamily: "'Barlow Condensed',sans-serif", color: "#0a0a0a" }}>
                  {q || ""}
                </span>
                <button
                  onClick={() => incDec(size, 1)}
                  style={{ width: 18, height: 18, border: "none", borderRadius: 4, background: "#e0e0e0", color: "#333", fontSize: "0.8rem", fontWeight: 700, cursor: "pointer", lineHeight: 1, padding: 0 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#003893"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#e0e0e0"; e.currentTarget.style.color = "#333"; }}
                >+</button>
              </div>
            </div>
          );
        })}
      </div>

      {items.length > 0 && (
        <div style={{ marginTop: 5, display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          {items.map((i) => (
            <span key={i.size} style={{ fontSize: "0.74rem", fontWeight: 700, color: "#003893", background: "#e8eeff", borderRadius: 6, padding: "2px 7px" }}>
              {i.size}×{i.qty}
            </span>
          ))}
          <button onClick={() => onChange([])} style={{ background: "none", border: "none", fontSize: "0.7rem", color: "#c8102e", cursor: "pointer", fontWeight: 700, marginLeft: "auto" }}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

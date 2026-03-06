import { totalUnits } from "../../../utils/formatters";

export default function SizeQtyTable({ sizes, items, onChange }) {
  const getQty = (s) => items.find((i) => i.size === s)?.qty || 0;

  const setQty = (size, raw) => {
    const qty = Math.max(0, parseInt(raw) || 0);
    if (qty === 0) {
      onChange(items.filter((i) => i.size !== size));
    } else {
      const exists = items.find((i) => i.size === size);
      if (exists) onChange(items.map((i) => (i.size === size ? { ...i, qty } : i)));
      else        onChange([...items, { size, qty }]);
    }
  };

  const incDec = (size, delta) => setQty(size, getQty(size) + delta);
  const units  = totalUnits(items);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <p style={{ fontSize: "0.77rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Tallas y cantidades
        </p>
        {units > 0 && (
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#003893" }}>
            {units} unidad{units !== 1 ? "es" : ""} seleccionada{units !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(80px,1fr))", gap: 8 }}>
        {sizes.map((size) => {
          const q      = getQty(size);
          const active = q > 0;
          return (
            <div key={size} style={{
              borderRadius: 12,
              border: `2px solid ${active ? "#f9d923" : "#e0e0e0"}`,
              background: active ? "#fffbea" : "#fafafa",
              overflow: "hidden",
              transition: "border 0.15s,background 0.15s",
            }}>
              <div style={{ textAlign: "center", padding: "6px 4px 2px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1rem", color: active ? "#0a0a0a" : "#aaa" }}>
                {size}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 4px 8px" }}>
                <button
                  onClick={() => incDec(size, -1)} disabled={q === 0}
                  style={{ width: 26, height: 26, borderRadius: 6, border: "none", background: q > 0 ? "#e0e0e0" : "#f0f0f0", color: q > 0 ? "#333" : "#ccc", fontSize: "1rem", fontWeight: 700, cursor: q > 0 ? "pointer" : "default", lineHeight: 1 }}
                >−</button>
                <input
                  type="number" min="0" value={q === 0 ? "" : q} placeholder="0"
                  onChange={(e) => setQty(size, e.target.value)}
                  style={{ width: 32, height: 26, textAlign: "center", border: "none", background: "transparent", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#0a0a0a", outline: "none" }}
                />
                <button
                  onClick={() => incDec(size, 1)}
                  style={{ width: 26, height: 26, borderRadius: 6, border: "none", background: "#e0e0e0", color: "#333", fontSize: "1rem", fontWeight: 700, cursor: "pointer", lineHeight: 1 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#003893"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#e0e0e0"; e.currentTarget.style.color = "#333"; }}
                >+</button>
              </div>
            </div>
          );
        })}
      </div>

      {items.length > 0 && (
        <div style={{ marginTop: 12, background: "#f0f4ff", borderRadius: 10, padding: "10px 14px", display: "flex", flexWrap: "wrap", gap: "6px 16px", alignItems: "center" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em" }}>Resumen:</span>
          {items.map((i) => (
            <span key={i.size} style={{ fontSize: "0.82rem", fontWeight: 700, color: "#003893" }}>
              {i.size}×{i.qty}
            </span>
          ))}
          <button onClick={() => onChange([])} style={{ marginLeft: "auto", background: "none", border: "none", fontSize: "0.75rem", color: "#c8102e", cursor: "pointer", fontWeight: 700 }}>
            Limpiar ✕
          </button>
        </div>
      )}
    </div>
  );
}

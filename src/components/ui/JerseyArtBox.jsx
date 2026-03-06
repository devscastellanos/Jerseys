export default function JerseyArtBox({ gradient, emoji, height = "100%", fontSize = "5rem" }) {
  return (
    <div style={{
      background: gradient,
      height,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* stripes overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.07 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0,
            left: `${i * 22}%`, width: "10%",
            background: "#fff", transform: "skewX(-7deg)",
          }} />
        ))}
      </div>
      {/* collar */}
      <div style={{
        position: "absolute", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "34%", height: "20%",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "0 0 50% 50%",
      }} />
      <span style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))" }}>
        {emoji}
      </span>
    </div>
  );
}

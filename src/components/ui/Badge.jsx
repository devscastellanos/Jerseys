export default function Badge({ label, color }) {
  return (
    <span style={{
      background: color,
      color: "#fff",
      fontSize: "0.65rem",
      fontWeight: 800,
      letterSpacing: "0.12em",
      padding: "3px 9px",
      borderRadius: "3px",
      textTransform: "uppercase",
    }}>
      {label}
    </span>
  );
}

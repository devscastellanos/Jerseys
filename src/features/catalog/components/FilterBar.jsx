const FILTERS = [
  ["all",     "Todos"],
  ["hombre",  "Hombre"],
  ["mujer",   "Mujer"],
  ["nino",    "Niño"],
  ["jugador", "Tipo Jugador"],
  ["fan",     "Tipo Fan"],
];

export default function FilterBar({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
      {FILTERS.map(([key, label]) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          style={{
            padding: "7px 18px", borderRadius: 30, border: "2px solid",
            borderColor: filter === key ? "#003893" : "#ddd",
            background:  filter === key ? "#003893" : "#fff",
            color:       filter === key ? "#fff"    : "#444",
            fontWeight: 700, fontSize: "0.83rem", cursor: "pointer",
            transition: "all 0.18s",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

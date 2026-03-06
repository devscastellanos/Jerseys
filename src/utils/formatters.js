export const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export const fmt = (n) => `$${Number(n).toLocaleString("es-CO")}`;

export const totalUnits  = (items) => items.reduce((s, i) => s + i.qty, 0);
export const totalAmount = (items, price) =>
  price ? items.reduce((s, i) => s + i.qty * price, 0) : null;

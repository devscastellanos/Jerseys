import { fmt, totalUnits, totalAmount } from "./formatters";
import { WHATSAPP_NUMBER } from "../constants";

export function buildWhatsappMsg(product, items, isCustom) {
  const units  = totalUnits(items);
  const amount = totalAmount(items, product.price);

  const sizeLine =
    items.length > 0
      ? items.map((i) => `  • Talla ${i.size}: ${i.qty} ud${i.qty !== 1 ? "s" : ""}`).join("\n")
      : "  • (sin tallas seleccionadas)";

  return (
    `Hola! Quiero hacer un pedido:\n\n` +
    ` *${product.name}*` +
    (product.version ? `\n Versión: ${product.version}` : "") +
    `\n\n *Tallas:*\n${sizeLine}` +
    `\n\n Total unidades: ${units}` +
    (amount !== null ? `\n Total a pagar: ${fmt(amount)}` : "") +
    (isCustom
      ? "\n\n¿Tienen disponibilidad para este encargo?"
      : "\n\n¿Cómo procedo con el pago?")
  );
}

export function whatsappLink(msg) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function whatsappBase() {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

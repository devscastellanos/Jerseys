import { COLOMBIA_PRODUCTS } from "../features/catalog/catalog.data";
import { ALL_CUSTOM }        from "../features/orders/orders.data";

export const ALL_PRODUCTS = [...COLOMBIA_PRODUCTS, ...ALL_CUSTOM];

export const findProduct = (slug) => ALL_PRODUCTS.find((p) => p.slug === slug);

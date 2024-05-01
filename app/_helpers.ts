import { Product } from "@prisma/client";

/**
 * Calcula o preço total de um produto considerando um possível desconto.
 * @param product - O produto cujo preço total será calculado.
 * @returns O preço do produto após aplicar o desconto.
 */
export const calculateProductTotalPrice = (product: Product): number => {
  const discount = Number(product.price) * (product.discountPercentage / 100);
  return Number(product.price) - discount;
};

/**
 * Formata um valor numérico para o formato de moeda brasileira (BRL).
 * @param value - O valor numérico a ser formatado.
 * @returns O valor formatado como moeda no padrão brasileiro.
 */
export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};

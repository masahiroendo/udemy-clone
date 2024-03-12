export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("EUR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

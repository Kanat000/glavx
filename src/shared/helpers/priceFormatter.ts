export const priceFormatter = (price?: number | string): string => {
  if (!price) return "";
  let formatingPrice = String(price);
  let i = formatingPrice.length - 4;
  while (i >= 0) {
    formatingPrice =
      formatingPrice.substring(0, i + 1) +
      " " +
      formatingPrice.substring(i + 1, formatingPrice.length);
    i -= 3;
  }
  return formatingPrice;
};

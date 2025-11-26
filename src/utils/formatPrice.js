// utils/formatPrice.js
export const formatPrice = (price) => {
  return `€${parseFloat(price)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

// Kullanım: formatPrice(8000) → "€8,000.00"

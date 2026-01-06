function filterProducts(products, filters) {
  return products.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (filters.minPrice && product.price < filters.minPrice) {
      return false;
    }

    if (filters.minRating && product.rating < filters.minRating) {
      return false;
    }

    if (
      typeof filters.inStock === "boolean" &&
      product.inStock !== filters.inStock
    ) {
      return false;
    }

    return true;
  });
}

const result = filterProducts(products, filters);
console.log(result);

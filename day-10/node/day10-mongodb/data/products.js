const products = Array.from({ length: 50 }, (_, i) => ({
  _id: (i+1).toString(),
  name: `Product ${i+1}`,
  description: `Description for product ${i+1}`,
  price: Math.floor(Math.random() * 1000),
  category: ['Electronics','Clothing','Books'][i % 3]
}));

module.exports = products;

// Write a function called calculateTotalSalesWithTax that taken an array of product objects, along with tax rate and return
// total sales amount including tax.
// Calculate the total sales amount before applying the tax and then add the tax amount to it.

const products = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Orange", price: 0.6, quantity: 15 },
];

/*
  calculateTotalSalesWithTax(
   [ {name: 'Apple', price: 0.5, quantity: 10},
    {name: 'Banana', price: 0.3, quantity: 20},
    {name: 'Orange', price: 0.6, quantity: 15}
   ],
   8
  )
   // 10 * 0.5 - 5, 0.3 * 20 - 6, 0.6 * 15 - 9 = 20
   // 21.6 (20 + 8% tax)
*/

function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );
  const taxAmount = (totalSales * taxRate) / 100;
  const totalSalesWithTax = totalSales - taxAmount;
  return parseFloat(totalSalesWithTax).toFixed(2);
}

console.log(calculateTotalSalesWithTax(products, 8)); // 18.40


//Define the quantities array
//let quantity = [2, 1, 1, 2 ,1]
let quantity = [2, 'cat', 1.5, -1.5, 0]

//Define the item objects (minus image data) with brand and quantity attributes
let itemData = [
    {
      brand: 'Gillete Sensor 3 Razor',
      price: 1.23,
      quantityIndex: 0, 
    },
    {
      brand: 'Gillette Shaving Cream',
      price: 6.23,
      quantityIndex: 1, 
    },
    {
      brand: 'Listerine Mouthwash',
      price: 5.75,
      quantityIndex: 2, 
    },
    {
      brand: 'Cerave Moisturizer',
      price: 7.89,
      quantityIndex: 3, 
    },
    {
      brand: 'Aveeno Lavender Lotion',
      price: 5.55,
      quantityIndex: 4, // Use index position to reference the quantity
    },
  ];

export {itemData, quantity };

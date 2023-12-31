
//lab 8 part 2.1
let product_quantities=[2,1,1,1,1]

//lab 8 part 2.3

product_quantities.push(3);
//alert("The size of the products array is: "+product_quantities.length);
product_quantities.pop();

//lab 8 part 2.2
alert("The size of the products array is: "+product_quantities.length);

// Product Data and calculating extended price (item_total)

//Product1
let item1= 'Gillette Sensor 3 Razor';
let quantity1= product_quantities[0];
let price1 = 1.23
//let extended_price1 = quantity1 *price1;

//Product2
let item2= 'Gillette Shaving Cream';
let quantity2= product_quantities[1];
let price2 = 6.23
let extended_price2 = quantity2 *price2;

//Product3
let item3= 'Listerine Mouthwash';
let quantity3= product_quantities[2];
let price3 = 5.75
let extended_price3 = quantity3 *price3;

//Product4
let item4= 'Cerave Moisturizer';
let quantity4= product_quantities[3];
let price4 = 7.89
let extended_price4 = quantity4 *price4;

//Product5
let item5= 'Aveeno Lavender Lotion';
let quantity5= product_quantities[4];
let price5 = 5.55
let extended_price5 = quantity5 *price5;

//lab 8 part 1.1
let product1 ={
    itemName: 'iPhone 12',
    quantity: product_quantities[0],
    price: 247.95
};
//lab8 part 1.4
product1["SKU#"]=1234;
delete product1["SKU#"];


//lab 8 part 1.3
//product1.quantity = 0;

//lab8 part 1.2
let extended_price1 = product1.quantity * product1.price;


//Calculate subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

//Calculate sales tax
let taxRate = 0.0575; // x5.75%
let taxAmount = subtotal * taxRate;

//Calulate  grand total
let total = subtotal + taxAmount;

//Populate the table rows using DOM manipulation
let table = document.getElementById('invoiceTable');

let row= table.insertRow(); //Create a new row for each item
//lab 8 part 1.2 changed item 1 to product1.item, etc.
row.insertCell().innerHTML = `${product1.itemName}`;
row.insertCell().innerHTML = `${product1.quantity}`;
row.insertCell().innerHTML = `$` + `${product1.price}`;
row.insertCell().innerHTML = (`$` + `${extended_price1.toFixed(2)}`);

row= table.insertRow(); //Create a new row for each item
row.insertCell().innerHTML = `${item2}`;
row.insertCell().innerHTML = `${quantity2}`;
row.insertCell().innerHTML = `$` + `${price2}`;
row.insertCell().innerHTML = (`$` + `${extended_price2}`);

row= table.insertRow(); //Create a new row for each item
row.insertCell().innerHTML = `${item3}`;
row.insertCell().innerHTML = `${quantity3}`;
row.insertCell().innerHTML = `$` + `${price3}`;
row.insertCell().innerHTML = (`$` + `${extended_price3.toFixed(2)}`);


row= table.insertRow(); //Create a new row for each item
row.insertCell().innerHTML = `${item4}`;
row.insertCell().innerHTML = `${quantity4}`;
row.insertCell().innerHTML = `$` + `${price4}`;
row.insertCell().innerHTML = (`$` + `${extended_price4}`);

row= table.insertRow(); //Create a new row for each item
row.insertCell().innerHTML = `${item5}`;
row.insertCell().innerHTML = `${quantity5}`;
row.insertCell().innerHTML = `$` + `${price5}`;
row.insertCell().innerHTML = (`$` + `${extended_price5}`);

// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = `$` + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
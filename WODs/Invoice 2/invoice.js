// Product Data and calculating extended price (item_total)

//Product1
let item1= 'Gillette Sensor 3 Razor';
let quantity1= 2;
let price1 = 1.23
let extended_price1 = quantity1 *price1;

//Product2
let item2= 'Gillette Shaving Cream';
let quantity2= 1;
let price2 = 6.23
let extended_price2 = quantity2 *price2;

//Product3
let item3= 'Listerine Mouthwash';
let quantity3= 1;
let price3 = 5.75
let extended_price3 = quantity3 *price3;

//Product4
let item4= 'Cerave Moisturizer';
let quantity4= 2;
let price4 = 7.89
let extended_price4 = quantity4 *price4;

//Product5
let item5= 'Aveeno Lavender Lotion';
let quantity5= 1;
let price5 = 5.55
let extended_price5 = quantity5 *price5;

//Calculate subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

//Calculate sales tax
let taxRate = 0.0575; // x5.75%
let taxAmount = subtotal * taxRate;

//Calculate shipping cost based on subtotal
let shippingAmount= 0;
if (subtotal <=50) {
    shippingAmount=2;
} else if (subtotal <-100) {
    shippingAmount=5;
} else {
    shippingAmount = subtotal * 0.05; 
}

//Calulate  grand total
let total = subtotal + taxAmount + shippingAmount;

//Populate the table rows using DOM manipulation
let table = document.getElementById('invoiceTable');

let row= table.insertRow(); //Create a new row for each item
row.insertCell().innerHTML = `${item1}`;
row.insertCell().innerHTML = `${quantity1}`;
row.insertCell().innerHTML = `$` + `${price1}`;
row.insertCell().innerHTML = (`$` + `${extended_price1}`);

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
document.getElementById('shipping_cell').innerHTML = `$${shippingAmount.toFixed(2)}`; //shipping charge display
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);


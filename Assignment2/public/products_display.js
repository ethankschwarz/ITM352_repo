//Ethan Schwarz
//set up params from headder, order array, and error value
let params = (new URL(document.location)).searchParams;
let error;
let order = [];

//get if there was an error before
error = params.get('error');

//fill order array with item ammounts from previous attempts
params.forEach((value,key) => {
    if (key.startsWith('prod')) {
            order.push(parseInt(value));
        }
});


//if there is an error submitted, then show the error text in errorDiv
if(error == 'true'){
    document.getElementById('errorDiv').innerHTML += `<h2 class="text-danger">Submission Error - Please Fix Quantities!</h2><br>`;
}

  //sticky stuff for quantities
  if (params.has('name')){
    document.getElementById('helloMsg').innerHTML = `Hello ${params.get('name')}!`;
    for (let i in products) {
        qty_form [`qty${i}`].value = params.get(`qty${i}`);
    }
}



// Create a JS string (products_str) that contains data loaded from the products.json file

//Assited by Reyn on this for loop + Anthony Lee, graduate studuent
for (let i = 0; i < products.length; i++) {
    document.querySelector('.row').innerHTML += 
        `<div class="col-md-6 mb-4">
        <div class="card">
            <div class="text-center">
                <img src="${products[i].image}" class="card-img-top border-top" alt="Product Image">
            </div>
            <div class="towel-body">
                <h5 class="card-title">${products[i].name}</h5>
                <p class="towel-text">
                    Price: $${(products[i].price).toFixed(2)}<br>
                    Available: ${products[i].qty_available}<br>
                    Total Sold: ${products[i].total_sold}
                </p>
                <input type="text" placeholder="0" name="quantity_textbox" id="${[i]}" class="form-control mb-2" oninput="validateQuantity(this)" value="${order[i] !== 0 && order[i] !== undefined ? order[i] : ''}" onload="validateQuantity(this)">
                <p id="invalidQuantity${[i]}" class="text-danger"></p>
                </div>
            </div>
        </div>`
        validateQuantity(document.getElementById(`${[i]}`));
 }

//runs to generate a validation message
    function validateQuantity(quantity){
        //set variables, and grab number from the quantity and set it to an number
        let valMessage = '';
        let quantityNumber = Number(quantity.value);
        //console.log(Number.isInteger(quantityNumber));
        document.getElementById(`invalidQuantity${quantity.id}`).innerHTML = "validationMessage";
        //console.log(products[quantity.id]['qty_available']);
        //gets validation message if not a number, negative, not an integer, or if there is not enough items in stock
        //else  empty string 
        if(isNaN(quantityNumber)){
            valMessage = "Please Enter a Number";
        }else if (quantityNumber<0 && !Number.isInteger(quantityNumber)){
            valMessage = "Please Enter a Positive Integer";
        }else if (quantityNumber <0){
            valMessage = "Please Enter a Positive Value";
        }else if(!Number.isInteger(quantityNumber)){
            valMessage = "Please Enter an Integer";
        }else if(quantityNumber > products[quantity.id]['qty_ava']){
            valMessage = "Not Enough Items in Stock!";
        }
        else{
            valMessage = '';
        }
        // puts valMessage to the innerHTML to the section
        document.getElementById(`invalidQuantity${quantity.id}`).innerHTML = valMessage;
        //console.log(products[quantity.id])
    }


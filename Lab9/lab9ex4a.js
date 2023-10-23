// Define the attributes string
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

// Split the attributes string into an array of parts using ";" as the separator
let pieces = attributes.split(";");

/**
 * Check if a value is a non-negative integer
 * @param {string} input - The input string to be checked.
 * @param {boolean} returnErrors - if true, it returns an array of errors; otherwise, it returns a boolean.
 * @returns {boolean|array} - Returns true if the input is a non-negative integer, or an array of errors if returnErrors is true.
 */
function validateNonNegInt(input, returnErrors = false) {
    let errors = [];

  if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
  if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
  if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

  return errors.length === 0;
}

// Loop through the pieces array and test each element
for (let i = 0; i < pieces.length; i++) {
    let validationResult = validateNonNegInt(pieces[i], true);
    console.log(`Validation result for element "${pieces[i]}": ${validationResult}`);
  }

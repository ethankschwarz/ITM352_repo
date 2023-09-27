function calculateDays() {
    // Get the input value from the user
    const monthInput = document.getElementById('monthInput').value;

    // Initialize the variable to store the number of days
    let numDays;

    // Use a switch statement to determine the number of days based on the month
    switch (monthInput.toLowerCase()) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            numDays = 31;
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            numDays = 30;
            break;
        case 'february':
            numDays = 28; // Assuming non-leap year by default
            break;
        default:
            numDays = -1; // Indicates an error
            break;
    }

    // Display the result in the HTML page
    const resultElement = document.getElementById('result');
    if (numDays === -1) {
        resultElement.textContent = 'Invalid month entered. Please enter a valid month name.';
    } else {
        resultElement.textContent = `There are ${numDays} days in ${monthInput}.`;
    }
}
// handle calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {
    // get input values in number from input box
    const incomeAmount = getInputNumber('income');
    const foodExpenses = getInputNumber('food');
    const rentExpenses = getInputNumber('rent');
    const clothesExpenses = getInputNumber('clothes');

    // get output texts
    const expensesAmount = getOutputText('expenses');
    const balanceRemaining = getOutputText('balance');

    // get error messages
    const stringError = getErrorElement('string');
    const negativeError = getErrorElement('negative');

    if (isNaN(incomeAmount) || isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothesExpenses)) {
        stringError.style.display = 'block';
        negativeError.style.display = 'none';
        expensesAmount.innerText = '00';
        balanceRemaining.innerText = '00';
        if (isNaN(incomeAmount)) {
            stringError.innerText = 'Please, enter number in Income.'
        }
        else if (isNaN(foodExpenses)) {
            stringError.innerText = 'Please, enter number in Food Expenses.'
        }
        else if (isNaN(rentExpenses)) {
            stringError.innerText = 'Please, enter number in Rent Expenses.'
        }
        else if (isNaN(clothesExpenses)) {
            stringError.innerText = 'Please, enter number in Clothes Expenses.'
        }
    }
    else if (incomeAmount < 0 || foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0) {
        stringError.style.display = 'none';
        negativeError.style.display = 'block';
        expensesAmount.innerText = '00';
        balanceRemaining.innerText = '00';
    }

    else {
        stringError.style.display = 'none';
        negativeError.style.display = 'none';
        // calculate and update total expenses
        const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
        expensesAmount.innerText = totalExpenses;
        // calculate and update balance
        balanceRemaining.innerText = incomeAmount - totalExpenses;

    }


})

// handle save button event
document.getElementById('save-button').addEventListener('click', function () {
    // get input values in number from input box
    const incomeAmount = getInputNumber('income');
    const savingPercent = getInputNumber('save');

    // get output texts
    const savingAmount = getOutputText('save');
    const remainingBalance = getOutputText('remaining');
    const balanceField = getOutputText('balance');

    // calculate and update saving amount
    savingAmount.innerText = (incomeAmount * savingPercent) / 100;

    // calculate and update remaining balance
    remainingBalance.innerText = parseFloat(balanceField.innerText) - savingAmount.innerText;

    // get error messages
    const saveError = getErrorElement('save')

    if (savingAmount.innerText > balanceField.innerText) {
        saveError.style.display = 'block';
        savingAmount.innerText = '00'
        remainingBalance.innerText = '00'
    }
    else {
        saveError.style.display = 'none';
    }
})

// get input in number function
function getInputNumber(fieldName) {
    const inputField = document.getElementById(fieldName + '-input');
    const inputText = inputField.value;
    const inputNumber = parseFloat(inputText);
    return inputNumber;
}

// get output in text function
function getOutputText(fieldName) {
    const outputField = document.getElementById(fieldName + '-output');
    return outputField;
}

// get error element function
function getErrorElement(elementName) {
    const errorElement = document.getElementById(elementName + '-error')
    return errorElement;
}
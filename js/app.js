// handle calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {
    // get input values in number from input box
    const incomeAmount = getInputNumber('income');
    const foodExpense = getInputNumber('food');
    const rentExpense = getInputNumber('rent');
    const clothesExpense = getInputNumber('clothes');

    // get output texts
    const expensesAmount = getOutputText('expenses');
    const balanceRemaining = getOutputText('balance');

    // get error messages
    const stringError = getErrorElement('string');
    const negativeError = getErrorElement('negative');
    const expenseError = getErrorElement('expense')

    if (isNaN(incomeAmount) || isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)) {
        stringError.style.display = 'block';
        negativeError.style.display = 'none';
        expensesAmount.innerText = '00';
        balanceRemaining.innerText = '00';
        if (isNaN(incomeAmount)) {
            stringError.innerText = 'Please, enter number in Income.'
        }
        else if (isNaN(foodExpense)) {
            stringError.innerText = 'Please, enter number in Food Expense.'
        }
        else if (isNaN(rentExpense)) {
            stringError.innerText = 'Please, enter number in Rent Expense.'
        }
        else if (isNaN(clothesExpense)) {
            stringError.innerText = 'Please, enter number in Clothes Expense.'
        }
    }
    else if (incomeAmount < 0 || foodExpense < 0 || rentExpense < 0 || clothesExpense < 0) {
        stringError.style.display = 'none';
        negativeError.style.display = 'block';
        expensesAmount.innerText = '00';
        balanceRemaining.innerText = '00';
    }

    else {
        stringError.style.display = 'none';
        negativeError.style.display = 'none';
        // calculate and update total expenses
        const totalExpenses = foodExpense + rentExpense + clothesExpense;
        if (incomeAmount < totalExpenses) {
            expenseError.style.display = 'block';
        }
        else {
            expenseError.style.display = 'none';
            expensesAmount.innerText = totalExpenses;
            // calculate and update balance
            balanceRemaining.innerText = incomeAmount - totalExpenses;
        }




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
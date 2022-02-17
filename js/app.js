// handle calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {
    // get input values in number from input box
    const incomeInput = getInputNumber('income-input');
    const foodInput = getInputNumber('food-input');
    const rentInput = getInputNumber('rent-input');
    const clothesInput = getInputNumber('clothes-input');

    // get output texts
    const expensesOutput = getOutputText('expenses-output');
    const balanceOutput = getOutputText('balance-output');

    // calculate and update total expenses
    const totalExpenses = foodInput + rentInput + clothesInput;
    expensesOutput.innerText = totalExpenses;

    // calculate and update balance
    balanceOutput.innerText = incomeInput - totalExpenses;
})

function getInputNumber(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputNumber = parseFloat(inputText);
    inputField.value = '';
    return inputNumber;
}

function getOutputText(outputId) {
    const outputField = document.getElementById(outputId);
    return outputField;
}
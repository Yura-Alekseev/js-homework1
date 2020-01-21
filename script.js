let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstQuestion1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let secondQuestion1 = prompt('Во сколько обойдется?', '');
appData.expenses[firstQuestion1] = secondQuestion1;

let firstQuestion2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let secondQuestion2 = prompt('Во сколько обойдется?', '');
appData.expenses[firstQuestion2] = secondQuestion2;

console.log(appData.expenses);

alert('Ваш бюджет на один день: ' + appData.budget / 30);

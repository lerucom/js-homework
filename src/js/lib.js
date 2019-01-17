export function cofemat(drinkNumb, money) {
    let change = money; // если выбрал несуществующий номер напитка, возвращается вся сумма
    const coffees = { // можно было сделать через массив объектов, чтобы хранить доп. инфу о напитке
        30: 30,
        35: 35,
        40: 40,
        45: 45
    };

    if (money >= drinkNumb && coffees[drinkNumb]) {
        change = money - drinkNumb;
    }
    return change;
}
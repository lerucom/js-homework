export function cofemat(drinkNumb, money) {
    let change = money;
    const coffees = {
        'americana': 30,
        'cappuccino': 35,
        'espresso': 40,
        'latte': 45
    };

    if (money >= coffees[drinkNumb]) {
        change = money - coffees[drinkNumb];
    }

    return change;
}
export function cofemat(drinkName, money) {
    let change = money;
    const coffees = {
        'americana': 30,
        'cappuccino': 35,
        'espresso': 40,
        'latte': 45
    };

    if (money >= coffees[drinkName]) {
        change = money - coffees[drinkName];
    }

    return change;
}

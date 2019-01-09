export function cofemat(drinkNumb, money) {
    let change = money; // если выбрал несуществующий номер напитка, возвращается вся сумма
    let moneyLimit = 100;
    if (money > 0 && money <= moneyLimit) { // сумма от 0 до 100, или ошибка
        switch (drinkNumb) {
            case 30: {
                let coffee3In1 = 30;
                if (money >= coffee3In1) {
                    change = money - coffee3In1;
                } else {
                    change = money; //если денег не хватает, возвращаем всю внесенную сумму
                }
            }
                break;

            case 35: {
                let coffeeBlack = 35;
                if (money >= coffeeBlack) {
                    change = money - coffeeBlack;
                } else {
                    change = money; //если денег не хватает, возвращаем всю внесенную сумму
                }
            }
                break;

            case 40: {
                let coffeeCream = 40;
                if (money >= coffeeCream) {
                    change = money - coffeeCream;
                } else {
                    change = money; //если денег не хватает, возвращаем всю внесенную сумму
                }
            }
                break;

            case 45: {
                let coffeeLatte = 45;
                if (money >= coffeeLatte) {
                    change = money - coffeeLatte;
                } else {
                    change = money; //если денег не хватает, возвращаем всю внесенную сумму
                }
            }
                break;

        }
        return change;
    } else {
        console.log('Error: money limit = 100')
    }
}
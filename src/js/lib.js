export function cofemat(drinkNumb, money) {
    let change = money; // если выбрал несуществующий номер напитка, возвращается вся сумма

    switch (drinkNumb) {
        case 30: {
            let coffee3In1 = 30;
            if (money >= coffee3In1) {
                change = money - coffee3In1;
            }
        }
            break;

        case 35: {
            let coffeeBlack = 35;
            if (money >= coffeeBlack) {
                change = money - coffeeBlack;
            }
        }
            break;

        case 40: {
            let coffeeCream = 40;
            if (money >= coffeeCream) {
                change = money - coffeeCream;
            }
        }
            break;

        case 45: {
            let coffeeLatte = 45;
            if (money >= coffeeLatte) {
                change = money - coffeeLatte;
            }
        }
            break;
    }

    return change;
}
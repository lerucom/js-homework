import {cofemat} from "../js/lib";

test.each([
    ['americana', 10, 10],
    ['americana', 100, 70],
    ['cappuccino', 10, 10],
    ['cappuccino', 100, 65],
    ['espresso', 10, 10],
    ['espresso', 100, 60],
    ['latte', 10, 10],
    ['latte', 100, 55]
])(
    'should actual drinkNumb %s, money %i, change is %i',
    (drinkNumb, money, expected) => {
        const actual = cofemat(drinkNumb, money);
        expect(actual).toBe(expected);
    }
);
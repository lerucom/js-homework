import {cofemat} from "../js/cofemat";

test('select number of drink, put money and get change', () => {
    const drinkNumb = 40;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(60);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 45;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(55);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 30;
    const money = 25;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(25);
});
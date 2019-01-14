import {cofemat} from "../js/lib";

test('select number of drink, put money and get change', () => {
    const drinkNumb = 10;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(100);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 40;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(60);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 40;
    const money = 20;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(20);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 45;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(55);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 45;
    const money = 20;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(20);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 30;
    const money = 25;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(25);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 30;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(70);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 35;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(65);
});

test('select number of drink, put money and get change', () => {
    const drinkNumb = 35;
    const money = 20;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(20);
});
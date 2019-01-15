import {cofemat} from "../js/lib";

test('select unknown drinkNumb = 10 and put money = 100, then get change = 100', () => {
    const drinkNumb = 10;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(100);
});

test('select drinkNumb = 40, and put money = 100, then get change = 60', () => {
    const drinkNumb = 40;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(60);
});

test('select drinkNumb = 40, and put money = 20, then get change = 20', () => {
    const drinkNumb = 40;
    const money = 20;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(20);
});

test('select drinkNumb = 45, and put money = 100, then get change = 55', () => {
    const drinkNumb = 45;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(55);
});

test('select drinkNumb = 45, and put money = 20, then get change = 20', () => {
    const drinkNumb = 45;
    const money = 20;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(20);
});

test('select drinkNumb = 30, and put money = 25, then get change = 25', () => {
    const drinkNumb = 30;
    const money = 25;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(25);
});

test('select drinkNumb = 30, and put money = 100, then get change = 70', () => {
    const drinkNumb = 30;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(70);
});

test('select drinkNumb = 35, and put money = 100, then get change = 65', () => {
    const drinkNumb = 35;
    const money = 100;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(65);
});

test('select drinkNumb = 35, and put money = 20, then get change = 20', () => {
    const drinkNumb = 35;
    const money = 20;
    const result = cofemat(drinkNumb, money);

    expect(result).toBe(20);
});
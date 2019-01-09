import {calculateZodiacSign} from "../js/zodiacSigns";

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 14;
    const month = 'Ноябрь';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Скорпион');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 14;
    const month = 'Декабрь';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Стрелец');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 14;
    const month = 'Январь';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Козерог');
});
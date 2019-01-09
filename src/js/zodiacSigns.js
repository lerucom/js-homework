export function calculateZodiacSign(day, month) {
    // Переменная, которая хранит название знака зодиака
    let zodiacSign = '';
    // Массив названий месяцев
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'
        , 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    // Массив названий знаков зодиаков
    let zodiacSigns = ['Козерог', 'Водолей', 'Рыбы', 'Овен',
        'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион',
        'Стрелец'];
    // Если day от 1-31 и month есть в массиве months то вычисляем знак зодиака
    if (day >= 1 && day <= 31 && months.includes(month)) {
        switch (month) {
            case 'Январь': {
                if (day < 20) {
                    zodiacSign = zodiacSigns[0];
                } else {
                    zodiacSign = zodiacSigns[1];
                }
            }
                break;

            case 'Февраль': {
                if (day < 19) {
                    zodiacSign = zodiacSigns[1];
                } else {
                    zodiacSign = zodiacSigns[2];
                }
            }
                break;

            case 'Март': {
                if (day < 21) {
                    zodiacSign = zodiacSigns[2];
                } else {
                    zodiacSign = zodiacSigns[3];
                }
            }
                break;

            case 'Апрель': {
                if (day < 20) {
                    zodiacSign = zodiacSigns[3];
                } else {
                    zodiacSign = zodiacSigns[4];
                }
            }
                break;

            case 'Май': {
                if (day < 21) {
                    zodiacSign = zodiacSigns[4];
                } else {
                    zodiacSign = zodiacSigns[5];
                }
            }
                break;

            case 'Июнь': {
                if (day < 21) {
                    zodiacSign = zodiacSigns[5];
                } else {
                    zodiacSign = zodiacSigns[6];
                }
            }
                break;

            case 'Июль': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[6];
                } else {
                    zodiacSign = zodiacSigns[7];
                }
            }
                break;

            case 'Август': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[7];
                } else {
                    zodiacSign = zodiacSigns[8];
                }
            }
                break;

            case 'Сентябрь': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[8];
                } else {
                    zodiacSign = zodiacSigns[9];
                }
            }
                break;

            case 'Октябрь': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[9];
                } else {
                    zodiacSign = zodiacSigns[10];
                }
            }
                break;

            case 'Ноябрь': {
                if (day < 22) {
                    zodiacSign = zodiacSigns[10];
                } else {
                    zodiacSign = zodiacSigns[11];
                }
            }
                break;

            case 'Декабрь': {
                if (day < 22) {
                    zodiacSign = zodiacSigns[11];
                } else {
                    zodiacSign = zodiacSigns[12];
                }
            }
                break;
        }
        return zodiacSign;
        // или console.log('Введите правильную дату(1-31) и месяц(Январь, Февраль, и т.д.)');
    } else {console.log('Введите правильную дату(1-31) и месяц(Январь, Февраль, и т.д.)');}
}
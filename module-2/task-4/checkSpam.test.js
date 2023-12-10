const checkSpam = require('./index');

describe('Функция, которая проверяет, содержит ли строка \'1xBet\' или \'XXX\'', () => {
    it('Должна вернуть true, если строка содержит \'1XbeT now\'', () => {
        expect(checkSpam('1XbeT now')).toBe(true);
    });

    it('Должна вернуть true, если строка содержит \'free xxxxx\'', () => {
        expect(checkSpam('free xxxxx')).toBe(true);
    });

    it('Должна вернуть false, если строка содержит \'innocent rabbit\'', () => {
        expect(checkSpam('innocent rabbit')).toBe(false);
    });
})
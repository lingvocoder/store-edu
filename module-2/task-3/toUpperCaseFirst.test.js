const toUpperCaseFirst = require('./index');

describe('Функция, которая возвращает строку str с заглавным первым символом', () => {
    it('Должна вернуть строку с заглавным первым символом', () => {
        expect(toUpperCaseFirst('петя')).toEqual('Петя');
    });

    it('Должна вернуть строку с заглавным первым символом, если строка содержит один символ', () => {
        expect(toUpperCaseFirst('д')).toEqual('Д');
    });

    it('Должна вернуть пустую строку, если длина строки равна 0', () => {
        expect(toUpperCaseFirst('')).toEqual('');
    });
})
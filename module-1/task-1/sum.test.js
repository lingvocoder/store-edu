const sum = require('./index');

describe('Функция суммирует два числа и возвращает сумму',() => {
    test('Возвращает сумму чисел 1 + 1',() => {
        expect(sum(1, 1)).toEqual(2);
    })
    test('Возвращает сумму чисел 0 + 7',() => {
        expect(sum(0, 7)).toEqual(7);
    })
    test('Возвращает сумму чисел -9 + 5',() => {
        expect(sum(-9, 5)).toEqual(-4);
    })
})
const factorial = require('./index');

describe('Функция вычисляет факториал числа', () => {
    it('Функция должна вернуть 1 (0!)', () => {
        expect(factorial(0)).toEqual(1);
    })

    it('Функция должна вернуть 1 (1!)', () => {
        expect(factorial(1)).toEqual(1);
    });

    it('Функция должна вернуть 6 (3!)', () => {
        expect(factorial(3)).toEqual(6);
    })

    it('Функция должна вернуть 120 (5!)', () => {
        expect(factorial(5)).toEqual(120);
    });

    it('Функция должна вернуть 720 (6!)', () => {
        expect(factorial(6)).toEqual(720);
    });
})
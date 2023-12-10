const truncate = require('./index');

describe('Функция, которая проверяет длину строки и сокращает её, если длина больше указанного значения', () => {
    it('Должна вернуть усеченную строку', () => {
        let baseStr = 'Вот, что мне хотелось бы сказать на эту тему:';
        let newStr = 'Вот, что мне хотело…';

        expect(truncate(baseStr, 20)).toBe(newStr);
    });

    it('Должна вернуть строку, усечённую на значение maxlength', () => {
        let baseStr = 'Вот, что мне хотелось бы сказать на эту тему:';
        let newStr = 'Вот, что …';

        expect(truncate(baseStr, 10)).toBe(newStr);
    });

    it('Должна вернуть исходную строку без изменений', () => {
        let baseStr = 'Всем привет!';

        expect(truncate(baseStr, 20)).toBe(baseStr)
    });
})
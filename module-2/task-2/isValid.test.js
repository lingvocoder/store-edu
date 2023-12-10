const isValid = require('./index');

describe('Функция проверяет, что имя соответствует заявленным параметрам', () => {
    it('Должна вернуть true, если имя соответствует параметрам', () => {
        expect(isValid('Aleksey')).toEqual(true);
    });

    it('Должна вернуть false, если имя содержит пробелы', () => {
        expect(isValid('Aleksey Goncharov')).toEqual(false);
    });

    it('Должна вернуть false, если длина имени меньше 4 символов', () => {
        expect(isValid('Ale')).toEqual(false)
    });

    it('Должна вернуть false, если параметр не передан', () => {
        expect(isValid(null)).toEqual(false)
    });
})
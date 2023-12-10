/**
 * Эту функцию трогать не нужно
 */
function print(text) {
    console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
    let isValid = true;

    if (!name) {
        isValid = false;
    }
    else if (name.indexOf(' ') !== -1) {
        isValid = false;
    }
    else if (name.length < 4) {
        isValid = false;
    }
    return isValid;
}

function sayHello() {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print(`С возвращением, ${userName}!`);
    } else {
        print('Некорректное имя!');
    }
}

module.exports = isValid;

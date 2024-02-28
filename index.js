alert("Вам необходимо зарегистрироваться.");

const regName = (prompt('Введите логин:'));
const regPass = (prompt('Введите пароль:'));

while (true) {
    alert("Вам необходимо авторизоваться");

    const authName = (prompt('Введите ваш логин: '));
    const authPass = (prompt('Введите ваш пароль: '));

    if (authName === regName && authPass === regPass) {
        alert("Вход выполнен успешно!");
        break;
    } else {
        alert("Неправильный логин или пароль. Пожалуйста, попробуйте ещё раз.");
    }
}
outerLoop: while (true) {

    alert("Вам необходимо зарегистрироваться.");

    const regName = (prompt('Введите логин: '));
    const regPass = (prompt('Введите пароль: '));

    const maxAttempts = 3;
    

    alert("Вам необходимо авторизоваться");

    for (let attempts = 1; attempts <= maxAttempts; ++attempts) {

        let authName = (prompt('Введите логин: '));
        let authPass = (prompt('Введите пароль: '));

        if (authName === regName && authPass === regPass) {
            alert('Вход выполнен успешно!');
            break outerLoop;
        }

        alert(`Ошибка! Попытка ${attempts}/${maxAttempts}.`);

        if (attempts === maxAttempts) {
            

            const offer = confirm('Хотите создать новый аккаунт?');

            if (offer) {
                continue outerLoop;
            } else {
                attempts = 0;
                
            }
        }
    }
}
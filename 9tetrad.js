let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);




let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);

if (age >= 18) {
    alert("Вы совершеннолетний");
    console.log("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
    console.log("Вы несовершеннолетний");
}




let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Угадайте число от 1 до 10:");

if (parseInt(userGuess) === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (parseInt(userGuess) < 5) {
        alert("Ваше число меньше 5.");
        console.log("Ваше число меньше 5.");
    } else {
        alert("Ваше число больше 5.");
        console.log("Ваше число больше 5.");
    }
}





let correctPassword = "12345";
let userPassword = prompt("Введите пароль:");

if (userPassword === "") {
    alert("Пароль не может быть пустым.");
    console.log("Пароль не может быть пустым.");
} else if (userPassword === correctPassword) {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
} else {
    alert("Доступ запрещен");
    console.log("Доступ запрещен");
}




let num1 = parseFloat(prompt("Введите первое число:"));
let operator = prompt("Введите оператор (+, -, *, /):");
let num2 = parseFloat(prompt("Введите второе число:"));

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        alert("Ошибка: деление на ноль.");
        console.log("Ошибка: деление на ноль.");
    }
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор");
}

if (result !== undefined) {
    alert(`Результат: ${result}`);
    console.log(`Результат: ${result}`);
}   
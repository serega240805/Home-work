"use strict";

// Модальное окно

window.addEventListener("DOMContentLoaded", () => {

    const modal = document.querySelector('[data-modal="modal"]');
    const openModal = document.querySelector('[data-modal="open"]');
    const closeModal = document.querySelector('[data-modal="close"]');

    openModal.addEventListener("click", () => {
        modal.showModal();
        document.body.classList.add("body--fixed");
    });
    modal.addEventListener("click", (e) => {
        const modal = e.currentTarget;
        const isClickOnBackdrop = e.target === modal;

        if (isClickOnBackdrop) {
            modal.close();
            document.body.classList.remove("body--fixed");
        }
    });
    closeModal.addEventListener("click", () => {
        modal.close();
        document.body.classList.remove("body--fixed");
    });

    // 76. Переменные и правила их написания

    // const name = "Serega",
    //     surname = "Suchalkin",
    //     age = 18,
    //     city: "Sevsk",
    //     premium = true;

    // console.log(name, surname, age, city, premium);

    // 79. Условия

    // const age = 18;

    // if (age >= 18) {
    //     console.log("Вы совершеннолетний");
    // } else {
    //     console.log("Вам еще нет 18");
    // }

    // const age = 18;

    // console.log(age >= 18 ? "Вы совершеннолетний" : "Вам еще нет 18");

    // 80. Циклы

    // for (let i = 2; i <= 12; i++) {
    //     console.log(i);
    // }

    // for (let i = 10; i >= 1; i--) {
    //     console.log(i);
    // }

    // let i = 2;
    // while (i <= 12) {
    //     console.log(i);
    //     i++;
    // }

    // let i = 10;
    // while (i >= 1) {
    //     console.log(i);
    //     i--;
    // }

    // 81. Объектные типы данных. Массивы

    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % 2 === 0) {
    //         console.log(numbers[i]);
    //     }
    // }

    // const colors = ["red", "green", "blue"];

    // for (let i = colors.length - 1; i >= 0; i--) {
    //     console.log(colors[i]);
    // }

    // 82. Функции

    // function Hello(name) {
    //     console.log("Hello, " + name);
    // }

    // Hello("Denis");

    // const numbers = [1, 10, 54, 23, 2, 7, 65, 34];

    // function printNumbers(numbers) {
    //     for (let i = 0; i < numbers.length; i++) {
    //         if (numbers[i] > 10) {
    //             console.log(numbers[i]);
    //         }
    //     }
    // }

    // printNumbers(numbers);

    // function calculate(a, b, operator) {
    //     if (operator === 'minus') {
    //         return a - b;
    //     } else if (operator === 'plus') {
    //         return a + b;
    //     } else if (operator === 'multiply') {
    //         return a * b;
    //     } else if (operator === 'divide') {
    //         return a / b;
    //     }
    // }

    // const result = calculate(2, 3, 'minus');
    // console.log(result);

    // 83. Объекты

    // const person = {
    //     name: "Serega",
    //     age: 18,
    //     city: "Sevsk",
    //     occupation: "Frontend Developer",
    //     hobbies: ["codding in JavaScript", "reading books", "playing football"]
    // };

    // const greet = function (name) {
    //     return "Hello " + name;
    // };

    // console.log(greet("Denis"));

    // Создайте массив объектов с описанием пользователей

    // const users = [
    //     {
    //         name: "Serega",
    //         age: 21,
    //         isAdmin: true,
    //     },
    //     {
    //         name: "Denis",
    //         age: 34,
    //         isAdmin: false,
    //     },
    // ];

    // let count = 0;
    // for (let i = 0; i < users.length; i++) {
    //     if (!users[i].isAdmin) {
    //         count++;
    //     }
    // }

    // console.log(count);
});

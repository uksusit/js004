// Завдання 14/48
// Більшість перебираючих методів масиву - це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.

// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

// масив.map((element, index, array) => {
//   // Тіло колбек-функції
// });
// Поелементо перебирає оригінальний масив.
// Не змінює оригінальний масив.
// Результат роботи колбек-функції записується у новий масив.
// Повертає новий масив однакової довжини.
// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
// Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.


// До завдання
// Завдання 14/48
// Доповни код таким чином, щоб у змінній planetsLengths 
// вийшов масив довжин назв планет.Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", 
// "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => (planet.length));


console.log(planetsLengths);

// function getNameLength(name) {
let name = prompt("enter name");

  const message = (`Name ${name} is ${name.length} characters long`); // Change this line

console.log(message);

//   return message;
// }



// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// Оголошена функція getNameLength(name)
// Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
// Виклик функції getNameLength("Harambe") повертає "Name Harambe is 6 characters long"
// Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
// Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"


// Для того щоб дізнатися довжину рядка, тобто кількість її символів, у рядків є вбудована властивість length, значення якої можна отримати, звернувшись до неї через крапку після імені змінної або рядкового літерала.

// const productName = "Repair droid";

// // Якщо у змінній зберігається рядок
// console.log(productName.length); // 12

// // Якщо рядковий літерал
// console.log("Repair droid".length); // 12
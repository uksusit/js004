// Завдання 37/48
// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

const users =
[
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
];

// До завдання


// Завдання 37/48
// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.

// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 14
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getTotalFriendCount = users => {
   
// };
// // Change code above this line

// Change code below this line   
// const frds = [];
const getTotalFriendCount = users => users.reduce((frds, user) => {
 
    // console.log(acc, user);
    console.log(user.friends);
    console.log(...user.friends);

    // user =>
    frds.push(...user.friends); 
    // acc = acc + (user.friends);
    // console.log(acc);
    console.log(frds);
    console.log(frds.lenght);

    return frds;
    // const unifrds = frds.filter(
    //     (fr, idx, arr) => arr.indexOf(fr) === idx
    // );
    // console.log(unifrds);

    // return unifrds.length;

}, []);

    console.log(getTotalFriendCount(users));

// Change code above this line
// const getFriends = (users) => {
//     const allFr = [];
//     users.filter(user => allFr.push(...user.friends));
    
//     const uniFr = allFr.filter(
//         (fr, idx, arr) => arr.indexOf(fr) === idx);
//     console.log("unique friends", uniFr);
 
//     return uniFr;
// }  ;

function getDiscount(totalSpent) {

  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    
  let discount;
  // Change code below this line
  
    if (totalSpent < 5000) {
        discount = BASE_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT;
    }
    else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT;
    }
    else if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT;
    } else {
        console.log(discount);
    }
  // Change code above this line
  return discount;
}



// Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// Оголошена функція getDiscount(totalSpent)
// Виклик getDiscount(137000) повертає 0.1
// Виклик getDiscount(46900) повертає 0.05
// Виклик getDiscount(8250) повертає 0.02
// Виклик getDiscount(1300) повертає 0
// Виклик getDiscount(5000) повертає 0.02
// Виклик getDiscount(20000) повертає 0.05
// Виклик getDiscount(50000) повертає 0.1
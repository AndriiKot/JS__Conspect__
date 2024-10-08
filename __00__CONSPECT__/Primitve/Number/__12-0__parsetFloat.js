﻿//## Примеры использования parseFloat в JavaScript:

//**1. Преобразование строки в число:**

{
  let stringNumber = "123.45";
  let floatNumber = parseFloat(stringNumber);

  console.log(floatNumber); // Выведет: 123.45
}

//**2. Обработка пробелов и лишних символов:**

{
  let stringWithSpaces = " 123.45  ";
  let floatNumber = parseFloat(stringWithSpaces);

  console.log(floatNumber); // Выведет: 123.45
}

//**3. Обработка экспоненциальной записи:**

{
  let stringWithExponent = "1.23e+2";
  let floatNumber = parseFloat(stringWithExponent);

  console.log(floatNumber); // Выведет: 123
}

//**4. Преобразование невалидных строк:**

{
  let invalidString = "abc";
  let floatNumber = parseFloat(invalidString);

  console.log(floatNumber); // Выведет: NaN
}

//**5. Преобразование целых чисел:**

{
  let integerString = "123";
  let floatNumber = parseFloat(integerString);

  console.log(floatNumber); // Выведет: 123
}

//**6. Преобразование строк с десятичными точками:**

{
  let stringWithDecimal = "123.00";
  let floatNumber = parseFloat(stringWithDecimal);

  console.log(floatNumber); // Выведет: 123
}

//**7. Преобразование чисел в строках:**

{
  let numberInString = "123.45";
  let floatNumber = parseFloat(numberInString);

  console.log(floatNumber); // Выведет: 123.45
}

//**8. Использование в математических операциях:**

{
  let stringNumber1 = "123.45";
  let stringNumber2 = "6.78";

  let floatNumber1 = parseFloat(stringNumber1);
  let floatNumber2 = parseFloat(stringNumber2);

  let sum = floatNumber1 + floatNumber2;

  console.log(sum); // Выведет: 130.23
}

//**9. Преобразование данных из HTML:**

{
  let inputElement = document.getElementById("input-field");
  let inputValue = inputElement.value;
  let floatNumber = parseFloat(inputValue);

  console.log(floatNumber); // Выведет числовое значение введенное пользователем
}

//**Важно:** `parseFloat` возвращает `NaN` (Not a Number), если строка не может быть преобразована в число.

//**Рекомендуется использовать `isNaN` для проверки, является ли результат `NaN`**:

{
  let floatNumber = parseFloat("abc");
  if (isNaN(floatNumber)) {
    console.log("Ошибка преобразования!");
  }
}

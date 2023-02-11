const questionTemp = 'Введіть температуру в °C';
const tempC = prompt(questionTemp);
const tempF = tempC * 9 / 5 + 32;
const answer = `Температура в Фаренгейтах - ${ tempF }℉`;
alert(answer);

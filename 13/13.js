const questionNumberplace = 'Введіть номер свого місця';
const place = prompt(questionNumberplace);
const coupe = place <= 36 ? Math.trunc((place-1)/4+1) : Math.trunc((54-place)/2+1);
const shelf = place % 2 == 0 ? 'Верхнє місце' : 'Нижне місце';
const result = `Купе №${coupe}, ${shelf}`;
alert (result)

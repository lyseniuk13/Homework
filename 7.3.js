const questionLength = 'Введіть довжину однієї сторони квадрату в СМ?';
const lengthCM = prompt(questionLength);
const perimeterCM = lengthCM * 4;
const answer = `Периметр квадрату - ${ perimeterCM }см²`;
alert(answer);
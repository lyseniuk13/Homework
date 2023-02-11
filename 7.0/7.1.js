const questionHeight = 'Введіть висоту циліндру в СМ?';
const heightCM = prompt(questionHeight);
const questionRadius = 'Введіть діаметр циліндру в СМ?';
const radiusCM = prompt(questionRadius);
const volumeCM = heightCM * radiusCM * radiusCM * Math.PI;
const answer = `Об\'єм циліндру - ${ volumeCM }см³`;
alert(answer);
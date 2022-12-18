const questionDistance = 'Введіть  відстань у км між двома містами?';
const distanceKM = prompt(questionDistance);
const questionTime = 'Введіть за скільки годин хочете дістатись в годинах?';
const timeGod = prompt(questionTime);
const speedKmGod = distanceKM / timeGod;
const answer = `Вам потрібна швидкысть - ${ speedKmGod }км/год`;
alert(answer);
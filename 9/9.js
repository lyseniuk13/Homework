const qestionNum = 'Введіть номер квитка';
const num = prompt (qestionNum);
const sum1 = num%1000;
const sum2 = (num-sum1)/1000;
const n6 = sum1%10;
const n5 = ((sum1-n6)%100)/10;
const n4 = (sum1-n5*10-n6)/100;
const n3 = sum2%10;
const n2 = ((sum2-n3)%100)/10;
const n1 = (sum2-n2*10-n3)/100;
if((n1+n2+n3) == (n4+n5+n6))
alert ('Вітаю, це щасливий квиток')
else
alert('Ех, квиток не щасливий, спробуйте ще')
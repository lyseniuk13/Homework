{

}


{
const distance = Math.floor(Math.random()*100+1);
const time = Math.floor(Math.random()*10+1);
const speed = distance / time;
console.log(speed);
}


{
const operator = Math.floor(Math.random()*90+10);
const number = Math.floor(Math.random()*9000000+1000000)
const phone = `+38(0${operator})${number}`;
console.log(phone);
}


{
const number = Math.floor(Math.random()*7+1);

if(number === 1){
	console.log('Red');
}else{
	if(number === 2) console.log('Orange');
	if(number === 3) console.log('Yellow');
	if(number === 4) console.log('Green');
  if(number === 5) console.log('Blue');
  if(number === 6) console.log('Indigo');
  if(number === 7) console.log('Violet');
}
}


{
const number = Math.floor(Math.random() * 20) + 1;

for (let i = 2; i <= 9; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
}


{
for (let i = 1; i <= 10; i++) {
    const result = '*'.repeat(i);
    console.log(result);
}
}

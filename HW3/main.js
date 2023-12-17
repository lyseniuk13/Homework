{
const radius = Math.floor(Math.random()*10+1);
const height = Math.floor(Math.random()*10+1); 
const pi = 3.14; 
const volume = pi * radius ** 2 * height;
console.log(volume);
}

{
const day = Math.floor(Math.random()*7+1);

if(day === 1){
	console.log('Sunday');
}else{
	if(day === 2) console.log('Monday');
	if(day === 3) console.log('Tuesday');
	if(day === 4) console.log('Wednesday');
  if(day === 5) console.log('Thursday');
  if(day === 6) console.log('Friday');
  if(day === 7) console.log('Saturday');
}
}

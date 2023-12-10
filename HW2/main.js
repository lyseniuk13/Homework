{
	const hoursPerDay = 24;
	const minutePerHour = 60;
	const secondsPerMinute = 60;
	const days = 7;

	let hour = days * hoursPerDay;
	let min = hour * minutePerHour;
	let sec = min * secondsPerMinute;
 
	console.log(hour, min, sec);
}

{
	const rad1 = 3;
	const rad2 = 7; 

	let area1 = rad1 ** 2 * 3.14;
	let area2 = rad2 ** 2 * 3.14;

	let areaSum = area1 + area2;
	console.log(areaSum)
}

{
	const rad1 = 30;
	const rad2 = 45;
	const price1 = 150;
	const price2 = 200;

	let priceArea1 = price1 / (rad1 ** 2 * 3.14);
	let priceArea2 = price2 / (rad2 ** 2 * 3.14); 

	let maxValue = Math.max(priceArea1, priceArea2);
	let minValue = Math.min(priceArea1, priceArea2);

	console.log("Max Price:", maxValue, "Min Price:", minValue);
}

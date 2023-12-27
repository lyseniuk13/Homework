{
function calc() {
    let operand1 = parseFloat(prompt("Введіть перший операнд:"));
    let operator = prompt("Введіть оператор (+, -, *, /):");
    let operand2 = parseFloat(prompt("Введіть другий операнд:"));

    let result;

    switch (operator) {
        case '+':
            break;
        case '-':
            break;
        case '*':
            break;
        case '/':
            break;
        default:
            console.log("Невідомий оператор");
            return;
    }

    console.log(`Результат: ${result}`);
}


calc();
}


{
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let celsiusTemperature = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));

if (!isNaN(celsiusTemperature)) {
    let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
    console.log(`Температура в градусах Фаренгейта: ${fahrenheitTemperature}`);
} else {
    console.log("Будь ласка, введіть коректне числове значення для температури.");
}
}


{
  function rgbToHex(red, green, blue) {
    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        console.error("Кольорові компоненти повинні бути у межах від 0 до 255");
        return null;
    }

    const hexRed = red.toString(16).padStart(2, '0');
    const hexGreen = green.toString(16).padStart(2, '0');
    const hexBlue = blue.toString(16).padStart(2, '0');

    return `#${hexRed}${hexGreen}${hexBlue}`;
}

  const red = 255;
  const green = 127;
  const blue = 64;
  
  const hexColor = rgbToHex(red, green, blue);
  console.log(hexColor);
}


{
  function DNA_strand(dna) {
    var complement = "";
  
    for (var i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case 'A':
          complement += 'T';
          break;
        case 'T':
          complement += 'A';
          break;
        case 'C':
          complement += 'G';
          break;
        case 'G':
          complement += 'C';
          break;
        default:
          break;
      }
    }
  
    return complement;
}
}


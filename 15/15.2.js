const questionDNKfirsth = 'Введіть вашу ДНК';
const dnkfirsth = prompt(questionDNKfirsth);
if (dnkfirsth.length <= 3) {
    alert(Error)
} else if (dnkfirsth.length >= 6) {
    alert(Error)
} else if (dnkfirsth.length === 5) {
    const dnksecond = codednkfirsth[2] + codednkfirsth[1] + codednkfirsth[1] + codednkfirsth[5] + codednkfirsth[4]
} else if (dnkfirsth.length === 4) {
    const dnksecond = codednkfirsth[1] + codednkfirsth[3] + codednkfirsth[2] + codednkfirsth[3]
}
alert(dnksecond);
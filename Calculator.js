function cbtn1() {
    calcuForm.answerCalculated.value += '1';
}
function cbtn2() {
    calcuForm.answerCalculated.value += '2';
}
function cbtn3() {
    calcuForm.answerCalculated.value += '3';
}
function cbtnAdd() {
    calcuForm.answerCalculated.value += '+';
}
function cbtn4() {
    calcuForm.answerCalculated.value += '4';
}
function cbtnSub() {
    calcuForm.answerCalculated.value += '-';
}
function cbtnMul() {
    calcuForm.answerCalculated.value += '*';
}
function cbtn5() {
    calcuForm.answerCalculated.value += '5'
}
function cbtn6() {
    calcuForm.answerCalculated.value += '6';
}
function cbtn7() {
    calcuForm.answerCalculated.value += '7'
}
function cbtn8() {
    calcuForm.answerCalculated.value += '8'
}
function cbtn9() {
    calcuForm.answerCalculated.value += '9';
}
function cbtnDev() {
    calcuForm.answerCalculated.value += '/';
}
function cbtnZero() {
    calcuForm.answerCalculated.value += '0';
}
function cbtnEq() {
    calcuForm.answerCalculated.value = eval(calcuForm.answerCalculated.value);
}
function cbtnClear() {
    document.getElementById('answer').value = ' ';
}
function compute(opr){
    var result = 0;
    var firstNumber = document.querySelector("#first").value;
    var secondNumber = document.querySelector("#second").value;
    result = calcObject[opr](firstNumber,secondNumber);
    document.querySelector("#result").innerHTML = result;
}
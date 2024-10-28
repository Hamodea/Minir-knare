
// simpel räknare
function calculate() {
    const num1 = parseInt(prompt("Ange första siffran:"));
    const operator = prompt("Ange operator (+, -, *, /):");
    const num2 = parseInt(prompt("Ange andra siffran:"));

    let result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      alert("Ogiltig operator!");
      return;
    }

    alert("Resultatet är: " + result);
  }

// ny räknare med functions

  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculater() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }


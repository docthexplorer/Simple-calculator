var solveFunc = eval;
var started = false;

document.querySelector(".sin").addEventListener("click", function () {
  var inputValue = Math.sin(
    solveFunc(document.querySelector("#screen").value) * (Math.PI / 180)
  );
  document.querySelector("#screen").value = inputValue;
});

document.querySelector(".cos").addEventListener("click", function () {
  var inputValue = Math.cos(
    solveFunc(document.querySelector("#screen").value) * (Math.PI / 180)
  );
  document.querySelector("#screen").value = inputValue;
});

document.querySelector(".tan").addEventListener("click", function () {
  var inputValue = Math.tan(
    solveFunc(document.querySelector("#screen").value) * (Math.PI / 180)
  );
  document.querySelector("#screen").value = inputValue;
});

document.querySelector(".root").addEventListener("click", function () {
  var inputValue = Math.sqrt(
    solveFunc(document.querySelector("#screen").value)
  );
  document.querySelector("#screen").value = inputValue;
});

document.querySelector(".pow").addEventListener("click", function () {
  var inputValue = document.querySelector("#screen").value + "**";
  document.querySelector("#screen").value = inputValue;
});

document.querySelector(".mod").addEventListener("click", function () {
  var inputValue = document.querySelector("#screen").value + "%";
  document.querySelector("#screen").value = inputValue;
});

document.querySelector(".factorial").addEventListener("click", function () {
  nFactorial(solveFunc(document.querySelector("#screen").value));
});

document.querySelector(".pi").addEventListener("click", function () {
  document.querySelector("#screen").value = Math.PI;
});

document.querySelector(".e").addEventListener("click", function () {
  document.querySelector("#screen").value = Math.E;
});

document.querySelector(".log").addEventListener("click", function () {
  var inputValue = Math.log10(
    solveFunc(document.querySelector("#screen").value)
  );
  document.querySelector("#screen").value = inputValue;
});

document.addEventListener("keypress", function (event) {
  if (!started) {
    document.querySelector("#screen").value = "";
    started = true;
  }
  keyPress(event.code);
  animateButton(event.code);
});

document.querySelector(".eq").addEventListener("click", equalsTo);
document.querySelector(".ce").addEventListener("click", clearEntry);
document.querySelector(".ac").addEventListener("click", allClear);

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var currentButton = this.getAttribute("name");
    animateButton(currentButton);
  });
}
for (var i = 0; i < document.querySelectorAll(".input").length; i++) {
  document.querySelectorAll(".input")[i].addEventListener("click", function () {
    var dataInput = this.getAttribute("value");
    if (!started) {
      document.querySelector("#screen").value = "";
      started = true;
    }
    displayScreen(dataInput);
  });
}

function nFactorial(n) {
  if (n === 0 || n === 1) {
    document.querySelector("#screen").value = 1;
  } else {
    var xFactorial = n;
    for (var i = n - 1; i > 0; i--) {
      xFactorial *= i;
    }
    document.querySelector("#screen").value = xFactorial;
  }
}

function equalsTo() {
  var inputValue = solveFunc(document.querySelector("#screen").value);
  document.querySelector("#screen").value = inputValue;
}

function displayScreen(val) {
  document.querySelector("#screen").value += val;
}

function clearEntry() {
  var inputData = document.querySelector("#screen").value;
  var newData = inputData.substring(0, inputData.length - 1);
  document.querySelector("#screen").value = newData;
  if (newData === "") {
    setTimeout(allClear, 100);
  }
}

function allClear() {
  document.querySelector("#screen").value = 0;
  started = false;
}

function animateButton(buttonPressed) {
  document.querySelector("." + buttonPressed).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + buttonPressed).classList.remove("pressed");
  }, 200);
}

function keyPress(keyC) {
  switch (keyC) {
    case "Digit0":
      displayScreen(document.querySelector(".zero").value);
      break;
    case "Digit1":
      displayScreen(document.querySelector(".one").value);
      break;
    case "Digit2":
      displayScreen(document.querySelector(".two").value);
      break;
    case "Digit3":
      displayScreen(document.querySelector(".three").value);
      break;
    case "Digit4":
      displayScreen(document.querySelector(".four").value);
      break;
    case "Digit5":
      displayScreen(document.querySelector(".five").value);
      break;
    case "Digit6":
      displayScreen(document.querySelector(".six").value);
      break;
    case "Digit7":
      displayScreen(document.querySelector(".seven").value);
      break;
    case "Digit8":
      displayScreen(document.querySelector(".eight").value);
      break;
    case "Digit9":
      displayScreen(document.querySelector(".nine").value);
      break;
    case "Period":
      displayScreen(document.querySelector(".dot").value);
      break;
    case "Slash":
      displayScreen(document.querySelector(".divide").value);
    default:
      document.querySelector("#screen").value =
        document.querySelector("#screen").value;
  }
}

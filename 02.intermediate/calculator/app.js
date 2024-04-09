function clearScrean() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  const a = document.getElementById('result').value;
  const b = eval(a);
  document.getElementById('result').value = b;
}
document.getElementById('convert-btn').addEventListener('click', () => {
  const decimalInput = document.getElementById('decimal-input');
  const resultDiv = document.getElementById('result');

  const decimalNumber = parseInt(decimalInput.value.trim());

  if (isNaN(decimalNumber) || decimalNumber < 0) {
    resultDiv.textContent = "Please enter a valid non-negative number.";
    resultDiv.style.color = "red";
    return;
  }

  const binaryRepresentation = decimalNumber.toString(2);
  resultDiv.textContent = `Binary: ${binaryRepresentation}`;
  resultDiv.style.color = "#00ff00"; // Green digital font color
});

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('decimal-input').value = '';
  document.getElementById('result').textContent = '';
});
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height other than this ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid height other than this ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

    const message = document.createElement("div");
    if (bmi < 18.6) {
      message.textContent = "You are underweight!";
    } else if (bmi > 24.9) {
      message.textContent = "You are overweight!";
    } else {
      message.textContent = "You are fine!";
    }

    result.appendChild(message);
  }
});

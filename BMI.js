window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.getElementById("result");
    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please write your height";
        result.style.color = "red";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please write your weight";
        result.style.color = "red";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`;
        result.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
        result.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}`;
        result.style.color = "yellow";
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
        result.style.color = "orange";
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}`;
        result.style.color = "grey";
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
        result.style.color = "red";
    }
}
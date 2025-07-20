document.querySelector('.cal').addEventListener('click', function() {
    let weight = document.querySelector('.wt').value;
    let height = document.querySelector('.ht').value;

    if (weight === "" || height === "") {
        document.getElementById('result').innerHTML = "Please enter both weight and height!";
        return;
    }

    let bmi = weight / ((height/100) * (height/100));
    let bmiResult = bmi.toFixed(2);
    document.getElementById('result').innerHTML = "Your BMI is: " + bmiResult;
});

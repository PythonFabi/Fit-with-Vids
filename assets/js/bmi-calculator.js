var height = $('#height');
var weight = $('#weight');
var calculateButton = $('#submit');
var bmi = $('#bmi');

calculateButton.on('click', function(event) {
    event.preventDefault();
    calculateBmi();
});

function calculateBmi() {
    var heightValue = height.val();
    var weightValue = weight.val();
    var bmiResult = weightValue/(heightValue*heightValue).toFixed(1);
    roundedBmiResult = Math.round(bmiResult * 10) / 10;
    localStorage.setItem('bmiResult', roundedBmiResult);
    displayBmi()
}

function displayBmi() {
   var result = localStorage.getItem('bmiResult');
   console.log(result);
   bmi.text(result);
}

$(document).ready(displayBmi);

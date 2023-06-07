var choiceDescription = $('#choice-description');
var choiceButtons = $('#choice-buttons');
var buttonMale = $('#button-male');
var buttonFemale = $('#button-female');
var specifyGender = ['Men','Women'];
var exerciseType = ['Freeweights', 'Bodyweight'];
var muscleGroups = ['Chest', 'Biceps', 'Triceps', 'Forearms', 'Shoulders', 'Upper Back' , 'Lower Back', 'Abs', 'Legs', 'Glutes'];
var genderButton = $('.gender-button');
var exerciseButton = $('.exercise-button');
var muscleGroupButton = $('.muscle-group-button');
var youtubeDiv = $('#video-div')
var youtubeApiKey = 'AIzaSyBwiXi_lvfTht-p2D-CQRbttwkOB9yuOeM';
var backupKey = 'AIzaSyDK9ZnNT05_3cnumLG0OK1XT7uCswkJ50Q';

// those variables are defined to store the selected categories
var selectedGender;
var selectedExerciseType;
var selectedMuscleGroup;

// Add eventListener for the gender buttons and save the value of the selectedGender in selectedGender based on the clicked button
function handleClick(event) {
    var clickedButton = event.target;

    if ($(clickedButton).is(buttonMale)) {
        selectedGender = 'male';
    } else if ($(clickedButton).is(buttonFemale)) {
        selectedGender = 'female'; 
    };

    // create an object to save the values for each clicked button
    var categories = {
        gender: selectedGender,
        exerciseType: selectedExerciseType,
        muscleGroup: selectedMuscleGroup
    };

    localStorage.setItem('categories', JSON.stringify(categories));
    exerciseTypeChoice(); 
}


function exerciseTypeChoice() {
    // clear paragraph and buttons
    choiceDescription.html("");
    choiceButtons.html("");
    // add description 
    var description = $("<h5> Choose one of the following exercise types: (freeweights and bodyweight) <br>" +
    "<em>(Please look for the nearest gym for freeweights (involve equipment, such as dumbells, barbells etc.) and if you don't have or want to use any equipment, then simply choose bodyweight)</em></h5>");
    description.addClass('choice-descr');
    choiceDescription.append(description);

    // use a for loop to iterate through the array of exerciseTypes and creates buttons with the content of the array
    for (let i = 0; i < exerciseType.length; i++) {
        var choices = $("<button></button>");
        choices.text(exerciseType[i]);
        choices.addClass('choice-btns');

        // add eventlistener for the choice buttons and save the selectedExerciseButton choice based on the clicked button
        choices.click(function (event){

        if(event.target.textContent === exerciseType[0]) {
            selectedExerciseType = 'freeweights';
        } else {
            selectedExerciseType = 'bodyweight';
         
        };

        // pass the object values on and store the value in the object
        var categories = {
            gender: selectedGender,
            exerciseType: selectedExerciseType,
            muscleGroup: selectedMuscleGroup
        };

        // use JSON to set the categories inside of the localStorage and call the muscleGroupChoice function
        localStorage.setItem('categories', JSON.stringify(categories));
        muscleGroupChoice();
        });
        // append the choiceButtons for exerciseType inside the choiceButtons Div
        choiceButtons.append(choices);
    };


};

// create a function for the muscleGroupChoice to delete and append the new description and buttons
function muscleGroupChoice() {
    choiceDescription.html("");
    choiceButtons.html("");
    var description = $("<h5> Choose one of the following muscle groups: (Chest, Biceps, Triceps, Forearms, Shoulders, Upper Back , Lower Back, Abs, Legs) <br>" +
    "<em>(It is important to train each muscle group equally, in order to have a balanced and athletic body)</em></h5>");
    description.addClass('choice-descr');
    choiceDescription.append(description);

    // run a for loop over the muscleGroups array and create a button for each muscleGroup
    for (let i = 0; i < muscleGroups.length; i++) {
        var choices = $("<button></button>");
        choices.text(muscleGroups[i]);
        choices.addClass('choice-btns');

        // store values for each muscleGroup in the selectedMuscleGroup, depending on the chosen button
        choices.click(function (event){

        if(event.target.textContent === muscleGroups[0]) {
            selectedMuscleGroup = 'Chest';
        } else if(event.target.textContent === muscleGroups[1]) {
            selectedMuscleGroup = 'Biceps';
        } else if(event.target.textContent === muscleGroups[2]) {
            selectedMuscleGroup = 'Triceps';
        } else if(event.target.textContent === muscleGroups[3]) {
            selectedMuscleGroup = 'Forearms';
        } else if(event.target.textContent === muscleGroups[4]) {
            selectedMuscleGroup = 'Shoulders';
        } else if(event.target.textContent === muscleGroups[5]) {
            selectedMuscleGroup = 'Upper Back';
        } else if(event.target.textContent === muscleGroups[6]) {
            selectedMuscleGroup = 'Lower Back';
        } else if(event.target.textContent === muscleGroups[7]) {
            selectedMuscleGroup = 'Abs';
        } else if(event.target.textContent === muscleGroups[8]) {
            selectedMuscleGroup = 'Legs';
        } else if(event.target.textContent === muscleGroups[9]) {
            selectedMuscleGroup = 'Glutes';
        };

        // get the categories object again from the localStorage and store the selected Muscle Group
        var categories = JSON.parse(localStorage.getItem('categories'));
        categories.muscleGroup = selectedMuscleGroup;
    
        localStorage.setItem('categories', JSON.stringify(categories));

        console.log(categories);


        // only if all the buttons are clicked, you can redirect to the Vids.html and call the searchVideo function, with the selected choices as parameters
        if (categories.gender && categories.exerciseType && selectedMuscleGroup) {
            redirectToVids();
        } 
        });

        // append the choice buttons in the choiceButtonsDiv
        choiceButtons.append(choices);       
    };   
};


// this function will redirect the page to the vids.html
function redirectToVids() {
    window.location.href = 'vids.html';
}

// handle the first click event on the male or female button
buttonMale.click(handleClick);
buttonFemale.click(handleClick);


(function($){
    $(function(){
  
      $('.nav-button').sideNav({
        edge: 'left', 
        closeOnClick: true, 
        draggable: true
      }
      );
  
    }); 
  })(jQuery);

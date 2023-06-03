var choiceDescription = $('#choice-description');
var choiceButtons = $('#choice-buttons');
var buttonMale = $('#button-male');
var buttonFemale = $('#button-female');
var specifyGender = ['men','women'];
var exerciseType = ['freeweights', 'bodyweight'];
var muscleGroups = ['Chest', 'Biceps', 'Triceps', 'Forearms', 'Shoulders', 'Upper Back' , 'Lower Back', 'Abs', 'Legs'];
var genderButton = $('.gender-button');
var exerciseButton = $('.exercise-button');
var muscleGroupButton = $('.muscle-group-button');
var youtubeApiKey = 'AIzaSyBwiXi_lvfTht-p2D-CQRbttwkOB9yuOeM';

var selectedGender;
var selectedExerciseType;
var selectedMuscleGroup;

// Add eventListener for the gender buttons and save the value of the selectedGender in selectedGender based on the clicked button
function handleClick(event) {
    var clickedButton = event.target;

    if ($(clickedButton).is(buttonMale)) {
        selectedGender = 'male';
        exerciseTypeChoice();
        
    } else if ($(clickedButton).is(buttonFemale)) {
        selectedGender = 'female';
        exerciseTypeChoice();
        console.log(buttonFemale);
    }
    
}

// clear paragraph and buttons and create the choices for the exercisetype and save the input in selectedExerciseType
function exerciseTypeChoice() {
    choiceDescription.html("");
    choiceButtons.html("");
    var description = $("<p> Choose one of the following exercise types: (freeweights and bodyweight) <br>" +
    "<em>(Please look for the nearest gym for freeweights and if you don't have or want to use any equipment, then simply choose bodyweight)</em></p>");
    description.addClass('choice-descr');
    choiceDescription.append(description);

    for (let i = 0; i < exerciseType.length; i++) {
        var choices = $("<button></button>");
        choices.text(exerciseType[i]);
        choices.addClass('choice-btns');

        

        choices.click(function (event){

        if(event.target.textContent === exerciseType[0]) {
            selectedExerciseType = 'freeweights'
            muscleGroupChoice();
            
        } else {
            selectedExerciseType = 'bodyweight'
            muscleGroupChoice();
        };
         
            
        });
        // answer buttons appended in the questionsection
        choiceButtons.append(choices);
    };


};


function muscleGroupChoice() {
    choiceDescription.html("");
    choiceButtons.html("");
    var description = $("<p> Choose one of the following muscle groups: (Chest, Biceps, Triceps, Forearms, Shoulders, Upper Back , Lower Back, Abs, Legs) <br>" +
    "<em>(It is important to train each muscle group equally, in order to have a balanced and athletic body)</em></p>");
    description.addClass('choice-descr');
    choiceDescription.append(description);

    for (let i = 0; i < muscleGroups.length; i++) {
        var choices = $("<button></button>");
        choices.text(muscleGroups[i]);
        choices.addClass('choice-btns');

        

        choices.click(function (event){

        if(event.target.textContent === exerciseType[0]) {
            selectedExerciseType = 'freeweights'
            muscleGroupChoice();
            
        } else {
            selectedExerciseType = 'bodyweight'
            muscleGroupChoice();
        };
         
            
        });
        // answer buttons appended in the questionsection
        choiceButtons.append(choices);
    };


};

// gender: men and women
var categories = {
    gender: selectedGender,
    exerciseType: selectedExerciseType,
}

console.log(categories);

// muscleGroups 

// once I clicked all the buttons I want this to be implemented in the searchqueries


// once the queries are complete I want the video to be searched




function searchVideo(gender, exerciseType, musclegroup, level) {
    var searchApiUrl = 'https://www.googleapis.com/youtube/v3/search'
    var specificUrl = searchApiUrl + '?part=snippet&maxResults=15&q=' + specifyGender + '%20' + exerciseType + '%20' + muscleGroups + '%20' + level + '&key=' + youtubeApiKey;


    fetch(specificUrl) 
}




buttonMale.click(handleClick);
buttonFemale.click(handleClick);
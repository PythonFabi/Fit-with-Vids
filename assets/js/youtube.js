var choiceDescription = $('#choice-description');
var choiceButtons = $('#choice-buttons');
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


// clear paragraph and buttons and create the choices for the exercisetype and save the input in selectedExerciseType
function exerciseTypeChoice() {
    choiceDescription.html("");
    choiceButtons.html("");
    var description = $("<p> Choose one of the following exerciseTypes: (freeweights and bodyweight) <br>" +
    "Please look for the nearest gym for freeweights and if you don't have or want to use any equipment, then simply choose bodyweight</p>");
    description.addClass('choice-descr');
    choiceDescription.append(description);

    // loops through the array of firstQuestionAnswers and creates buttons with the values in the array
    for (let i = 0; i < exerciseType.length; i++) {
        var choices = document.createElement("button");
        choices.text(exerciseType[i]);
        choices.addClass('choice-btns');

        

        // listens for click on buttons two go to the second question
        choices.on('click', function (event){

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
var choices = {
    gender: genderButton.val(),
    exerciseType: exerciseButton.val()
}

// muscleGroups 

// once I clicked all the buttons I want this to be implemented in the searchqueries


// once the queries are complete I want the video to be searched




function searchVideo(gender, exerciseType, musclegroup, level) {
    var searchApiUrl = 'https://www.googleapis.com/youtube/v3/search'
    var specificUrl = searchApiUrl + '?part=snippet&maxResults=15&q=' + specifyGender + '%20' + exerciseType + '%20' + muscleGroups + '%20' + level + '&key=' + youtubeApiKey;


    fetch(specificUrl) 
}




// genderButton.on("click", function {

// })
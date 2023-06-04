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
var youtubeDiv = $('#video-div')
var youtubeApiKey = 'AIzaSyBwiXi_lvfTht-p2D-CQRbttwkOB9yuOeM';

// those variables are defined to store the selected categories
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
    };

    // create an object to save the values for each clicked button
    var categories = {
        gender: selectedGender,
        exerciseType: selectedExerciseType,
        muscleGroup: selectedMuscleGroup
    };

    localStorage.setItem('categories', JSON.stringify(categories));
}

// clear paragraph and buttons and create the choices for the exercisetype and save the input in selectedExerciseType
function exerciseTypeChoice() {
    choiceDescription.html("");
    choiceButtons.html("");
    var description = $("<p> Choose one of the following exercise types: (freeweights and bodyweight) <br>" +
    "<em>(Please look for the nearest gym for freeweights (involve equipment, such as dumbells, barbells etc.) and if you don't have or want to use any equipment, then simply choose bodyweight)</em></p>");
    description.addClass('choice-descr');
    choiceDescription.append(description);

    for (let i = 0; i < exerciseType.length; i++) {
        var choices = $("<button></button>");
        choices.text(exerciseType[i]);
        choices.addClass('choice-btns');

        

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
    var description = $("<p> Choose one of the following muscle groups: (Chest, Biceps, Triceps, Forearms, Shoulders, Upper Back , Lower Back, Abs, Legs) <br>" +
    "<em>(It is important to train each muscle group equally, in order to have a balanced and athletic body)</em></p>");
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
        };

        // get the categories object again from the localStorage and store the selected Muscle Group
        var categories = JSON.parse(localStorage.getItem('categories'));
        categories.muscleGroup = selectedMuscleGroup;
    
        localStorage.setItem('categories', JSON.stringify(categories));

        console.log(categories);


        // only if all the buttons are clicked, you can redirect to the Vids.html and call the searchVideo function, with the selected choices as parameters
        if (categories.gender && categories.exerciseType && selectedMuscleGroup) {
            redirectToVids();
            searchVideo(categories.gender, categories.exerciseType, categories.muscleGroup);
        } 
        });

        // append the choice buttons in the choiceButtonsDiv
        choiceButtons.append(choices);
    };

  

    
};


// once I clicked all the buttons I want this to be implemented in the searchqueries


// once the queries are complete I want the video to be searched


// level needs to be added to the parameters as well 
// this function will redirect the page to the vids.html
function redirectToVids() {
    window.location.href = 'vids.html';
}

// the searchVideo function uses the chosen parameters and passes those on to the URL, which will search for the right videos
function searchVideo(gender, exerciseType, muscleGroup) {
    var searchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
    var specificUrl = searchApiUrl + '?part=snippet&maxResults=15&q=' + gender + '%20' + exerciseType + '%20' + muscleGroup + '&key=' + youtubeApiKey;

    // the fetch is performed on the well constructed URL and returns a JSON response
    fetch(specificUrl)
        .then(function (response) {
            return response.json();
        })
        // once successful, the data from that response will be used to create iframe elements, which will include the videos
        .then(function (data){
            console.log(data);
            for (var i=0; i < data.length; i++) {
                // here we iterate through the data we got and embed the videoId from the data in the iframe and add per result one more iframe
                var videos = $('<iframe width="420" height="315" src="https://www.youtube.com/embed/' + data[i].id.videoId + '"></iframe>');
                // those videos get appended in the youtubeDiv
                youtubeDiv.append(videos);
            }

       
        })

        // in case of an error the window will display an alert with an error message
        .catch(function(error){
            window.alert('An unexpected error ocurred, please try again later:', error);
        });
};



// handle the first click event on the male or female button
buttonMale.click(handleClick);
buttonFemale.click(handleClick);
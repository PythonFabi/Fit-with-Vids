var specifyGender = ['men','women'];
var exerciseType = ['freeweight', 'bodyweight'];
var muscleGroups = ['Chest', 'Biceps', 'Triceps', 'Forearms', 'Shoulders', 'Upper Back' , 'Lower Back', 'Abs', 'Legs'];
var youtubeApiKey = 'AIzaSyBwiXi_lvfTht-p2D-CQRbttwkOB9yuOeM';

var selectedGender;
var selectedMuscleGroup;

// I want to choose between the following options

// gender: men and women

// muscleGroups 

// once I clicked all the buttons I want this to be implemented in the searchqueries


// once the queries are complete I want the video to be searched




function searchVideo() {
    var searchApiUrl = 'https://www.googleapis.com/youtube/v3/search'
    var specificUrl = searchApiUrl + '?part=snippet&maxResults=15&q=' + specifyGender + '%20' + exerciseType + '%20' + muscleGroups + '%20' + level + '&key=' + youtubeApiKey;
}
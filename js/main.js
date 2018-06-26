/*eslint-env browser*/
/*eslint "no-console": "off" */



/* SHOW UPCOMING EVENTS  */


function openMonth(evt, openButton) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openButton).style.display = "block";
    evt.currentTarget.className += " active";
    }


    var app = angular.module('myApp', []);
    app.controller('customersCtrl', function($scope, $http) {
        $http.get("dateData.js")
        .then(function (response) {$scope.names = response.data.records;});
    });


/* 
var showThem = document.getElementById("teamsDisplay");

function displayTheTeams(teamsDis){
    var showThem = "",
    teamsDis.displayTheTeams.array.forEach(function(teams) {

        showThem +=
        <div class="rounded-pics">
        
    });

} */
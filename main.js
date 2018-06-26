/*eslint-env browser*/
/*eslint "no-console": "off" */

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

openMonth();

function openMonth(evt, openMonth) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openMonth).style.display = "block";
    evt.currentTarget.className += " active";
}



/*var map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/light-v9",
                center: [18, 47.368650], // starting position
                zoom: 3 // starting zoom
            });
            map.addControl(new mapboxgl.NavigationControl());*/
/*eslint-env browser*/
/*eslint "no-console": "off" */

// SIGN UP WITH EMAIL AND PASSWORD NEW ACCOUNT
Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

// LOGIN WITH EMAIL AND PASSWORD

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  // LOG OUT OF THE ACCOUNT

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });



//check();

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "myModal";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.addEventListener('submit', function(e){
    var i = 0;
    while (i < inputsArr.length) {
      var attr = inputsArr[i].getAttribute('data-validation'),
          rules = attr ? attr.split(' ') : '',
          parent = inputsArr[i].closest(".field"),
          j = 0;
      while (j < rules.length) {
        if(!validations[rules[j]](inputsArr[i].value)) {
          e.preventDefault();
          
          errorMessage.className = "ui error message";
          errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
          parent.className = "field error";
          return false;
        }
        errorMessage.className = "ui error message hidden";
        parent.className = "field";
        j++;
      }
      i++;
    }
    e.preventDefault();
    successMessage.className = "ui success message";
    form.outerHTML = "";
    delete form;
  }, false)
}
validate();




/*var memberUse = document.getElementById("userid");
var memberPsw = document.getElementById("pswrd");

function check(){
    if(forms["0"]["0"].value == "team@nysl.org" && document.getElementById("pswrd").value == "Password1234")
        {
        window.open("https://www.youtube.com")
        }
    else
        {
            alert("The username and password you entered don`t match")
        }
        }

function validateForm() {
    var x = document.getElementById("contactName").value;
    if (x =="") {
        alert("Full Name must be filled out");
        return false;
    }
    
}*/

document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);


getPosts();

function login() {

    // https://firebase.google.com/docs/auth/web/google-signin
    
    // Provider
    var provider = new firebase.auth.GoogleAuthProvider();

    // How to Log In

    firebase.auth().signInWithPopup(provider)

    console.log("login");

}


function writeNewPost() {

    // https://firebase.google.com/docs/database/web/read-and-write

    // Values

    var text = document.getElementById("textImput")

    // A post entry.

    // Get a key for a new Post.

    //Write data

    console.log("write");
    
}


function getPosts() {

    // firebase.database().ref('myMessages').on('value', function (data) {
    //     var posts = document.getElementById("posts");
    //     posts.innerHTML = "";

    //     var messages = data.val();

    //     for (var key in messages) {
    //         var text = document.createElement("div");
    //         var element = messages[key];

    //         text.append(element.body);
    //         posts.append(text);
    //     }

    // })

    console.log("getting posts");

}
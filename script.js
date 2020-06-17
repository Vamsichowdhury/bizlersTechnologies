
// add new user to table

var newUser = document.getElementById("newUser");
newUser.addEventListener("click", displayUser);

var row = 5;
function displayUser(event) {
  event.preventDefault();
  var userName = document.getElementById("userName").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var role = document.getElementById("role").value;
  var x = document.getElementById("email").value;
  var profileImage = document.getElementById("select-image").files[0];

  var isErrors=false  //to check errors

//  profile image validation 
  if (profileImage == null) {
    alert("please select image of png or jpeg format");
    isErrors=true
  } else if (profileImage.size > 1048576) {
    // 1 mb for bytes.

    alert("please select image less than 1mb");
    isErrors=true
    return;
  }

  // email validation
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert("Please enter a valid e-mail address");
    isErrors=true
  }

// validate username,first name ,last name
  var validate_expr = /^[a-zA-Z0-9]+$/;
  if ((userName == "") | (firstName == "") | (lastName == "") | (role == "")) {
    alert("All fields sholud be filled!");
    isErrors=true
  }
  else if (
    !(
      validate_expr.test(userName) &
      validate_expr.test(firstName) &
      validate_expr.test(lastName)
    )
  ) {
    alert("Only Alphanumeric characters are allowed");
    isErrors=true
  }
  if(isErrors){
      return
  }

  // inserting new row into table
  var userTable = document.getElementById("userList");
  var newRow = userTable.insertRow(row);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  // inserting new user details into table
  cell1.innerHTML = userName;
  cell2.innerHTML = role;
  src = "https://img.icons8.com/material-rounded/24/000000/edit.png";
  cell3.innerHTML = "<img src='" + src + "' alt='my image'>";
  row++;

  setTimeout(function(){alert("success")},500)
}

// preview of profile image after selecting image
function loadImage(event){
    event.preventDefault();
    var profileImage=document.getElementById("profileImage");
    profileImage.src=URL.createObjectURL(event.target.files[0]);
    profileImage.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
      }
};

// cance new user entry 
function cancelUserEntry(){
    window.location.reload();
}
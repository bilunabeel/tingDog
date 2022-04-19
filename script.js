

function validate() {

  var email=document.getElementById('email').value;
var password=document.getElementById('password').value;

  if (email == "92nabeelmv@gmail.com" && password == "nabeelmv") {
    alert("Login successful");
    window.location = "index.html";
  } else {
    alert("Please enter correct email or password");
  }
}

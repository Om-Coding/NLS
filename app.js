const backendUrl = "https://script.google.com/macros/s/AKfycbxSA8lox-WEVQJmuPe9tIlI8jghvrg7H44_Kn0Qoz18PupU41dbffyQrVBLA__HUcfd2Q/exec";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  google.script.run.withSuccessHandler(function(isValid) {
    if (isValid) {
      localStorage.setItem("user", user);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login");
    }
  }).checkLogin(user, pass);
}

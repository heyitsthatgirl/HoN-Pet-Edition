const Sorted = document.getElementById("Sorted");
const Profile = document.getElementById("Profile");
const Addpic = document.getElementById("Add-pic");




Profile.addEventListener("click", async function() {
  console.log("here is the button")
  // const email = document.querySelector('#email-login').value.trim();
  // const password = document.querySelector('#password-login').value.trim();
  
  // const response = await fetch("/api/user/login", {method: "GET", body: JSON.stringify({email, password}), headers: {"Content-type": "application/json"}});
  // const data = response.json();

  
document.location.replace('/profilepage')
  
      
});
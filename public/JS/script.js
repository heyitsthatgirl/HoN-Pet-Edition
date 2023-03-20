// script.js
const Home = document.getElementById("Home");
const logout = document.getElementById("logout");
const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const files = document.getElementById("image2");
  const formData = new FormData();

  formData.append("name", name.value);
  for (let i = 0; i < files.files.length; i++) {
    formData.append("image2", files.files[i]);
  }
  fetch("/upload", {
    method: "POST",
    body: formData,
    // headers: {
    //   "Content-Type": "multipart/form-data"
    // }
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
}


function goHome() {
  document.location.replace("/homepage");
}

Home.addEventListener("click", goHome);

async function logoutUser() {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
}

logout.addEventListener("click", logoutUser);

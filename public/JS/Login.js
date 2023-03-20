const login = document.getElementById("login");
const submitButton = document.getElementById("submit");

login.addEventListener("click", async function () {
  const email = document.getElementById("floatingInput").value.trim();
  const password = document.getElementById("floatingPassword").value.trim();

  console.log(email, password);

  if (!email || !password) {
    return "Try again loser";
  }

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-type": "application/json" },
  });
  const data = response.json();

  if (data) {
    document.location.replace("/homepage");
  }
});

submitButton.addEventListener("click", async function () {
  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  console.log(email, password);

  if (!email || !password) {
    return "Try again dummy";
  }

  const response = await fetch("/api/user/create", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-type": "application/json" },
  });
//   const data = response.json();

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert("Failed to sign up");
  }
});

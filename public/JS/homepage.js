const Profile = document.getElementById("Profile");
const Hot = document.getElementById("hot");
const Not = document.getElementById("not");
var pictId = 1;
// take user to their profile page
Profile.addEventListener("click", async function () {
  console.log("here is the button");
  document.location.replace("/profilepage");
});
Hot.addEventListener("click", async function () {
  const response = await fetch("/api/pics/vote", {
    method: "POST",
    body: JSON.stringify({ pictId }),
    headers: { "Content-type": "application/json" },
  });
  pictId++;
});
Not.addEventListener("click", async function () {
  console.log("NOT");
  pictId++;
});
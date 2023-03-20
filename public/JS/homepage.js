// target profile button
const Profile = document.getElementById("Profile");

// take user to their profile page
Profile.addEventListener("click", async function () {
  console.log("here is the button");

  document.location.replace("/profilepage");
});

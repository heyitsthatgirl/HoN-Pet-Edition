// target profile button
// const voteUpdate = require('../../utils/pics');
const Profile = document.getElementById("Profile");
const Hot = document.getElementById("hot");
const Not = document.getElementById("not");
// const ID = 0;
// take user to their profile page
Profile.addEventListener("click", async function () {
  console.log("here is the button");
  document.location.replace("/profilepage");
});

Hot.addEventListener("click", async function () {
  console.log("HOT");
  // voteUpdate(ID);
  // ID++;
});

Not.addEventListener("click", async function () {
  console.log("NOT");
  // ID++;
});

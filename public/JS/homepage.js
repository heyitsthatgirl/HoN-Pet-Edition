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

window.onload = choosePic;

window.onclick = choosePic;

var myPix = new Array("https://res.cloudinary.com/di4jj6chw/image/upload/v1679348306/b75mwkrlsid6r7eocxde.webp", "https://res.cloudinary.com/di4jj6chw/image/upload/v1679346970/svmgqxjkh1iybnp2mtij.jpg", "https://res.cloudinary.com/di4jj6chw/image/upload/v1679336634/rtslrmbwxom4q2frfbfp.jpg", "https://res.cloudinary.com/di4jj6chw/image/upload/v1679763025/m7yfob3kkyew4rr1m5od.jpg", "http://res.cloudinary.com/di4jj6chw/image/upload/v1679862234/xrupxmksicp5ww9jws7p.jpg", "http://res.cloudinary.com/di4jj6chw/image/upload/v1679863443/hwjooc5leyubxpjqrjbf.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("homePic").src = myPix[randomNum];
}
const logout = document.getElementById("logout");

logout.addEventListener("click", async function() {
  
   const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // const data = response.json();
  console.log(response,"this is response");

  

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
});

 


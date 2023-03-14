const login = document.getElementById("login");

login.addEventListener("click", function() {
    const email = document.getElementById("floatingInput").value.trim();
    const password = document.getElementById("floatingPassword").value.trim();

    console.log(email, password);

    if(!email || !password) {
        return "Try again loser";
    };
        

});
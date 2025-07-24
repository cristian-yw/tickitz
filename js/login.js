const form = document.getElementById("formlogin")
const errormsg = document.getElementById("errormsg")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    let errors = []

    const emailptrn = /@.*\./
    if (!email.match(emailptrn)){
        errors.push("Email tidak valid")
    }
    if (password.length < 8){
        errors.push("Password minimal 8 karakter")
    }
    if(!/[a-z]/.test(password)){
        errors.push("Password harus mengandung huruf kecil")
    }
    if(!/[!@#$%^&*/><]/.test(password)){
        errors.push("Password harus mengandung karakter sepesial")
    }
    if (email === "" || password === ""){
        errors.push("Email dan Password tidak boleh kosong")
    }
    if (errors.length > 0 ){
        errormsg.innerHTML = errors.join("<br>")
    }else {
        errormsg.innerHTML = ""
        console.log(localStorage.getItem("email"))
        console.log(localStorage.getItem("password"))
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href = "/pages/login/login2.html"
    }
})
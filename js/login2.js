const form = document.getElementById("formlogin")
const errormsg = document.getElementById("errormsg")
let emaills=localStorage.getItem("email")
let passls=localStorage.getItem("password")

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
    if (!email == emaills || !password == passls){
        errors.push("Email atau Password anda salah")
    }
    if (errors.length > 0 ){
        errormsg.innerHTML = errors.join("<br>")
    }else {
        const userdata = {
            email: email,
            password: password,
            avatar: "/img/Ellipse 11.png"
        }
        localStorage.setItem("userlg", JSON.stringify(userdata))
        window.location.href = "/index.html"
    }
})



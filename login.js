const email = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const btn = document.getElementById("btn__formulario")
let perfil = {
    email_v: "edinsondani@gmail.com",
    password: "EdinsonD",
}
    
btn.addEventListener('click', (e) => {
    e.preventDefault()

    localStorage.setItem("usuario",JSON.stringify(perfil))
    var localstorage = localStorage.getItem("usuario")
    var araystorage=JSON.parse(localstorage)
    
    if((email.value == araystorage.email_v) && (contraseña.value == araystorage.password))
        window.location="productos.html"
    else if((email.value == araystorage.email_v) && (contraseña.value != araystorage.password))
        alert("contraseña incorrecta")
    else if((email.value != araystorage.email_v) && (contraseña.value != araystorage.password))
        alert("Usted no tiene acceso")
    else if((email.value != araystorage.email_v) || (contraseña.value != araystorage.password))
        alert("correo o contraseña incorrecta")

    })


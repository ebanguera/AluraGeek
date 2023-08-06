const email = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const btn = document.getElementById("btn__formulario")
let perfil = {
    email_v: "edinsondani@gmail.com",
    password: "EdinsonD",
}
    
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const datos = {
        username: email.value,
        contraseña: contraseña.value
    }

    if((datos.username == perfil.email_v) && (datos.contraseña == perfil.password))
        window.location="productos.html"
    else if((datos.username == perfil.email_v) && (datos.contraseña != perfil.password))
        alert("contraseña incorrecta")
    else if((datos.username != perfil.email_v) && (datos.contraseña != perfil.password))
        alert("Usted no tiene acceso")
    else if((datos.username != perfil.email_v) || (datos.contraseña != perfil.password))
        alert("correo o contraseña incorrecta")
    })


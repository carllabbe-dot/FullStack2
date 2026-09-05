//identificar el correo
const inputEmail = document.getElementById("inicio-sesion-mail")

//identificar la contraseña
const inputPassword = document.getElementById("inicio-sesion-pswd")

//identificar el boton
const botonInicioSesion = document.getElementById("btn-inicio-sesion")

//Agregar evento al click
botonInicioSesion.addEventListener("click",function(){
    //Obtener correo del input
    const email = inputEmail.value
    const password = inputPassword.value
    if(email === "admin@tienda.cl" & password === "123"){
        //Guardar el rol del usuario en localStorage
        localStorage.setItem('rol_usuario','admin')
        //Redirigir a la pagina admin/index.html
        window.location = 'admin/index.html'
    } else if (email === 'vendedor@tienda.cl'){
        localStorage.setItem('rol_vendedor','vendedor')
        //Redirigir a la pagina admin/vendedor.html
        window.location = 'admin/vendedor.html'
    } else{
        alert("Credenciales incorrectas")
    }

})
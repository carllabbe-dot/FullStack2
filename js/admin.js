//Obtenemos el rol desde localStorage

const rolUsuario = localStorage.getItem('rol_usuario')

//Preguntar si el rol es distinto a admin

if(rolUsuario != 'admin'){
    //Redirigimos al home
    window.location = '../index.html'
}
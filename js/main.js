alert("Bienvenidos al Grupo Scout Nuestra Sra. de America Latina")
let cantIncorporaciones = prompt("Ingrese la cantidad de incorporaciones:")
alert("El grupo tiene un cupo para incorporar " + cantIncorporaciones + " personas")

const ramas = ["Castores", "Manada", "Unidad", "Caminantes", "Rover", "Educador"]


function datosPersona() {
    const nombre = prompt("Ingrese el nombre:");
    const edad = parseInt(prompt("Ingrese la edad:"));
    return { nombre, edad };
}

function determinarGrupo(edad) {
    if (edad<=7) 
        return ramas [0];
    else if (edad<=12) 
        return ramas [1];
    else if (edad<=15) 
        return ramas [2];
    else if (edad<=18) 
        return ramas [3];
    else if (edad<=21)
        return ramas [4];
    else (edad>21)
        return ramas [5]
}

function mostrarGrupo(nombre, ramas) {
    console.log(nombre + " pertenece al grupo: " + ramas);
}

for (let i = 0; i < cantIncorporaciones; i+=1) {
    const { nombre, edad } = datosPersona();
    const grupo = determinarGrupo(edad);
    mostrarGrupo(nombre, grupo);
}

alert("Se alcanzó el límite de incorporaciones.");
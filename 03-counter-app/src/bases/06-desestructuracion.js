//Desestructuracion de objetos

const estructura= {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    latlng: {
        lat: 14.1232,
        lng: -12.3232
    }
};

const { nombre:nombre2, edad, clave } = estructura;

console.log(nombre2)
console.log(edad)
console.log(clave)

// parametros y desestructuracion

const retornaPersona = ({ nombre, edad, rango= 'Capitan' ,latlng:{lat,lng}})=>{
    console.log(nombre,edad ,rango);
    console.log(lat,lng);
};

retornaPersona(estructura);
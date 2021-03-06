//objects literal
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 14.3232,
        lng: 34.923321
    }
};
console.log( persona );

//operador sprint
 const persona2 = { ...persona };
 persona2.nombre = 'Peter';

 console.log(persona2);


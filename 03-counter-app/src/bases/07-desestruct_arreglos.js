// desestructuracion de arreglos

const personajes = ['Morty', 'Rick', 'Jerry'];
const [,,p3]=personajes;

export const retornaArreglo=()=>{
    return ['ABC',123];
}
const [letras, numeros]=retornaArreglo();

const setEstado = (valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}];
};

const arr = setEstado('Squansh');
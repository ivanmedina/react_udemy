// desestructuracion de arreglos

const personajes = ['Morty', 'Rick', 'Jerry'];
const [,,p3]=personajes;
console.log(p3);

const retornaArreglo=()=>{
    return ['ABC',123];
}
const [letras, numeros]=retornaArreglo();
console.log(letras,numeros);

const setEstado = (valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}];
};

const arr = setEstado('Squansh');
console.log(arr);

const [ nombre3,setNombre]=setEstado('Fanta');

console.log(nombre3)
setNombre();
//template strings
const nombre= 'Ivan';
const apellido='Medina';

const nombre_completo=`${nombre} ${apellido}`;
// console.log(nombre_completo);

export function getSaludo(nombre){
    return 'Hola '+nombre;
}
//funciones

function saludar(nombre){
    return `Hola, ${nombre}`
}

console.log(saludar('Sidral Mundet'));

const saludar_con_flecha=(nombre)=> `Hola, ${ nombre }`;

console.log(saludar_con_flecha('su majestad'));

export const getUser = () => ({
    uid: 'ABCD123',
    username: 'Maximiliano'
});

console.log(getUser());

const getUsuarioActivo=(nombre)=>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
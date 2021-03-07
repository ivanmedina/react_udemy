import { getSaludo } from "../../bases/02-templates";

describe('Pruebas en el archivo templates.test.js',()=>{
    test('get Saludo debe retornar Hola Ivan',()=>{
        const nombre='Ivan';
        const saludo=getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre);
    })
})
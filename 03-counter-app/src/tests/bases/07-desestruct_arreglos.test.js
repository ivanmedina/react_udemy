import {retornaArreglo} from '../../bases/07-desestruct_arreglos'
describe('Pruebas en el archivo 07-desestruct_arreglos.test.js',()=>{
    test('debe retornar un string y un numero ',()=>{
        const [letras,numeros]=retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
    });
})
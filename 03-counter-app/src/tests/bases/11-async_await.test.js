import {getImagen} from '../../bases/11-async_await';

describe('Pruebas con async y await para fetch',()=>{
    test('Debe retornar la url',async ()=>{
        const url= await getImagen();
        console.log(url);
        expect( url.includes('https://') ).toBe(true);
    })
})
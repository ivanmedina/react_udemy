import { getGifs } from "../../helpers/getGifs";

describe('Pruebas a helper/getGIfs.js',()=>{

    test('Debe regresar 10 gifs', async()=>{
        const gifs=await getGifs('hola');
        expect(gifs.length).toBe(20);
    })

})
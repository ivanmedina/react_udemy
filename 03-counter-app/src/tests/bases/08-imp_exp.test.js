import { getHeroeById } from '../../bases/08-imp_exp';
import heroes from '../../tests/data/heroes'
describe('Pruebas en funciones de heroes',()=>{
    test('debe retornar un heroe por id',()=>{
        const id=1;
        const heroe=getHeroeById(id);
        const heroeData=heroes.find(h=>h.id===id);
        expect(heroe).toEqual(heroeData);
    })
    test('debe retornar undefined si heroe no existe',()=>{
        const id=10;
        const heroe=getHeroeById(id);
        // const heroeData=heroes.find(h=>h.id===id);
        expect(heroe).toEqual(undefined);
    })
})
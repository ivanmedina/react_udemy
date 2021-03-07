import {getHeroesByIdAsync} from '../../bases/09-promesas';
import heroes from '../data/heroes';
describe('Pruebas con promesas',()=>{
    test('getHeroesByIdAsync debe retornar un heroe async',(done)=>{
       const id=1;
       getHeroesByIdAsync(id)
       .then( heroe => {
           expect(heroe).toBe(heroes[0]);
           done();
       })
    })
    test('getHeroesByIdAsync debe retornar error si no existe',(done)=>{
       const id=10;
       getHeroesByIdAsync(id)
       .catch( error => {
           expect(error).toBe("No se pudo encontrar el heroe");
           done();
       })
    })
})
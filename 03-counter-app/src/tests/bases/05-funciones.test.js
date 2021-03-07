import { getUser } from "../../bases/05-funciones";

describe('Pruebas en 05-funciones.js',()=>{
    test('Debe de retornar un objeto',()=>{
        const userText={
            uid: 'ABCD123',
            username: 'Maximiliano'
        }
        const user=getUser();

        expect(user).toEqual(userText);
    })
});
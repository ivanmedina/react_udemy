import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

// pruebas con jest para componentes
describe('Pruebas en <PrimeraApp />',()=>{
    // la siguiente prueba se comenta para empezar a probar enzyme
    // test('debe de mostrar "Hola, soy Ivan"',()=>{
    //     const saludo="Hola, soy Ivan";
    //     const { getByText } = render(<PrimeraApp saludo={saludo}/>)
    //     expect( getByText(saludo)).toBeInTheDocument();
    // })
    
    // probar que se muestre correctamente mi componente
    test('debe de mostrar <PrimeraApp /> correctamente',()=>{
        const saludo ="Hola, soy Ivan";
        const wrapper = shallow( <PrimeraApp saludo={saludo}/>);
        expect( wrapper).toMatchSnapshot;
    })

    // acceder al componente y probar un elemento del componente
    test('debe de mostrar el subtitulo enviado por props',()=>{
        const saludo='Hola, soy Ivan';
        const subtitulo="Buenas noches";
        const wrapper=shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        const textParrafo=wrapper.find('p').text();
        // expect(textParrafo).toBe(subtitulo);
        console.log(typeof textParrafo);
        console.log(textParrafo);
        expect(textParrafo).toBe(subtitulo);
    })
})

//a partir de ahora trabajaremos con Enzyme
import React from 'react';
import {shallow} from 'enzyme';
import {RealExampleRef} from '../../../components/04-useRef/RealExampleRef'


describe('Prueba en <RealExampleRef />',()=>{

    const wrapper=shallow(<RealExampleRef />)
    test('debe de mostrarse correctamente',()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrarse el componente <MUltipleCustomHooks/>',()=>{
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    })

})
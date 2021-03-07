import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prube a CounterApp', ()=>{

    let wrapper=shallow(<CounterApp value={100}/>);;
    
    // la siguiente instruccion sirve para iniciarlizar
    // cada prueba durante el ciclo de vida de cada una.

    beforeEach(()=>{
        wrapper=shallow(<CounterApp value={100}/>);
    });

    // const wrapper = shallow(<CounterApp value={100}/>);
    test('debe de mostrar <CounterApp /> correctamente',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto', ()=>{
        const counterText=wrapper.find('h2').text();
        expect(counterText).toBe('100');
    });

    test('debe de incrementar con el botn +1',()=>{
        const btn1=wrapper.find('button').at(0).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('101');
    })

    test('debe de decrementar con el botn -1',()=>{
        // const wrapper = shallow(<CounterApp value={100}/>);
        wrapper.find('button').at(2).simulate('click');
        // console.log(btn1.html());
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('99');
    })

    test('debe de colocar el valor por defecto con el boton reset',()=>{
        const wrapper=shallow(<CounterApp value={105}/>);;
        // const wrapper = shallow(<CounterApp value={100}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        // console.log(btn1.html());
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    })
})
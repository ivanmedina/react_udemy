import React from 'react';
import {shallow} from 'enzyme';
import {HookApp} from '../HookApp';
describe('Pruebas en <Hook>', ()=>{
    test('Debe mostrarse correctamente',()=>{
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
})
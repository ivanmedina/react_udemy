import React from 'react';
import {shallow} from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch.js');

describe('Pruebas en <MultipleCUstomHooks />',()=>{

    test('debe de mostrarse correctamente', ()=>{
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        })
        const wrapper= shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar la informacion', ()=>{
        // useFetch 
        useFetch.mockReturnValue({
            data:[
                {
                    author:'Ivan Medina',
                    quote: 'Hello world'
                }
            ],
            loading:false,
            error:null
        })
        const wrapper=shallow(<MultipleCustomHooks />);
        console.log(wrapper.html());
        expect(wrapper.find('.mb-0').text().trim()).toBe("Hello world");
    })

})
import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el <GifGrid />',()=>{
    
    const category='Gamer';

        test('debe de mostrarse correctamente',()=>{
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cargar items cuando se cargan imagenes useFetchGifs', ()=>{
        const gifs=[{
            id:'ABC',
            url:'https://localhost/elementos/cosa.jpg',
            title: 'Cualquier cosa'
        },{
            id:'123',
            url:'https://localhost/elementos/cosa.jpg',
            title: 'Cualquier cosa'
        },]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        const wraper=shallow(<GifGrid category={category}/>);
        expect(wraper).toMatchSnapshot();
        
        expect(wraper.find('p').exists()).toBe(false);
        expect(wraper.find('GifGridItem').length).toBe(gifs.length);
    });
})
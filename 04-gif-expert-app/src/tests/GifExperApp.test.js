import { GifExpertApp } from "../GifExpertApp";
import { shallow } from "enzyme";
describe('Prueba en <GifExpertApp /',()=>{
    
    test('debe de mostrarse correctamente',()=>{
        const wrapper =shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias',()=>{
        const categories = ['hola','adios'];
        const wraper =shallow(<GifExpertApp defaultCategories={categories}/>);
        
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('GifGrid').length).toBe(categories.length);
        
    })

})
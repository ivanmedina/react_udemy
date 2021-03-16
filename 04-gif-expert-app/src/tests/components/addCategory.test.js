import { shallow } from "enzyme";
import { AddCategory} from "../../components/addCategory";

describe('Pruebas para componente addCategory',()=>{
    
    // esto ...
    // const setCategories=()=>{};
    // es lo mismo que esto
    const setCategories=jest.fn();
    

    let wraper=shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wraper=shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('El componente debe mostrarse correctamente',()=>{

        expect(wraper).toMatchSnapshot();

    })

    test('Debe cambiar la caja de texto',()=>{

        const input=wraper.find('input');
        const value="Hola mundo";
        
        input.simulate('change',{target:{value}})

        expect(wraper.find('p').text().trim()).toBe(value);

    })

    test('Debe funcionar preventDefault en submit',()=>{
        wraper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe llamar al setCategories',()=>{
        
        const value="Hola mundo";

        // 1. simular el inputChange
        wraper.find('input').simulate('change',{target:{value}});

        // 2. simular el submit
        wraper.find('form').simulate('submit',{preventDefault(){}});
        
        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();

    })
})
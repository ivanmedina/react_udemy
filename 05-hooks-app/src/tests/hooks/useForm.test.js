import { renderHook,act } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Pruebas a useForm',()=>{
    const initalForm={
        name:'Ivan',
        email:'ivansk8.imm@gmail.com'
    }

    test('debe de regresar un formulario por defecto',()=>{
        const {result}=renderHook( ()=>useForm(initalForm));
        const [formValues,handleInputChange,reset]=result.current;

        expect(formValues).toEqual(initalForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    })
    test('debe de cambiar el valor de name',()=>{
        const { result }=renderHook(()=>useForm(initalForm));
        const [,handleInputChange]=result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Erasmo Catarino'
                }
            })
        })
        const [formValues]=result.current;
        expect(formValues).toEqual({...initalForm, name:'Erasmo Catarino'})

    })
    test('debe de re-establecer el formulario con RESET',()=>{
        const { result }=renderHook(()=>useForm(initalForm));
        const [,handleInputChange,reset]=result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Erasmo Catarino'
                }
            })
            reset();
        })
        const [formValues]=result.current;
        expect(formValues).toEqual({...initalForm})
    })

})
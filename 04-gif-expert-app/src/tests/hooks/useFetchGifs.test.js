import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('debe retornar el estado inicial',()=>{

    test('debe de retornar el estado inicial', async ()=>{
        const {result, waitForNextUpdate}=renderHook(()=>useFetchGifs('hola'));
        const {data,loading}=result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    })

    test('debe de retornar un arreglo de imgs y el loading en false', async ()=>{
        const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs('hola'));
        await waitForNextUpdate();
        const {data,loading}=result.current;
        expect(data.length).toBe(20);
        expect(loading).toBe(false);
    })
})
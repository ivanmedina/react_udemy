import React, {useState,useMemo} from 'react';
import { useCounter } from '../../hooks/useCounter';
export const MemoHook = () => {
    const {counter, increment}=useCounter(100);
    const [show, setShow]=useState(true);

    const procesoPesado=(iteraciones)=>{
        for(let i=0;i<iteraciones;i++){
            console.log('ahi vamooos...')
        }

        return `${iteraciones} iteraciones realizadas`;
    }

    const memoProcesoPesado=useMemo(()=>procesoPesado(counter) , [counter])
    
    return (
        <div>
            <h1>Memo hook</h1>
            <h3>{counter}</h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-primary"
                onClick={
                    ()=>{
                        setShow(!show);
                    }
                }
            >
                Show/hide {JSON.stringify(show)}
            </button>

        </div>
    )
}

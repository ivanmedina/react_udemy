import React, {useState} from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small} from '../06-memos/Small'
export const Memorize = () => {
    const {counter, increment}=useCounter(10);
    const [show, setShow]=useState(true);
    return (
        <div>
            <h1><Small value={counter}/></h1>
            <hr/>
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

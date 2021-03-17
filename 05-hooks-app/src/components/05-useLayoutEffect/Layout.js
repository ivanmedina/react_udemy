import React, {useState, useRef, useLayoutEffect} from 'react'
import {useFetch} from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
// import './efects.css'
export const Layout = () => {

    const {counter, increment } =useCounter(1);

    const {data}=useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const { quote} = !!data && data[0];

    const pTag=useRef();
    const [boxSize,setBoxSize]=useState({});

    useLayoutEffect(()=>{
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote])

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            <blockquote className="blockquote text-end">
                <p 
                    ref={pTag}
                >{quote}</p>
            </blockquote>
            <pre>{JSON.stringify(boxSize,null,3)}</pre>
            <button 
                className="btn btn-primary"
                onClick={increment}
            >Siguiente quote</button>
        </div>
    )
}

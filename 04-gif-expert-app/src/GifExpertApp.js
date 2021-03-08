import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './components/addCategory';
import { GifGrid } from './components/GifGrid';
import './index.css'

export const GifExpertApp=()=>{
    const [categories, setCategories]=useState(['360 flip']);

    // const handleAdd=()=>{
    //     setCategories([...categories,'Skateboarding']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category=>(
                        <GifGrid
                            key={ category }
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}
import React, { useState } from 'react'
import propTypes from "prop-types";

export function AddCategory({setCategories}) {
    const [inputValue, setInputValue]=useState('');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(categorias=>[ inputValue, ...categorias]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange}
            />
        </form>
        
    )
}

AddCategory.propTypes={
    setCategories: propTypes.func.isRequired
};

export default AddCategory

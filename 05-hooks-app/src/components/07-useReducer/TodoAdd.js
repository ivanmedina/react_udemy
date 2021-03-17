import React from 'react'
import {useForm} from '../../hooks/useForm'
export const TodoAdd = ({ handleAddTodo}) => {

    const [{description}, handleInputChange, reset] =useForm({
        description:''

    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(description.trim().length<=1){
            return;
        }

        const newTodo={
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
        
    }

    return (
        <>
            <h3>Agregar Todo</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    onChange={handleInputChange}
                    value={description}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 col-12"
                >
                    Guardar
                </button>
            </form>
        </>
    )
}

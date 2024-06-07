import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'user42',
        email: 'correo42@mail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) =>{
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
        // console.log('Use Effect!');
    } );

    useEffect( () => {
        // console.log('formState Changed!');
    },[formState] );
    

    useEffect( () => {
        // console.log('Email Changed!');
    },[email] );
    

    return (
        <>
            <div>Formulario Simple</div>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value = { username }
                onChange = { onInputChange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="user@user.com"
                name="email"
                value={email}
                onChange = { onInputChange }
            />
            { username === 'user01' && <Message />}
            
        </>
    )
}

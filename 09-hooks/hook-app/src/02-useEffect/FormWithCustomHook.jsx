import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = ( ) => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    );


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
            <div>Formulario con Custom Hooks</div>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="user@user.com"
                name="password"
                value={password}
                onChange = { onInputChange }
            />
            { username === 'user01' && <Message />}
            
            <button onClick={ onResetForm } className='btn btn-primary'>Borrar</button>
        </>
    )
}

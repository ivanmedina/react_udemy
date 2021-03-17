import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    //1. Obtener la referencia al userContext
    const {setUser} = useContext(UserContext);


    return (
        <div>
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button className="btn btn-primary"
                onClick={()=>setUser({
                    id:"Ivan",
                    name:"Medina",
                })}
            >
                Login
            </button>
        </div>
        </div>
    )
}

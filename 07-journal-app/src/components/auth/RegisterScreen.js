import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    />
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="confirm"
                    className="auth__input"
                    autoComplete="off"
                />
                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Register
                </button>
                <Link
                    className="link" 
                    to="/auth/login"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
 
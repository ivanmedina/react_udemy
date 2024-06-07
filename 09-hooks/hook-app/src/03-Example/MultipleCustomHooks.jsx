import React, { useState } from 'react';
import { useFetch, useCounter } from '../hooks';
import { LoadingQuotes, Quote } from './';

export const MultipleCustomHooks = () => {

    
    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch("https://rickandmortyapi.com/api/character/"+counter);

    console.log( { data, isLoading, hasError } );

    return (
        <>
            <h1>Rick And Morty</h1>
            <hr />

            {
                isLoading ? 
                <LoadingQuotes />
                :
                <Quote character={data.name} image={data.image}/>
            }

            <button className="btn btn-primary" onClick={increment} disabled={ isLoading }>
                Next Character
            </button>

        </>
    )
}

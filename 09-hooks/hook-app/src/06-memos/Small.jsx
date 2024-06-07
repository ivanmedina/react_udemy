import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log('Me volvi a dibujar :(');

    return (
        <div>{value}</div>
    )
})

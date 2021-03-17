import React from 'react'

export const Small = React.memo(({value}) => {
    console.log(':c')
    return (
        <small> {value} </small>
    )
})

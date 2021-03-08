import React from 'react';

export const GrifGridItem=({url, title})=>{
    // console.log(img);
    return(
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
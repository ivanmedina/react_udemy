import React, { useState, useEffect } from "react";
import { GrifGridItem } from "./GifGridItem";
export const GifGrid = ({category})=>{

    const [gifs, setGifs]=useState([]);

    useEffect(()=>{
        getGifs();
    },[]);

    const getGifs = async ()=>{
        const url= "https://api.giphy.com/v1/gifs/search?&q=360+flip&limit=100&api_key=vGJfLokKj6XmaE0aUILbntUjQQCL1JLr"
        const resp=await fetch(url);
        const { data }=await resp.json();
        const gifs = data.map( img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
                
            }
        })
        console.log(gifs)
        setGifs(gifs);
    }

    return(
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                    {
                        gifs.map( img =>(
                            <GrifGridItem 
                                key={img.id}    
                                { ...img}
                            />
                        ))
                    }
            </div>
        </>
    )

}



import React from "react";

function GifList({GifArray}){
    return(
        <div>
            <ul>
                {GifArray.map((z, index)=>{
                    return(
                        <li key={index}>
                            <img src={z.images.original.url} alt="picture of animal"/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GifList
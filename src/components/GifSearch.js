import React, {useState} from "react";

function GifSearch ({hasBeenSearched}){
    const [val, setVal] = useState("")


    const onSearch = (z)=>{
        z.preventDefault()
        hasBeenSearched(val)
    }
    return(
        <div>
            
            <form onSubmit={onSearch}>
                <label className="form-label">Enter a search term:</label>
                <input type = "text" placeholder="Search For Gif" value={val} name="search" onChange={(e)=>{setVal(e.target.value)}}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default GifSearch
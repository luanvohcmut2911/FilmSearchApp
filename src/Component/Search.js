import "./Search.css";
import { useState } from "react";
const Search = (props)=>{
    // const url = "http://www.omdbapi.com/?apikey=c2d93f7d&s=man";
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (e)=>{
        setSearchValue(e.target.value);
    }
    const resetInput = ()=>{
        setSearchValue("");
    }
    const callSearchFunction = (e)=>{
        e.preventDefault();
        props.search(searchValue);
        resetInput();
    } 
    return (
        <div className="Search">
            <input 
                className="Box"
                placeholder="Enter a title of a film"
                type = "form"
                onChange={handleChange}
                value = {searchValue}
            ></input>
            <input 
                className="Button"
                type = "submit"
                value = "Search"
                onClick={callSearchFunction}
            ></input>
        </div>
    )
}
export default Search;
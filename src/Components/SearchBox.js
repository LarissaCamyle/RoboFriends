import React from "react";
import './SearchBox.css';

const SearchBox = ( { searchfield, searchChange}) => {
    return(
        <div className="pa3">
            <input className="pa2 br1 b--blue bg-lightest-blue"
            type="search" placeholder="search robots"
            onChange={searchChange}
             />
        </div>
    );
}

export default SearchBox;
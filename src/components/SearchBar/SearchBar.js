import React, {useState} from 'react';
import './SearchBar.css'

const SearchBar = () => {
    const [searchvalue, setSearchValue] = useState("the search value")

    const handleInputChange = (event) => {
        console.log(event.target.value)
    }

    return <div>
        <input type="text" value={searchvalue} onChange={handleInputChange} />
    </div>
}

export default SearchBar;
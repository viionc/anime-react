import React from "react";

function SearchByNamePanel({setSearchQuery, searchQuery, searchType}) {
    const handleChange = event => {
        const value = event.target.value;
        setSearchQuery(prevState => ({...prevState, [searchType]: value}));
    };

    return (
        <div className="search-form">
            <div className="input-wrapper">
                <label className="label">Name:</label>
                <input placeholder="Type name of a show..." onChange={handleChange} value={searchQuery[searchType] || ""}></input>
            </div>
        </div>
    );
}

export default SearchByNamePanel;

import React from "react";

function SearchByScorePanel({setSearchQuery, searchQuery, searchType}) {
    const handleChange = event => {
        const value = event.target.value;
        setSearchQuery(prevState => ({...prevState, [searchType]: value}));
    };

    return (
        <div className="search-form">
            <div className="input-wrapper">
                <label className="label">Score:</label>
                <input placeholder="Will find shows above selected score" onChange={handleChange} value={searchQuery[searchType] || ""}></input>
            </div>
        </div>
    );
}

export default SearchByScorePanel;

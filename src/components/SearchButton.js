import React from "react";

function SearchButton({fetchData}) {
    return (
        <button className="search-button" onClick={fetchData}>
            Search
        </button>
    );
}

export default SearchButton;

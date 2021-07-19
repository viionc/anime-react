import React from "react";
import ChangeSearchTypeButton from "./ChangeSearchTypeButton";

function SearchCategoryPanel({setSearchType, searchType}) {
    return (
        <div className="search-panel">
            <div className="label">Search By: </div>
            {["Name", "Year", "Genre", "Score"].map((text, key) => {
                return <ChangeSearchTypeButton text={text} key={`button-${key}`} setSearchType={setSearchType} searchType={searchType}></ChangeSearchTypeButton>;
            })}
        </div>
    );
}

export default SearchCategoryPanel;

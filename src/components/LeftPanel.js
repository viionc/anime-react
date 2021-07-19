import React from "react";
import SearchButton from "./SearchButton.js";
import SearchCategoryPanel from "./SearchCategoryPanel.js";
import SearchInfoPanel from "./SearchInfoPanel.js";

function LeftPanel({searchType, setSearchType, searchQuery, setSearchQuery, fetchData}) {
    return (
        <div className="left-panel">
            <SearchCategoryPanel searchType={searchType} setSearchType={setSearchType}></SearchCategoryPanel>
            <SearchInfoPanel searchType={searchType} searchQuery={searchQuery} setSearchQuery={setSearchQuery}></SearchInfoPanel>
            <SearchButton fetchData={fetchData}></SearchButton>
        </div>
    );
}

export default LeftPanel;

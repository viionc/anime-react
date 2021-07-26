import React from "react";
import SearchButton from "./SearchButton.js";
import SearchInfoPanel from "./SearchInfoPanel.js";
import TopAnime from "./TopAnime.js";

function LeftPanel({fetchData, setSearchFilters, topAnime}) {
    return (
        <div className="left-panel">
            <SearchInfoPanel setSearchFilters={setSearchFilters}></SearchInfoPanel>
            <SearchButton fetchData={fetchData}></SearchButton>
            <TopAnime topAnime={topAnime}></TopAnime>
        </div>
    );
}

export default LeftPanel;

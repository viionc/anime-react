import React from "react";
import SearchButton from "./SearchButton.js";
import SearchInfoPanel from "./SearchInfoPanel.js";
import RequestTimerWarning from "./RequestTimerWarning.js";
import TopAnime from "./TopAnime.js";

function LeftPanel({fetchData, setSearchFilters, topAnime, requestTimer}) {
    return (
        <div className="left-panel">
            <SearchInfoPanel setSearchFilters={setSearchFilters}></SearchInfoPanel>
            {requestTimer ? <RequestTimerWarning requestTimer={requestTimer}></RequestTimerWarning> : null}
            <SearchButton fetchData={fetchData}></SearchButton>
            <TopAnime topAnime={topAnime}></TopAnime>
        </div>
    );
}

export default LeftPanel;

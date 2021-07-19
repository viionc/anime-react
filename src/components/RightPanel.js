import React from "react";
import AnimeCard from "./AnimeCard";

function RightPanel({searchResults}) {
    return (
        <div className="card-container">
            {searchResults.map(result => {
                return <AnimeCard result={result} key={result.mal_id}></AnimeCard>;
            })}
        </div>
    );
}

export default RightPanel;

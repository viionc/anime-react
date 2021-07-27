import React from "react";
import AnimeCard from "./AnimeCard";

function RightPanel({searchResults, noResults}) {
    return !noResults ? (
        <div className="card-container">
            {searchResults.map(result => {
                return <AnimeCard result={result} key={result.mal_id}></AnimeCard>;
            })}
        </div>
    ) : (
        <h3>No results found.</h3>
    );
}

export default RightPanel;

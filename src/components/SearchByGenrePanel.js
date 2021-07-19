import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import genres from "../genres";

const genreOptions = Object.keys(genres).map(genre => {
    return {value: genre.toLowerCase(), label: genre};
});

function SearchByGenrePanel({searchQuery, setSearchQuery, searchType}) {
    function handleChange(event) {
        const labels = event.map(e => e.label);
        setSearchQuery(prevState => ({...prevState, [searchType]: labels}));
    }

    return (
        <div>
            <div className="input-wrapper">
                <label className="label">Season:</label>
                <Select isMulti name="genres" onChange={handleChange} options={genreOptions} className="select" />
            </div>
        </div>
    );
}

export default SearchByGenrePanel;

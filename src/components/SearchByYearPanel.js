import React, {useState} from "react";
import Select from "react-select";

function SearchByYearPanel({setSearchQuery, searchQuery, searchType}) {
    const seasons = [
        {value: "spring", label: "Spring"},
        {value: "summer", label: "Summer"},
        {value: "fall", label: "Fall"},
        {value: "winter", label: "Winter"},
    ];

    const handleYearChange = event => {
        const query = searchQuery[searchType];
        query.year = event.target.value;
        if (!Number(query.year)) return;
        setSearchQuery(prevState => ({...prevState, [searchType]: query}));
    };

    const handleSeasonChange = event => {
        const query = searchQuery[searchType];
        query.season = event.value;
        setSearchQuery(prevState => ({...prevState, [searchType]: query}));
    };

    return (
        <div className="search-form">
            <div className="input-wrapper">
                <label className="label">Year:</label>
                <input placeholder="Type name of a show..." onChange={handleYearChange} value={searchQuery[searchType].year}></input>
            </div>
            <div className="input-wrapper">
                <label className="label">Season:</label>
                <Select defaultValue={searchQuery[searchType].season} onChange={handleSeasonChange} options={seasons} className="select" />
            </div>
        </div>
    );
}

export default SearchByYearPanel;

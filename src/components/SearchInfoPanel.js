import React from "react";
import {useState, useEffect} from "react";
import Select from "react-select";
import genres from "../genres";

const genreOptions = Object.keys(genres).map(genre => {
    return {value: genre.toLowerCase(), label: genre};
});

function SearchInfoPanel({setSearchFilters}) {
    const [nameFilter, setNameFilter] = useState("");
    const [genresFilter, setGenresFilter] = useState([]);
    const [scoreFilter, setScoreFilter] = useState("");

    const handleGenresChange = event => {
        const labels = event.map(e => e.label);
        console.log(labels);
        setGenresFilter(labels);
    };

    const handleScoreChange = event => {
        if (!Number(event.target.value)) return;

        setScoreFilter(event.target.value);
    };

    useEffect(() => {
        let filter = "";
        if (nameFilter !== "") filter += `q=${nameFilter}`;
        if (genresFilter.length) {
            const IDs = genresFilter.map(e => genres[e]);
            if (filter !== "") filter += "&";
            filter += `genre=${IDs.join(",")}`;
        }
        if (scoreFilter !== "") {
            if (filter !== "") filter += "&";
            filter += `score=${scoreFilter}&order_by=score&sort=descending`;
        }
        setSearchFilters(filter);
    }, [nameFilter, genresFilter, scoreFilter]);

    return (
        <>
            <div className="search-form">
                <div className="input-wrapper">
                    <label className="label">Name:</label>
                    <input placeholder="Type name of a show..." onChange={e => setNameFilter(e.target.value)} value={nameFilter}></input>
                </div>
                <div className="input-wrapper">
                    <label className="label">Score:</label>
                    <input placeholder="Will find shows above selected score" onChange={handleScoreChange} value={scoreFilter}></input>
                </div>
                <div className="input-wrapper">
                    <label className="label">Genres:</label>
                    <Select isMulti name="genres" onChange={handleGenresChange} options={genreOptions} className="select" />
                </div>
            </div>
        </>
    );
}

export default SearchInfoPanel;

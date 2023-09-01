import React from "react";
import {useState, useEffect} from "react";
import Select from "react-select";
import genres from "../genres";

const genreOptions = Object.keys(genres).map(genre => {
    return {value: genre.toLowerCase(), label: genre};
});
const sortOptions = [
    {
        value: "desc",
        label: "descending",
    },
    {
        value: "asc",
        label: "ascending",
    },
];

function SearchInfoPanel({setSearchFilters}) {
    const [nameFilter, setNameFilter] = useState("");
    const [genresFilter, setGenresFilter] = useState([]);
    const [scoreFilter, setScoreFilter] = useState("");
    const [sortFilter, setSortFilter] = useState("desc");

    const handleGenresChange = event => {
        const labels = event.map(e => e.label);
        setGenresFilter(labels);
    };

    const handleScoreChange = event => {
        if (Number(event.target.value)) setScoreFilter(event.target.value);
        else setScoreFilter("");
    };
    const handleSortChange = event => {
        setSortFilter(event.value);
    };

    useEffect(() => {
        let filter = "anime?";
        if (nameFilter !== "") filter += `q=${nameFilter}`;
        if (genresFilter.length) {
            const IDs = genresFilter.map(e => genres[e]);
            if (filter !== "") filter += "&";
            filter += `genres=${IDs.join(",")}`;
        }
        if (scoreFilter !== "") {
            if (filter !== "") filter += "&";
            filter += `min_score=${scoreFilter}`;
        }
        if (sortFilter !== "") {
            if (filter !== "") filter += "&";
            filter += `&order_by=score&sort=${sortFilter}`;
        }
        setSearchFilters(filter);
    }, [nameFilter, genresFilter, scoreFilter, sortFilter]);

    return (
        <>
            <div className="search-form">
                <div className="input-wrapper">
                    <label className="label">Name:</label>
                    <input
                        placeholder="Type name of a show..."
                        onChange={e => setNameFilter(e.target.value)}
                        value={nameFilter}
                    ></input>
                </div>
                <div className="input-wrapper">
                    <label className="label">Score:</label>
                    <input
                        placeholder="Will find shows above selected score"
                        onChange={handleScoreChange}
                        value={scoreFilter}
                    ></input>
                </div>
                <div className="input-wrapper">
                    <label className="label">Genres:</label>
                    <Select
                        isMulti
                        name="genres"
                        onChange={handleGenresChange}
                        options={genreOptions}
                        className="select"
                    />
                </div>
                <div className="input-wrapper">
                    <label className="label">Sorting:</label>
                    <Select
                        name="sorting"
                        onChange={handleSortChange}
                        options={sortOptions}
                        className="select"
                    />
                </div>
            </div>
        </>
    );
}

export default SearchInfoPanel;

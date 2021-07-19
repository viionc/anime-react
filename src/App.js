import "./App.css";
import Header from "./components/Header.js";
import {useState} from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import genres from "./genres";

function App() {
    const [searchType, setSearchType] = useState("Name");
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState({Name: "", Year: {year: 1990, season: "Spring"}, Genre: [], Score: 0});

    const url = `https://api.jikan.moe/v3/`;

    const fetchData = () => {
        let urlFilters = "";
        switch (searchType) {
            case "Name":
                urlFilters = `search/anime?q=${searchQuery[searchType]}`;
                break;
            case "Year":
                urlFilters = `season/${searchQuery[searchType].year}/${searchQuery[searchType].season}`;
                break;
            case "Genre":
                let IDs = searchQuery[searchType].map(e => genres[e]);
                urlFilters = `search/anime?genre=${IDs.join(",")}`;
                break;
            case "Score":
                urlFilters = `search/anime?score=${searchQuery[searchType]}&order_by=score&sort=descending`;
                break;
        }

        fetch(url + urlFilters)
            .then(res => res.json())
            .then(data => {
                searchType == "Year" ? setSearchResults(data.anime) : setSearchResults(data.results);
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    return (
        <div className="App">
            <Header></Header>
            <LeftPanel searchType={searchType} setSearchType={setSearchType} searchQuery={searchQuery} setSearchQuery={setSearchQuery} fetchData={fetchData}></LeftPanel>
            <RightPanel searchResults={searchResults}></RightPanel>
        </div>
    );
}

export default App;

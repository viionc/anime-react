import "./App.css";
import Header from "./components/Header.js";
import {useState, useEffect} from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import genres from "./genres";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [searchFilters, setSearchFilters] = useState("");

    const url = `https://api.jikan.moe/v3/search/anime?`;

    const fetchData = () => {
        fetch(url + searchFilters)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data.results);
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    useEffect(() => {
        console.log("test");
        fetch(url + `score=9&order_by=score&sort=descending&limit=5`)
            .then(res => res.json())
            .then(data => setTopAnime(data.results))
            .catch(err => {
                throw new Error(err);
            });
    }, []);
    return (
        <div className="App">
            <Header></Header>
            <LeftPanel setSearchFilters={setSearchFilters} fetchData={fetchData} topAnime={topAnime}></LeftPanel>
            <RightPanel searchResults={searchResults}></RightPanel>
        </div>
    );
}

export default App;

import "./App.css";
import Header from "./components/Header.js";
import {useState, useEffect} from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [searchFilters, setSearchFilters] = useState("");
    const [requestTimer, setRequestTimer] = useState(0);
    const [noResults, setNoResults] = useState(false);

    const url = `https://api.jikan.moe/v3/search/anime?`;

    const fetchData = () => {
        if (requestTimer > 0) return;
        fetch(url + searchFilters)
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.results) {
                    setSearchResults(data.results);
                    setNoResults(false);
                    return;
                }
                setNoResults(true);
            });
        setRequestTimer(5);
    };

    useEffect(() => {
        if (requestTimer > 0) {
            const interval = setInterval(() => {
                setRequestTimer(requestTimer => requestTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [requestTimer]);

    useEffect(() => {
        fetch(url + `score=9&order_by=score&sort=descending&limit=5`)
            .then(res => res.json())
            .then(data => setTopAnime(data.results))
            .catch(err => {
                throw new Error(err);
            });
    }, [url]);

    return (
        <div className="App">
            <Header></Header>
            <LeftPanel setSearchFilters={setSearchFilters} fetchData={fetchData} topAnime={topAnime} requestTimer={requestTimer}></LeftPanel>
            <RightPanel searchResults={searchResults} noResults={noResults}></RightPanel>
        </div>
    );
}

export default App;

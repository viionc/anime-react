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

    const url = `https://api.jikan.moe/v4/`;

    const fetchData = () => {
        if (requestTimer > 0) return;
        console.log(url + searchFilters);
        fetch(url + searchFilters)
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.data) {
                    setSearchResults(data.data);
                    console.log(data.data);
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
        fetch(url + `top/anime`)
            .then(res => res.json())
            .then(data => {
                setTopAnime(data.data.slice(0, 10));
            })
            .catch(err => {
                throw new Error(err);
            });
    }, [url]);

    return (
        <div className="App">
            <Header></Header>
            <LeftPanel
                setSearchFilters={setSearchFilters}
                fetchData={fetchData}
                topAnime={topAnime}
                requestTimer={requestTimer}
            ></LeftPanel>
            <RightPanel searchResults={searchResults} noResults={noResults}></RightPanel>
        </div>
    );
}

export default App;

import React from "react";

function AnimeCard({result}) {
    const id = result.mal_id;
    const url = result.url;
    const image = result.image_url;
    const name = result.title;
    const airing = result.airing;
    const score = result.score;
    const desc = result.synopsis;
    const episodes = result.episodes;

    return (
        <div className="card" style={{background: `url(${image})`}}>
            <div className="title">
                <span>{name}</span>
                <span className={airing ? "airing" : "ended"} title={airing ? "Airing" : "Ended"}>
                    .
                </span>
            </div>
            <div className="info">
                <span>{episodes}</span>
                <span>{score}</span>
            </div>
        </div>
    );
}

export default AnimeCard;

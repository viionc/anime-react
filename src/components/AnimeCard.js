import React from "react";

function AnimeCard({result}) {
    const {url, airing, score, episodes} = result;
    const image = result.images.jpg.image_url;
    const name = result.title;
    const desc = result.synopsis;

    return (
        <a target="_blank" href={url} rel="noreferrer">
            <div className="card" style={{background: `url(${image})`}} title={desc}>
                <div className="title">
                    <span title={name}>{name}</span>
                    <span
                        className={airing ? "airing" : "ended"}
                        title={airing ? "Airing" : "Ended"}
                    >
                        .
                    </span>
                </div>
                <div className="info">
                    <span className="episodes">Ep.: {episodes}</span>
                    <span className="score">S: {score}</span>
                </div>
            </div>
        </a>
    );
}

export default AnimeCard;

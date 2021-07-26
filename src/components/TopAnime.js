import React from "react";

function TopAnime({topAnime}) {
    return (
        <div className="top-anime">
            <h3>Top Anime</h3>
            {topAnime.map(anime => {
                const {title, score, url} = anime;
                return (
                    <a target="_blank" href={url} className="wrapper" key={anime.mal_id} rel="noreferrer">
                        <span>{title}</span>
                        <span>{score}</span>
                    </a>
                );
            })}
        </div>
    );
}

export default TopAnime;

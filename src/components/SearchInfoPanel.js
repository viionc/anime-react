import React from 'react'
import SearchByNamePanel from './SearchByNamePanel.js'
import SearchByYearPanel from './SearchByYearPanel.js'
import SearchByGenrePanel from './SearchByGenrePanel.js'
import SearchByScorePanel from './SearchByScorePanel.js'

function SearchInfoPanel({searchType, searchQuery, setSearchQuery}) {
    return (
        <>
            {searchType === "Name" ? <SearchByNamePanel searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType}></SearchByNamePanel> : null}
            {searchType === "Year" ? <SearchByYearPanel searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType}></SearchByYearPanel> : null}
            {searchType === "Genre" ? <SearchByGenrePanel searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType}></SearchByGenrePanel> : null}
            {searchType === "Score" ? <SearchByScorePanel  searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType}></SearchByScorePanel> : null}
        </>

    )
}

export default SearchInfoPanel

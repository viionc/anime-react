import React from 'react'


function ChangeSearchTypeButton({text, searchType, setSearchType}) {
    return (
        <button className={`change-button ${searchType === text ? 'active' : ''}`} onClick={()=>setSearchType(text)}>{text}</button>
    )
}

export default ChangeSearchTypeButton

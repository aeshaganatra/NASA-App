import React, { useState, useEffect } from "react";
import { Content, Wrapper } from "./SearchBar.style";
import searchIcon from "../../images/search-icon.svg"

const SearchBar = ({ setSearchTerm }) => {
    const [searchText, setSearchText] = useState('');
    const [showSearchText, setShowSearchText] = useState('');

    useEffect(() => {
        setSearchTerm(searchText);
    }, [setSearchTerm, searchText]);

    return (

        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type="text"
                    placeholder="Start-Date to End-Date YYYY-MM-DD"
                    onChange={event => setShowSearchText(event.currentTarget.value)}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            setSearchText(showSearchText)
                        }
                    }}
                    value={showSearchText}
                />
            </Content>
        </Wrapper>
    );
}

export default SearchBar;
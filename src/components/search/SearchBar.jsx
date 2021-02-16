import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchText, advanced, handleChange }) => {
    console.log("In SearchBar");
    console.log("searchText", searchText);
    console.log("advanced", advanced);

    return (
        <div>
                <label>
                Search:
                </label>
                <input type="search" id="search" placeholder={searchText} onKeyDown={handleChange} />

        </div>
    );
  };

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    advanced: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
}


export default SearchBar;
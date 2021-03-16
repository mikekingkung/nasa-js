import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchText, advanced, handleChange }) => {
    return (
        <div>
                <label>
                Search:
                </label>
                <input style={{ border: "1px solid blue", backgroundColor: "white", color: "red"}} type="search" id="search" placeholder={searchText} onKeyDown={handleChange} />

        </div>
    );
  };

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    advanced: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default SearchBar;
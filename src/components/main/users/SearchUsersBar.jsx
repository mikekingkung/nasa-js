import React from 'react';
import PropTypes from 'prop-types';

const SearchUsersBar = ({ searchUserText, handleUserSearch }) => {

    return (
        <div>
                <label>
                Search:
                </label>
                <input type="search" id="search" placeholder={searchUserText} onKeyDown={handleUserSearch} />

        </div>
    );
  };

SearchUsersBar.propTypes = {
    searchUserText: PropTypes.string.isRequired,
    handleUserSearch: PropTypes.func.isRequired
}


export default SearchUsersBar;
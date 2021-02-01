import React from 'react';
import PropTypes from 'prop-types';
//import 'font-awesome/css/font-awesome.min.css';

const SearchBar = ({ searchText, advanced, handleChange }) => {
    console.log("In SearchBar");
    console.log("searchText", searchText);
    console.log("advanced", advanced);

    return (
        <div>
                <label>
                Name:
                <input type="search" id="search" placeholder={searchText} onKeyDown={handleChange} />
                </label>
        </div>
    );
  };

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    advanced: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
}


//         <form>
//             <fieldset>
//                 <input
//                     type="search"
//                     name="searchText"
//                     placeholder="Search..."
//                     value={searchText}
//                     onKeyPress={event => handleChange(event)}
//                 />
//                 &nbsp;
//                 <i className="fa fa-search"></i>
//             </fieldset>
//             <fieldset>
//                 <label htmlFor="advanced">Show only videos only </label>
//                 <input
//                     type="checkbox"
//                     name="advanced"
//                     checked={advanced}
//                     onChange={event => handleChange(event)}
//                 />
//             </fieldset>
//         </form>

export default SearchBar;

// import search from '../../images/Search.png';

// const NavSearch = () => {
//     return (
//         <form className="form-inline">
//             <div id="search">
//                 <input className="" type="search" placeholder="Search" aria-label="Search" />
//             </div>
//             <button className="btn my-2 my-sm-0" type="submit">
//                 <img id="searchBtn" src={search} alt="Search Submit Button" />
//             </button>
//         </form>
//     );
// };

// export default NavSearch;
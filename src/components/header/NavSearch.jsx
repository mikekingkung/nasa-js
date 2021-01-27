import search from '../../images/Search.png';

const NavSearch = () => {
    return (
        <form className="form-inline">
            <div id="search">
                <input className="" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <button className="btn my-2 my-sm-0" type="submit">
                <img id="searchBtn" src={search} alt="Search Submit Button" />
            </button>
        </form>
    );
};

export default NavSearch;

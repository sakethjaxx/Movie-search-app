import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch, onSortAZ, onSortZA, onSortYrAsc, onSortYrDesc }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        // Pass the search query to the parent component
        onSearch(query);
    };
    //sort title Asc
    const handleSortAZ = () => {
        onSortAZ();
    }
    //sort title Desc
    const handleSortZA = () => {
        onSortZA();
    }

    //sort year Asc
    const handleSortYrAsc = () => {
        onSortYrAsc();
    }
    //sort year Asc
    const handleSortYrDesc = () => {
        onSortYrDesc();
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className='logo'>MoviesHub</Link>
            </div>
            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="navbar-dropdown">
                <div className="dropdown">
                    <button className="dropbtn">Sort</button>
                    <div className="dropdown-content">
                        <button onClick={handleSortAZ} >Title  (A-Z) </button>
                        <button onClick={handleSortZA} >Title (Z-A) </button>
                        <button onClick={handleSortYrAsc} >Year (Asc)</button>
                        <button onClick={handleSortYrDesc} >Year (Desc)</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


// const handleButtonHover = (callback) => {
//     callback();
// };

{/* <div className="dropdown-content">
    <button onClick={handleSortAZ} onMouseEnter={() => handleButtonHover(onSortAZ)}>Title  (A-Z) </button>
    <button onClick={handleSortZA} onMouseEnter={() => handleButtonHover(onSortZA)}>Title (Z-A) </button>
    <button onClick={handleSortYrAsc} onMouseEnter={() => handleButtonHover(onSortYrAsc)}>Year (Asc)</button>
    <button onClick={handleSortYrDesc} onMouseEnter={() => handleButtonHover(onSortYrDesc)}>Year (Desc)</button>
</div> */}
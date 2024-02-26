import React, { useState } from "react";
import './header.css';

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleDismissClick = () => {
    setIsSearchClicked(false);
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  return (
    <div style={{ 
      display: 'flex',
      height: '100%',
      marginLeft: '200px',
      width: '100%',
    }}>
      <div>
        <div style={{ 
          fontSize: '20px',
          fontWeight: '400',
          paddingTop: '20px',
          textAlign: 'left', 
        }}>
          DevSoc presents
        </div> 

        <div 
          onClick={handleClick}
          style={{ 
            color: clicked ? '#ff0000' : 'rgb(18 121 242)',
            cursor: 'pointer',
            fontSize: '90px', 
            fontWeight: 'bold', 
            paddingBottom: '10px',
            textAlign: 'left',
          }}>
          unilectives
        </div>          

        <div style={{ 
          fontSize: '20px', 
          fontWeight: '600', 
          paddingBottom: '40px',
          textAlign: 'left', 
        }}>
          Your one-stop shop for UNSW course and elective reviews.
        </div>

        <div className="search" onClick={handleSearchClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="search-icon">
            <path d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"></path>
          </svg>

          <input
            className="search-text"
            placeholder="Search for a course e.g. COMP1511"
            type="text"
          />
        </div>

        <div style={{ 
          paddingTop: '30px',
        }}>
          <button className="sort" type="button">
            Sort by
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
              <path d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"></path>
            </svg>
          </button>
        </div>
      </div>

      {isSearchClicked && (
        <div className="overlay" onClick={handleDismissClick}>
          <div className="overlay-box">
            <button>Dismiss</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

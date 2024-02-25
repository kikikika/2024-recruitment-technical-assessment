import React, { useState } from "react";
import './header.css'

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };

  return (
    <div style={{ 
        display: 'flex',
        width: '100%',
        height: '100%',
        marginLeft: '200px',
      }}>

        <div >
            <div style={{ 
                textAlign: 'left', 
                fontWeight: '400',
                fontSize: '20px',
                paddingTop: '20px'
                }}>
                DevSoc presents
            </div> 

            <div 
            onClick={handleClick}
            style={{ 
                textAlign: 'left', 
                fontWeight: 'bold', 
                color: clicked ?  '#ff0000':'#007fff',
                fontSize: '90px', 
                paddingBottom: '10px',
                cursor: 'pointer',
                }}>
                unilectives
            </div>          

            <div style={{ 
                textAlign: 'left', 
                fontWeight: '600', 
                fontSize: '20px', 
                paddingBottom: '40px'
                }}>
                Your one-stop shop for UNSW course and elective reviews.
            </div>

            <div className="search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="search-icon"
                >
                    <path d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"></path>
                </svg>

                <input
                    type="text"
                    className="search-text"
                    placeholder="Search for a course e.g. COMP1511"
                />
            </div>

            <div style={{ 
                paddingTop: '30px'
                }}>
                <button class="sort" type="button">
                    Sort by
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                        <path d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
  
};

export default Header;
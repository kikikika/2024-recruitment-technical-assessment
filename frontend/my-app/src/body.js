import React from "react";
import './body.css'
import data from './courses.json'

const Box = ({ data }) => {

    const {
        course_prefix,
        course_code,
        course_title,
        average_stars,
        total_reviews,
        offered_terms,
      } = data;

    
    const boxStyle = {
        padding: '20px',
        backgroundColor: '#f2f2f5',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px',
    };
  
    return (
      <div style={boxStyle}>
            
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '5px' }}>

            <div style={{ fontWeight: 'bold', fontSize: '40px'}}>{`${course_prefix}${course_code}`}</div>
        
            <div style={{color: 'rgb(183 137 229)', fontSize: '30px', textAlign: 'left' }}>
                    <span >★★★★★</span>
                    <span style={{ width: '100%', backgroundColor: '#4C2882', inset: '0' }} ></span>
                    <p style={{ fontSize: '15px', color: 'rgb(152 152 152)' }}>{`${total_reviews} reviews`}</p>

            </div>

            <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '15px', color: '#4C2882'}}>{course_title}</p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                    {offered_terms.map((term, index) => (
                    <span key={index} className="term-button">{term}</span>
                    ))}
                </div>
            </div>
        
        </div>
        
      </div>
    );
  };
  
  const Grid = ({ gridData }) => {
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '30px',
    };
  
    return (
      <div style={gridStyle}>
        {gridData.map((item, index) => (
          <Box key={index} data={item} />
        ))}
      </div>
    );
  };
  

  
const body = () => {
  
return (
    <div style={{ 
        display: 'inline-grid',
        width: '80%',
        height: '100%',
        paddingLeft: '100px',
        paddingTop: '30px'
      }}>

        <Grid gridData={data} />
      </div>
);

}

export default body;
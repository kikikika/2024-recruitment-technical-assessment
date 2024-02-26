import React from "react";
import data from './courses.json';
import './body.css';

const Box = ({ data }) => {
  const {
    average_stars,
    course_code,
    course_prefix,
    course_title,
    offered_terms,
    total_reviews,
  } = data;

  const boxStyle = {
    backgroundColor: '#f2f2f5',
    borderRadius: '15px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '20px',
  };

  return (
    <div style={boxStyle}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '40px', fontWeight: 'bold' }}>{`${course_prefix}${course_code}`}</div>

        <div style={{ color: 'rgb(183 137 229)', fontSize: '30px', textAlign: 'left' }}>
          <span>★★★★★</span>
          <span style={{ backgroundColor: '#4C2882', inset: '0', width: '100%' }}></span>
          <p style={{ color: 'rgb(152 152 152)', fontSize: '15px' }}>{`${total_reviews} reviews`}</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: 'black', fontSize: '15px' }}>{course_title}</p>

          <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
            {offered_terms.map((term, index) => (
              <span key={index} className="term-button">
                {term}
              </span>
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
    gap: '30px',
    gridTemplateColumns: 'repeat(3, 1fr)',
  };

  return (
    <div style={gridStyle}>
      {gridData.map((item, index) => (
        <Box key={index} data={item} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div style={{ display: 'inline-grid', height: '100%', paddingLeft: '100px', paddingTop: '30px', width: '80%' }}>
      <Grid gridData={data} />
    </div>
  );
};

export default Body;

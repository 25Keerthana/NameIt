import React from 'react';
import NameCard from '../NameCard/NameCard';
import './Results.css';


const Results = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });



    return (
        <div className="results-container">
            {suggestedNameJsx}
        </div>
    );
};

export default Results;
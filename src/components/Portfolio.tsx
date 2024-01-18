import React from 'react';

const Portfolio: React.FC = () => {
    const portfolioItems = ['Portfolio 1', 'Portfolio 2', 'Portfolio 3'];

    return (
        <div>
            {portfolioItems.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

export default Portfolio;

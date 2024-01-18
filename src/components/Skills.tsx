import React from 'react';

const Skills: React.FC = () => {
    const languagesFrameworks = ['JavaScript', 'TypeScript', 'React', 'Angular'];
    const toolsTechnologies = ['Git', 'Webpack', 'Jest', 'Node.js'];

    return (
        <div>
            <div>
                <h2>Languages/Frameworks</h2>
                <ul>
                    {languagesFrameworks.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Tools/Technologies</h2>
                <ul>
                    {toolsTechnologies.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;

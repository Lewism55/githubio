import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
    const languagesFrameworks = [
        'JavaScript & TypeScript',
        'React, jQuery, and basic Node.js with Express',
        'CSS, including SASS and Styled Components',
        'Python & Django',
        'SQL, mostly with Postgresql',
        'Testing frameworks: Jest, React testing library, Cypress, Pytest',
        'Rasa (NLU framework)',
    ]
    const toolsTechnologies = [
        'Visual Studio Code',
        'Git, using Gitlab and Github for pipelines',
        'AWS & Azure',
        'Docker',
        'Postman & Insomnia',
        'Contentful CMS',
        'Confluence, Notion, Jira, Monday, Trello and Asana',
    ]

    const cardVariants = {
        hover: { scale: 1.1 },
    }

    return (
        <>
            <h1>Skills</h1>
            <div className='page-description'>
                I have experience in a range of technologies both via my employment and personal projects. Below is an overview of those I have worked with
                before:
            </div>
            <div className='skills-grid'>
            <motion.div className='card' whileHover='hover' variants={cardVariants}>
                    <h2>Languages/Frameworks</h2>
                    <ul>
                        {languagesFrameworks.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </motion.div>
                <motion.div className='card' whileHover='hover' variants={cardVariants}>
                    <h2>Tools/Technologies</h2>
                    <ul>
                        {toolsTechnologies.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </motion.div>
            </div>
        </>
    )
}

export default Skills

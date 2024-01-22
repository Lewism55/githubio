import React from 'react'
import { motion } from 'framer-motion'

const Portfolio: React.FC = () => {
    const portfolioItems = [
        {
            name: 'Maths Star Game',
            link: 'http://maths-game-mpl.surge.sh',
            skills: 'React, Javascript, CSS, Framer, Surge, Git',
            repo: 'https://github.com/Lewism55/maths-game',
            description: <div>
            This is actually an update of a much older project I did some years back. I set myself the task of taking this really basic project and making it look cleaner both in the application itself, and in the codebase. 
            <br /><br />
            I first split out the code from a single file to a standard react component structure split by files. I also converted the project into Vite from a CRA project as I find Vite so much faster. I have done a lot of Typescript code over the past 2 years, so I decided to keep this particular project in Vanilla JS just as a display of my understanding.
            <br /><br />
            In playing around, I got bored with the functionality, so I added some new features such as difficulties, a working mobile layout, and the ability to select the amount of stars in the game which made it much more fun and re-playable. I also decided to add in Framer Motion for some animations, which I think adds a lot in terms of style and UX, as the animations help the user understand when you've selected a number correctly.
            <br /><br />
            For speed, I've deployed the app via Surge. I find deploying on surge super simple and easy, and I tend to use it for all my personal projects for this reason. It allowed me to share the app and do a little bit of play testing and bug bashing by asking friends to check for issues. 
            <br /><br />
            Overall this now looks much better than the original (which is also on my github), and despite being a very basic maths game, I think it would be useable for children to practice their basic counting and addition skills.
            </div>,
        },
    ]
    const cardVariants = {
        hover: { scale: 1.01 },
    }

    const handleClick = (link: string) => {
        window.open(link, '_blank')
    }

    return (
        <>
            {portfolioItems.map((item, index) => (
                <motion.div key={index} className='card portfolio-card' whileHover='hover' variants={cardVariants} onClick={() => handleClick(item.link)}>
                    <h2>{item.name}</h2>
                    <i className='experience-dates'>Skills: {item.skills}</i>
                    <div className='portfolio-item-description'>{item.description}</div>
                    <button className='portfolio-card-button' onClick={() => handleClick(item.link)}>View App</button>
                    <button className='portfolio-card-button' onClick={() => handleClick(item.repo)}>View Repo</button>
                </motion.div>
            ))}
        </>
    )
}

export default Portfolio

import React from 'react'
import { motion } from 'framer-motion'
import Linkedin from '../assets/Linkedin'
import Phone from '../assets/Phone'
import Email from '../assets/Email'
import Location from '../assets/Location'
import Me from '../assets/MikePhoto.jpg'

const Profile: React.FC = () => {
    const cardVariants = {
        hover: { scale: 1.1 },
    }

    return (
        <>
            <div className='flexR profile-content'>
                <div className='flexC profile-header'>
                    <h1 className='my-name'>Michael Lewis</h1>
                    <h1>Software Developer</h1>
                </div>
                <img src={Me} alt="Mike's Photo" className='me-photo' />
            </div>

            <div className='flexR profile-content'>
                <div className='profile-description'>
                    Hi, I'm Michael. I am a frontend leaning software developer who enjoys crafting usable and intuitive technology. Feel free to browse this
                    site and find out more about me, my experience and some examples of my work. Please get in touch if you have any further questions!
                    <br /> <br />
                    (Site last updated: January 2024)
                </div>

                <motion.div className='card profile-card' whileHover='hover' variants={cardVariants}>
                    <h3>Contact details:</h3>
                    <div className='flexR contact-detail'>
                        <Location />
                        <a className='contact-anchor' href='https://www.google.com/maps?q=London'>
                            London / Remote
                        </a>
                    </div>
                    <div className='flexR contact-detail'>
                        <Phone />
                        <a className='contact-anchor' href='tel:+447910209089'>
                            +44 7910 209 089
                        </a>
                    </div>
                    <div className='flexR contact-detail'>
                        <Email />
                        <a className='contact-anchor' href='mailto:mikeplewis93@hotmail.com'>
                            mikeplewis93@hotmail.com
                        </a>
                    </div>
                    <div className='flexR contact-detail'>
                        <Linkedin />
                        <a className='contact-anchor' href='https://www.linkedin.com/in/michael-lewis-880144105/'>
                            LinkedIn
                        </a>
                    </div>{' '}
                </motion.div>
            </div>
        </>
    )
}

export default Profile

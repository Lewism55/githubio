import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Experience {
    jobTitle: string
    employer: string
    dates: string
    info: string
}

const experienceList: Experience[] = [
    {
        jobTitle: 'Software Developer',
        employer: 'Springbok.ai',
        dates: 'November 2020 - Current, Remote',
        info: `Springbok.AI is a consultancy focusing on LLMs/Conversational AI. I work day to day in React/Typescript, but also write some Python/Django code, work with AI technologies (LLMs/Rasa), and handle some SQL tasks. My work is generally split as 80% frontend, 20% backend/database/devops. I have experience with agile and waterfall style teams and use gitlab/github for version control and CI-CD Pipelines. A short list of achievements and tasks completed include:

        • Being the sole frontend developer for a SAAS project which won the UK Business charity award for 
           Best Digital Innovation (2023). The chatbot widget I designed and built is featured on the websites
           of 8 different charities, and regularly surpasses 1000 users per month. 
        • Creating and styling various reusable React components in Javascript and Typescript.
        • Using modern React hooks and writing custom hooks where suitable.
        • Setting up an overall testing harness and writing tests with the Cypress and Jest frameworks.
        • Django application updates including running database migrations, adding new views, adding new api
           endpoints and associated unit tests using Pytest. 
        • Client facing work, including running production releases using Gitlab and Azure services (with 
           associated debugging/QA) and technical demonstrations.

Initially this role was an apprenticeship. During this period, a few hours were spent each week completing “off the job” work, such as: technical training courses, shadowing, completing project write-ups, reviews, self teaching new skills etc. I passed my final assessments with a distinction. 
        `,
    },
    {
        jobTitle: 'HisAttire.com & W Rugby',
        employer: 'Software Developer & Consultant',
        dates: 'December 2021 - May 2022, Remote',
        info: `For HisAttire I worked in a team of two to architect and develop a rental/sales/blog hybrid website. On the frontend we planned out and began work on a SPA using React, Redux and ReactRouter. I completed the base website with around 40% of the above functionalities, but due to other commitments I had to stand down before project completion. 

For W-Rugby, I provided technical assistance and advice to the two business partners who run the charity. I gave insight and documentation for timings, approach, architecture and costs for a range of proposed features including a ball design plugin and an FAQ chatbot. 
        `,
    },
    {
        jobTitle: 'Lantum',
        employer: 'Launch Associate',
        dates: 'October 2019 - March 2020, London',
        info: `Lantum is a health-tech scale-up which provides a SAAS platform. My time was spent: project managing launch processes, providing/presenting data analysis, upselling and generating referrals. I also offered technical support, such as: setting up accounts, training users, replicating and reporting bugs, and fixing administrative issues.`,
    },
    {
        jobTitle: 'Key Locums, The GP Agency, Pulse',
        employer: 'Recruitment Consultant & Team Lead',
        dates: 'September 2015 - October 2019, London & Essex',
        info: `Prior to working in technology I was a recruitment consultant and team leader in the healthcare sector for 4 years. In my more senior roles, I managed teams of up to 3 staff and mentored various junior consultants. These experiences allowed me to develop excellent soft skills which have been useful throughout my career.`,
    },
]

const Experience: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <>
            <h1>Experience</h1>
            <div className='page-description'>
                Below is a summary of my employment history, including my current role as a software developer. Please click a role to see a full description.
            </div>
            {experienceList.map((experience, index) => (
                <div key={index} className='details'>
                    <summary className={`experience-summary${openIndex === index ? '-open' : ''}`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className='flexC'>
                            <div className='experience-summary-block flexR'>
                                <h3 className='experience-title'>{experience.jobTitle}</h3>
                                <h4 className='experience-employer'>- {experience.employer}</h4>
                            </div>
                            <div className='flexR'>
                                <i className='experience-dates'>{experience.dates}</i>
                            </div>
                        </div>
                    </summary>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className='experience-info'
                            >
                                {experience.info}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </>
    )
}

export default Experience

import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
    educator: string;
    subject: string;
    grade: string;
    dates: string;
    info: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
    educator,
    subject,
    grade,
    dates,
    info,
}) => {
    const cardVariants = {
        hover: { scale: 1.1 },
    };

    return (
        <motion.div
            className="education-card"
            whileHover="hover"
            variants={cardVariants}
        >
            <h3>{educator}</h3>
            <p><b>Subject:</b> {subject}</p>
            <p><b>Grade:</b> {grade}</p>
            <p><b>Dates:</b> {dates}</p>
            <p><b>Info:</b> {info}</p>
        </motion.div>
    );
};

const Education: React.FC = () => {
    return (
        <div className="education-container">
            <div className="education-grid">
                <EducationCard
                    educator="The University of Leicester"
                    subject="BSc Banking and Finance"
                    grade="2.1"
                    dates="September 2012 - June 2015"
                    info="Economics, Finance and Banking degree"
                />
                <EducationCard
                    educator="Estio Training & Springbok.ai"
                    subject="Software Development level 4"
                    grade="Distinction"
                    dates="November 2020 - November 2021"
                    info="An apprenticeship in software development"
                />
                <EducationCard
                    educator="The Campion School Sixth Form"
                    subject="A Levels"
                    grade="A, B, C"
                    dates="September 2010 - June 2012"
                    info="Maths (A), Biology (B) and Economics (C)"
                />
                <EducationCard
                    educator="Marshalls Park Academy"
                    subject="GCSEs"
                    grade="5 x A*, 6 x A grades"
                    dates="September 2005 - June 2010"
                    info="Including Maths (A*), English (AA), Science (A*A*)"
                />
            </div>
        </div>
    );
};

export default Education;

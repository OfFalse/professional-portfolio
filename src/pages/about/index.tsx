import React, { ReactNode } from 'react';
import styles from '@/styles/About.module.css'; // Import your CSS module

interface AboutProps {
    children: ReactNode,
}

const About: React.FC<AboutProps> = ({ children }) => {
    return (
        <div className={styles.pageTemplate}>
            <main className={styles.mainContent}>
                {children}
            </main>
            {/* Add footer or other components here */}
        </div>
    );
};

export default About;
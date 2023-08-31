import React, { ReactNode } from 'react';
import styles from '@/styles/Resume.module.css'; // Import your CSS module

interface ResumeProps {
    children: ReactNode,
}

const Resume: React.FC<ResumeProps> = ({ children }) => {
    return (
        <div className={styles.pageTemplate}>
            <main className={styles.mainContent}>
                {children}
            </main>
            {/* Add footer or other components here */}
        </div>
    );
};

export default Resume;
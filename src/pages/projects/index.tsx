import React, { ReactNode } from 'react';
import styles from '@/styles/Projects.module.css'; // Import your CSS module

interface ProjectsProps {
    children: ReactNode,
}

const Projects: React.FC<ProjectsProps> = ({ children }) => {
    return (
        <div className={styles.pageTemplate}>
            <main className={styles.mainContent}>
                {children}
            </main>
            {/* Add footer or other components here */}
        </div>
    );
};

export default Projects;
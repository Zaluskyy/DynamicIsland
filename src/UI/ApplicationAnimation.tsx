import * as React from 'react';
import { motion } from 'framer-motion';
import { application } from './AnimationVariants';
import './ApplicationAnimation.scss';


export interface ApplicationAnimationProps {
    children?: React.ReactNode, 
    onClick?: ()=>void, 
    className?: string, 
    tabIndex?: number, 
    variants?: any,
}

const ApplicationAnimation: React.FC<ApplicationAnimationProps> = ({children, onClick, className, tabIndex, variants}) => {
    return ( 
        <motion.div
        className={`${className} ApplicationAnimation`}

        variants={application}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {children}
        </motion.div>
     );
}
 
export default ApplicationAnimation;
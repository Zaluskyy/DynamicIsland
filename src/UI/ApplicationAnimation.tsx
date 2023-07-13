import * as React from 'react';
import { motion } from 'framer-motion';
import { ApplicationProps } from '../components/Application';
import { application } from './AnimationVariants';
import './ApplicationAnimation.scss';


export interface ApplicationAnimationProps {
    children?: any, 
    onClick?: any, 
    className?: any, 
    tabIndex?: any, 
    variants?: any, 
    animate?: any
}

const ApplicationAnimation: React.FC<ApplicationAnimationProps> = ({children, onClick, className, tabIndex, variants, animate}) => {
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
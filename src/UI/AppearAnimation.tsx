import * as React from 'react';
import { motion } from 'framer-motion';
import { appear, application } from './AnimationVariants';


export interface AppearAnimationProps {
    children?: React.ReactNode, 
    onClick?: ()=>void, 
    className?: string, 
    tabIndex?: number, 
    variants?: any,
}

const AppearAnimation: React.FC<AppearAnimationProps> = ({children, onClick, className, tabIndex, variants = appear}) => {


    return ( 
        <motion.div
        className={className}
        onClick={onClick}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {children}
        </motion.div>
     );
}
 
export default AppearAnimation;
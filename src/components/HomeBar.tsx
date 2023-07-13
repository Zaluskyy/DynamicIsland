import React, {useEffect} from 'react';
import '../style/HomeBar.scss'
import { motion } from 'framer-motion';
import { appear } from '../UI/AnimationVariants';

interface HomeBarProps{
    handleHomeBar: ()=>void
}

const HomeBar: React.FC<HomeBarProps> = ({handleHomeBar}) => {

    const handleMousedown = (e: KeyboardEvent)=>{
        if(e.key == ' ') handleHomeBar();
    }

    useEffect(()=>{
        window.addEventListener('keydown', handleMousedown)
        return () => window.removeEventListener('keydown', handleMousedown)
    })
    
    return ( 
        <motion.div        
        className='HomeBar' 
        onClick={handleHomeBar}
        variants={appear}
        initial="hidden"
        animate="visible"
        exit="exit"
        />
     );
}
 
export default HomeBar;
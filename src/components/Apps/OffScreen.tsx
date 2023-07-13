import React, { useContext } from 'react';
import '../../style/Apps/OffScreen.scss';
import { motion } from 'framer-motion';
import { appear } from '../../UI/AnimationVariants';
import AppsContext from '../../store/AppsContext';

const OffScreen = () => {

    const appsContext = React.useContext(AppsContext)

    return ( 
        <motion.div 
        variants={appear}
        initial="hidden"
        animate="visible"
        exit="exit"
        className='OffScreen'
        onClick={()=>appsContext.setScreenOn(true)}
        >
            
        </motion.div>
     );
}
 
export default OffScreen;
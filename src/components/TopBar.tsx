import React, { useContext, useEffect, useState } from 'react';
import '../style/TopBar.scss';
import DynamicIslandContext from '../store/DynamicIslandContext';
import { motion } from 'framer-motion';

import battery from '../img/topIcons/battery.png'
import range from '../img/topIcons/range.png'
import wifi from '../img/topIcons/wifi.png'


const TopBar: React.FC = () => {

    const diContext = useContext(DynamicIslandContext)

    const variant = {
        normal: {
            width: (270-diContext.noramlWidth)/2
        },
        extended: {
            width: (270-diContext.extendedWidth)/2            
        }
    }
    
    return ( 
        <div className='TopBar'>
            <motion.span className='left'
            variants={variant}
            initial="normal"
            animate={diContext.mode==('NORMAL')?'normal': 'extended'}>
                21:37
            </motion.span>
            <motion.span className='right' 
            variants={variant}
            initial="normal"
            animate={diContext.mode==('NORMAL')?'normal': 'extended'}>
                <img src={range}/>
                <img src={wifi}/>
                <img src={battery}/>
            </motion.span>
        </div>
     );
}
 
export default TopBar;
import React, { useContext, useState } from 'react';
import '../style/Screen.scss';
import DynamicIsland from './DynamicIsland';

import { AnimatePresence } from 'framer-motion';

import wallpaper from '../img/walpaperr.png';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import IconsPlace from './IconsPlace';
import Spotify from './Apps/Spotify';
import HomeBar from './HomeBar';
import ApplePay from './Apps/ApplePay';
import AppsContext from '../store/AppsContext';
import OffScreen from './Apps/OffScreen';

const Screen: React.FC = () => {

    const appsContext = useContext(AppsContext)
    
    const handleHomeBar = ()=>{
        appsContext.handleCloseApp()
    }
    
    return ( 
        <div className='Screen'>
            <div className='wallpaper'>
                <img src={wallpaper}/>
            </div>
            <TopBar/>
            <IconsPlace/>
            <BottomBar/>

            <AnimatePresence mode={'wait'}>
                {appsContext.apps.spotify && <Spotify/>}
            </AnimatePresence>
            <AnimatePresence mode={'wait'}>
                {appsContext.apps.applePay && <ApplePay/>}
            </AnimatePresence>

            

            <AnimatePresence mode='wait'>
                {appsContext.homeBar && <HomeBar handleHomeBar={handleHomeBar}/>}
            </AnimatePresence>

            <AnimatePresence mode='wait'>
                {!appsContext.screenOn && <OffScreen/>}
            </AnimatePresence>

            <DynamicIsland/>
        </div>
     );
}
 
export default Screen;
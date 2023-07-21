import React, { useContext, useState } from 'react';
import '../style/Screen.scss';
import DynamicIsland from './DynamicIsland';

import { AnimatePresence } from 'framer-motion';

import AppsContext, {IApps} from '../store/AppsContext';
import DynamicIslandContext from '../store/DynamicIslandContext';

import wallpaper from '../img/walpaperr.png';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import IconsPlace from './IconsPlace';
import Spotify from './Apps/Spotify';
import HomeBar from './HomeBar';
import ApplePay from './Apps/ApplePay';
import OffScreen from './OffScreen';
import LockedScreen from './LockedScreen';
import SpotifyContext from '../store/SpotifyContext';

const Screen: React.FC = () => {

    const appsContext = useContext(AppsContext)
    const diContext = useContext(DynamicIslandContext)
    const spotifyContext = useContext(SpotifyContext)
    
    const handleHomeBar = ()=>{
        appsContext.handleCloseApp()

        if(spotifyContext.play) diContext.setCurrentDiApp('SPOTIFY')
        else diContext.setCurrentDiApp('')
    }
    
    return ( 
        <div className='Screen'>
            <div className='wallpaper'>
                <img src={wallpaper}/>
            </div>
            
            <div className='appsSpace'>

                <IconsPlace/>
                <BottomBar/>
            </div>

            <AnimatePresence mode={'wait'}>
                {appsContext.apps[0].open && <Spotify/>}
            </AnimatePresence>
            

            <AnimatePresence mode={'wait'}>
                {appsContext.locked && <LockedScreen/>}
            </AnimatePresence>

            <AnimatePresence mode={'wait'}>
                {appsContext.apps[1].open && <ApplePay/>}
            </AnimatePresence>

            <TopBar/>

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
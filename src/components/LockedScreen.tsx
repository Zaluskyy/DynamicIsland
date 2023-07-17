import React, { useContext, useEffect } from 'react';
import '../style/LockedScreen.scss';
import AppearAnimation from '../UI/AppearAnimation';
import { locked } from '../UI/AnimationVariants';

import wallpaper from '../img/walpaperr.png';
import AppsContext from '../store/AppsContext';

const LockedScreen: React.FC = () => {

    const context = useContext(AppsContext)

    useEffect(()=>{
        context.setHomeBar(true)
        return()=>{

        }
    }, [])

    return ( 
        <AppearAnimation 
        className='LockedScreen'
        variants={locked}
        >
            <div className='wallpaper'>
                <img src={wallpaper}/>
            </div>

            <div className='time' onClick={context.handleUnlockScreen}>
                <span>21:37</span>
            </div>
        </AppearAnimation>
     );
}
 
export default LockedScreen;
import React, { useContext, useEffect, useRef, useState } from 'react';
import '../style/LockedScreen.scss';
import AppearAnimation from '../UI/AppearAnimation';
import { locked } from '../UI/AnimationVariants';

import wallpaper from '../img/walpaperr.png';
import AppsContext from '../store/AppsContext';
import DynamicIslandContext from '../store/DynamicIslandContext';

const LockedScreen: React.FC = () => {

    const [firstRender, setFirstRender] = useState(true)

    const appContext = useContext(AppsContext)
    const diContext = useContext(DynamicIslandContext)

    const [unlock, setUnlock] = useState<number>(0)

    useEffect(()=>{
        appContext.setHomeBar(true)
    }, [])


    useEffect(()=>{        
        if (firstRender) {
            setFirstRender(false)
            return;
        }
        else{
            diContext.setMode('FACEID')
            setTimeout(() => {
            appContext.setLocked(false)
            appContext.setHomeBar(false)
            appContext.apps.forEach((app: {
                name: string,
                open: boolean
            })=>{
                if(app.open){
                    appContext.setHomeBar(true)
                }
            })
            }, 1200);
    }
 
     }, [unlock])


    return ( 
        <AppearAnimation 
        className='LockedScreen'
        variants={locked}
        onClick={()=>setUnlock(prev=>prev+1)}
        >
            <div className='wallpaper'>
                <img src={wallpaper}/>
            </div>

            <div className='time'>
                <span>21:37</span>
            </div>
        </AppearAnimation>
     );
}
 
export default LockedScreen;
import React, { useContext, useEffect, useState } from 'react';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/DynamicIsland.scss'
import faceId from '../img/icons/faceId.svg'
import { AnimatePresence, motion } from 'framer-motion';
import { faceId as faceIdVariant } from '../UI/AnimationVariants';
import AppearAnimation from '../UI/AppearAnimation';
import SpotifyContext from '../store/SpotifyContext';

import musicLineImg from '../img/dynamicIsland/music.png'
import AppsContext, {IApps} from '../store/AppsContext';

const DynamicIsland: React.FC = () => {

    const diContext = useContext(DynamicIslandContext)
    const spotifyContext = useContext(SpotifyContext)
    const appsContext = useContext(AppsContext)

    useEffect(()=>{
        let timeoutId: ReturnType<typeof setTimeout>;
        if(diContext.mode=='FACEID'){
            timeoutId = setTimeout(() => {
                diContext.setMode('NORMAL')
            }, 1000);
        }
        return()=>clearTimeout(timeoutId)

    }, [diContext.mode])  
    
    const [holdActive, setHoldActive] = useState<boolean>(false)

    let timer: ReturnType<typeof setTimeout>;
    
    const handleHoldIsland = ()=>{
        timer = setTimeout(() => {
            console.log('Long press activated');
            setHoldActive(true)

            diContext.setMode('BIG')


        }, 300);
    }

    const handleReleaseIsland = ()=>{
        clearTimeout(timer);
    }

    const handleClickIsland = ()=>{
        
        if(!holdActive && diContext.mode=="EXTENDED"){
            console.log("click")


            appsContext.setApps(appsContext.apps.map((app: IApps)=>{
                if(app.name==diContext.currentDiApp){
                    return {...app, open:true}
                }
                else return app
            }))
            appsContext.setHomeBar(true)
        } 
        else setHoldActive(false)
    }

    return ( 
        <div
        onMouseDown={handleHoldIsland}
        onMouseUp={handleReleaseIsland}
        onTouchStart={handleHoldIsland}
        onTouchEnd={handleReleaseIsland}
        onClick={handleClickIsland}
        className='DynamicIsland'
        style={{
            width: diContext.width,
            height: diContext.height,
            borderRadius: diContext.radius,
            top: diContext.top,
        }}
        >
            <AnimatePresence 
            mode={'wait'}
            initial={false}
            onExitComplete={()=>null}
            >
                { diContext.mode=='FACEID' &&
                
                    <AppearAnimation
                    className="faceIdImgContainer"
                    variants={faceIdVariant}
                    >
                        <img src={faceId}/>
                    </AppearAnimation>   
                }

                {
                    diContext.mode=='EXTENDED' &&
                    <div className='extendedContainer'>
                        <div className='left'>
                            <img src={spotifyContext.music[spotifyContext.currentMusic].cover}/>
                        </div>
                        <div className='right'>
                            <img src={musicLineImg}/>
                        </div>
                    </div>
                }

            </AnimatePresence>
        </div>
     );
}
 
export default DynamicIsland;
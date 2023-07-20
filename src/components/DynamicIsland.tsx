import React, { useContext, useEffect, useState } from 'react';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/DynamicIsland.scss'
import faceId from '../img/icons/faceId.svg'
import { AnimatePresence, motion } from 'framer-motion';
import { faceId as faceIdVariant } from '../UI/AnimationVariants';
import AppearAnimation from '../UI/AppearAnimation';
import SpotifyContext from '../store/SpotifyContext';

import musicLineImg from '../img/dynamicIsland/music.png'

const DynamicIsland: React.FC = () => {

    const diContext = useContext(DynamicIslandContext)
    const spotifyContext = useContext(SpotifyContext)

    useEffect(()=>{
        let timeoutId: ReturnType<typeof setTimeout>;
        if(diContext.mode=='FACEID'){
            timeoutId = setTimeout(() => {
                diContext.setMode('NORMAL')
            }, 1000);
        }
        return()=>clearTimeout(timeoutId)

    }, [diContext.mode])    

    return ( 
        <div
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
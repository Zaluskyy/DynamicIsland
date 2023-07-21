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

import previous from '../img/icons/spotify/previous.svg'
import next from '../img/icons/spotify/next.svg'
import play from '../img/icons/spotify/play.svg'
import pause from '../img/icons/spotify/pause.svg'

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

    let timer: ReturnType<typeof setTimeout>;
    
    const handleHoldIsland = ()=>{
        if(diContext.mode=="EXTENDED"){
            timer = setTimeout(() => {
                diContext.setHoldActive(true)
                diContext.setMode('BIG')
            }, 300);

        }
    }

    const handleReleaseIsland = ()=>{
        clearTimeout(timer);
    }

    const handleClickIsland = ()=>{
        
        if(!diContext.holdActive && diContext.mode=="EXTENDED"){
            appsContext.setApps(appsContext.apps.map((app: IApps)=>{
                if(app.name==diContext.currentDiApp){
                    return {...app, open:true}
                }
                else return app
            }))
            appsContext.setHomeBar(true)
        } 
        else diContext.setHoldActive(false)
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

                {diContext.mode=='BIG' &&
                    <div className='bigContainer'>
                        <div className='topBar'>
                            <div className='cover'>
                                <img src={spotifyContext.music[spotifyContext.currentMusic].cover}/>
                            </div>
                            <div className='nameBar'>
                                <span className='title'>
                                    {spotifyContext.music[spotifyContext.currentMusic].title}
                                </span>
                                <span className='artist'>
                                    {spotifyContext.music[spotifyContext.currentMusic].artist}
                                </span>
                            </div>
                            <div className='linePicture'>
                                <img src={musicLineImg}/>
                            </div>
                        </div>
                        
                        <div className='musicLineBar'>
                            <div>
                                {Math.floor(spotifyContext.playedTime/60)}
                                :
                                {(spotifyContext.playedTime%60)<10?`0${spotifyContext.playedTime%60}`:spotifyContext.playedTime%60}
                            </div>
                            <div className='line'>
                                <div className='listened' 
                                style={{width: `${(spotifyContext.playedTime/spotifyContext.music[spotifyContext.currentMusic].seconds)*100}%`}}
                                ></div>
                                <div className='left'
                                style={{width: `${100-((spotifyContext.playedTime/spotifyContext.music[spotifyContext.currentMusic].seconds)*100)}%`}}
                                ></div>
                            </div>
                            <div>
                                {Math.floor(spotifyContext.music[spotifyContext.currentMusic].seconds/60)}
                                :
                                {(spotifyContext.music[spotifyContext.currentMusic].seconds%60)<9?`0${spotifyContext.music[spotifyContext.currentMusic].seconds%60}`:spotifyContext.music[spotifyContext.currentMusic].seconds%60}
                            </div>
                        </div>

                        <div className='buttons'>
                            <div onClick={spotifyContext.handlePreviousMusic}>
                                <img src={previous}/>
                            </div>
                            <div onClick={()=>spotifyContext.setPlay((prev:boolean)=>!prev)}>
                                {
                                spotifyContext.play?<img src={pause}/>:<img src={play}/>
                            }</div>
                            <div onClick={spotifyContext.handleNextMusic}>
                                <img src={next}/>
                            </div>
                        </div>
                    </div>
                }

            </AnimatePresence>
        </div>
     );
}
 
export default DynamicIsland;
import React, { useContext, useEffect, useState } from 'react';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/DynamicIsland.scss'
import faceId from '../img/icons/faceId.svg'
import { AnimatePresence, motion } from 'framer-motion';
import { faceId as faceIdVariant } from '../UI/AnimationVariants';
import AppearAnimation from '../UI/AppearAnimation';

import AppsContext, {IApps} from '../store/AppsContext';


import ExtendedDynamicIsland from './ExtendedDynamicIsland';
import BigDynamicIsland from './BigDynamicIsland';

const DynamicIsland: React.FC = () => {

    const diContext = useContext(DynamicIslandContext)
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

                {diContext.mode=='EXTENDED' && <ExtendedDynamicIsland/>}

                {diContext.mode=='BIG' &&
                    <BigDynamicIsland/>
                }

            </AnimatePresence>
        </div>
     );
}
 
export default DynamicIsland;
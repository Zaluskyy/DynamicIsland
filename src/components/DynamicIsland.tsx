import React, { useContext, useEffect, useState } from 'react';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/DynamicIsland.scss'
import faceId from '../img/icons/faceId.svg'
import { AnimatePresence, motion } from 'framer-motion';
import { faceId as faceIdVariant } from '../UI/AnimationVariants';
import AppearAnimation from '../UI/AppearAnimation';

const DynamicIsland: React.FC = () => {

    const diContext = useContext(DynamicIslandContext)

    useEffect(()=>{
        let timeoutId: ReturnType<typeof setTimeout>;
        if(diContext.mode=='FACEID'){
            timeoutId = setTimeout(() => {
                diContext.setMode('NORMAL')
            }, 1000);
        }
        return()=>clearTimeout(timeoutId)

    }, [diContext.mode])

    //just for test
    const [test, setTest] = useState<number>(0)
    useEffect(()=>{
        if(test){
            if(diContext.mode=='NORMAL') diContext.setMode('EXTENDED')
            else if(diContext.mode=='EXTENDED') diContext.setMode('NORMAL')
        }
    }, [test])
    //

    return ( 
        <div 
        onClick={()=>setTest(prev=>prev+1)}
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
            </AnimatePresence>
        </div>
     );
}
 
export default DynamicIsland;
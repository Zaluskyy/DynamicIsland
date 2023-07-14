import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const DynamicIslandContext = createContext<any>({} as any);

export const DynamicIslandContextProvider = ({children}: {children: ReactNode}) =>{
    const [width, setWidth] = useState<number>(87)
    const [height, setHeight] = useState<number>(26)
    const [radius, setRadius] = useState<number>(13)
    const [top, setTop] = useState<number>(8)

    type Mode = 'NORMAL' | 'EXTENDED' | 'FACEID' | 'BIG'
    const [mode, setMode] = useState<Mode>('NORMAL')

    useEffect(()=>{
        if(mode=='NORMAL'){
            setHeight(26)
            setWidth(87)
            setRadius(13)
            setTop(8)
        }else if(mode=='FACEID'){
            setHeight(87)
            setWidth(87)
            setRadius(28)
            setTop(5)
        }else if(mode=='EXTENDED'){
            setHeight(26)
            setWidth(168)
            setRadius(13)
            setTop(8)
        }else if(mode=='BIG'){
            setHeight(128)
            setWidth(255)
            setRadius(35)
            setTop(8)
        }
    }, [mode])
    
    return(
        <DynamicIslandContext.Provider value={{
            width, setWidth,
            height, setHeight,
            radius, setRadius,
            top, setTop,
            mode, setMode,
        }}>
            {children}
        </DynamicIslandContext.Provider>
    )
}

export default DynamicIslandContext;
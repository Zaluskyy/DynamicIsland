import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const DynamicIslandContext = createContext<any>({} as any);

export const DynamicIslandContextProvider = ({children}: {children: ReactNode}) =>{
    const [width, setWidth] = useState<number>(87)
    const [height, setHeight] = useState<number>(26)
    const [radius, setRadius] = useState<number>(13)
    const [top, setTop] = useState<number>(8)
    const [currentDiApp, setCurrentDiApp] = useState<string>('')
    const [holdActive, setHoldActive] = useState<boolean>(false)

    const noramlWidth = 87
    const extendedWidth = 139
    const normalheight = 26

    type Mode = 'NORMAL' | 'EXTENDED' | 'FACEID' | 'BIG'
    const [mode, setMode] = useState<Mode>('NORMAL')

    useEffect(()=>{
        if(mode=='NORMAL'){
            setHeight(26)
            setWidth(noramlWidth)
            setRadius(13)
            setTop(8)
        }else if(mode=='FACEID'){
            setHeight(noramlWidth)
            setWidth(noramlWidth)
            setRadius(28)
            setTop(5)
        }else if(mode=='EXTENDED'){
            setHeight(26)
            setWidth(extendedWidth)
            setRadius(13)
            setTop(8)
        }else if(mode=='BIG'){
            setHeight(128)
            setWidth(255)
            setRadius(35)
            setTop(8)
        }
    }, [mode])
    
    useEffect(()=>{
        if(currentDiApp!=='') setMode('EXTENDED')
        else setMode('NORMAL')
    }, [currentDiApp])

    const hanldeCloseBigIsland=()=>{
        if(mode=='BIG') {
            setMode('EXTENDED')
            setHoldActive(false)
        }
    }

    return(
        <DynamicIslandContext.Provider value={{
            width, setWidth,
            height, setHeight,
            radius, setRadius,
            top, setTop,
            mode, setMode,
            currentDiApp, setCurrentDiApp,
            holdActive, setHoldActive,
            noramlWidth, extendedWidth, normalheight,
            hanldeCloseBigIsland
        }}>
            {children}
        </DynamicIslandContext.Provider>
    )
}

export default DynamicIslandContext;
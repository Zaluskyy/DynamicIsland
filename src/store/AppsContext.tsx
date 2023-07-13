import React, { createContext, ReactNode, useContext, useState } from 'react';

const AppsContext = createContext<any>({} as any);

export const AppsContextProvider = ({children}: {children: ReactNode}) =>{
    interface IApps {
        spotify: boolean,
        applePay: boolean
    }

    const [apps, setApps] = useState<IApps>({
        spotify: false,
        applePay: false
    })

    const defaultApps: IApps = {
        spotify: false,
        applePay: false
    }

    const [homeBar, setHomeBar] = useState<boolean>(false)
    const [screenOn, setScreenOn] = useState<boolean>(true)

    const handleCloseApp = ()=>{
        setApps({...defaultApps})
        setHomeBar(false)
    }

    const handleOpenApp = (name: string)=>{
        switch(name){
            case 'SPOTIFY':
                setApps({...defaultApps, spotify: true})
                break;
                case 'APPLEPAY':
                setApps({...defaultApps, applePay: true})
                break;
        }
        setHomeBar(true)
    }

    return(
        <AppsContext.Provider value={{
            handleOpenApp,
            handleCloseApp,
            apps,
            homeBar,
            setHomeBar,
            screenOn,
            setScreenOn,

        }}>
            {children}
        </AppsContext.Provider>
    )
}

export default AppsContext;
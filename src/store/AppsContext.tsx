import React, { createContext, ReactNode, useContext, useState } from 'react';
import ApplePay from '../components/Apps/ApplePay';

const AppsContext = createContext<any>({} as any);

export const AppsContextProvider = ({children}: {children: ReactNode}) =>{
    interface IApps {
        name: string,
        open: boolean
    }

    const [apps, setApps] = useState<IApps[]>([
        {
            name: 'SPOTIFY',
            open: false
        },
        {
            name: 'APPLEPAY',
            open: false
        }
    ])

    const defaultApps: IApps[] = [
        {
            name: 'SPOTIFY',
            open: false
        },{
            name: 'APPLEPAY',
            open: false
        }
    ]

    const [homeBar, setHomeBar] = useState<boolean>(false)
    const [screenOn, setScreenOn] = useState<boolean>(true)
    const [locked, setLocked] = useState<boolean>(true)

    const handleCloseApp = ()=>{
        setApps(defaultApps)
        setHomeBar(false)
    }

    const handleOpenApp = (name: string)=>{

        setApps(apps.map(app=>{
            if(app.name==name){
                return {...app, open:true}
            }
            else return app
        }))

        setHomeBar(true)
    }

    const handleUnlockScreen = ()=>{
        setLocked(false)
        setHomeBar(false)
        // console.log(apps[0].open)
        apps.forEach(app => {
            if(app.open){
                console.log(app);
                
                setHomeBar(true)
            }
        });
    }

    return(
        <AppsContext.Provider value={{
            handleOpenApp,
            handleCloseApp,
            handleUnlockScreen,
            apps,
            homeBar, setHomeBar,
            screenOn, setScreenOn,
            locked, setLocked

        }}>
            {children}
        </AppsContext.Provider>
    )
}

export default AppsContext;
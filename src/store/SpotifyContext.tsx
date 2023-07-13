import React, { createContext, ReactNode, useContext, useState } from 'react';

const SpotifyContext = createContext<any>({} as any);

export const SpotifyContextProvider = ({children}: {children: ReactNode}) =>{
    const [numberMusic, setNumberMusic] = useState<number>(0)
    

    return(
        <SpotifyContext.Provider value={{
            numberMusic,
            setNumberMusic
        }}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyContext;
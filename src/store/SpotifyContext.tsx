import React, { createContext, ReactNode, useEffect, useState } from 'react';


import dopehouse from '../img/apps/spotify/dopehouse.jpg'
import kukonozaur from '../img/apps/spotify/kukonozaur.jpg'

const SpotifyContext = createContext<any>({} as any);

export const SpotifyContextProvider = ({children}: {children: ReactNode}) =>{

    const [currentMusic, setCurrentMusic] = useState<number>(0)
    const [play, setPlay] = useState<boolean>(false)
    const [playedTime, setPlayedTime] = useState<number>(0)


    useEffect(()=>{
        let intervalId: ReturnType<typeof setInterval>
        if(play){
            intervalId = setInterval(()=>{
                setPlayedTime(prev=>prev+1)
            }, 1000)
        }
        return()=>{
            clearInterval(intervalId)
        }
    }, [play])
    
    interface Imusic{
        cover: string, 
        artist: string,
        title: string,
        seconds: number,
    }

    const music: Imusic[] = [
        {cover: dopehouse, artist: "Gibbs x Janek", title: "Ostatni", seconds: 20},
        {cover: kukonozaur, artist: "Kukon", title: "Mood", seconds: 200}
    ]

    const handlePreviousMusic = ()=>{
        setCurrentMusic((prev: number) =>{
            if(prev==0) return music.length-1
            else return prev-=1
        })
        setPlayedTime(0)
        setPlay(true)
    }
    
    const handleNextMusic = ()=>{
        setCurrentMusic((prev: number)=>{
            if(prev>=music.length-1) return 0
            else return prev+=1
        })
        setPlayedTime(0)
        setPlay(true)
    }

    useEffect(()=>{
        if(playedTime>=music[currentMusic].seconds) handleNextMusic()
    }, [playedTime])

    return(
        <SpotifyContext.Provider value={{
            handlePreviousMusic,
            handleNextMusic,
            music,
            currentMusic, setCurrentMusic,
            play, setPlay,
            playedTime, setPlayedTime,
        }}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyContext;
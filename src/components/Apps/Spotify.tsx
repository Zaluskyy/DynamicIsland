import React, {useContext, useEffect, useState} from 'react';
import ApplicationAnimation from '../../UI/ApplicationAnimation';
import SpotifyContext from '../../store/SpotifyContext';

import '../../style/Apps/Spotify.scss';

import previous from '../../img/icons/spotify/previous.svg'
import next from '../../img/icons/spotify/next.svg'
import play from '../../img/icons/spotify/play.svg'
import pause from '../../img/icons/spotify/pause.svg'

export interface SpotifyProps{
}

const Spotify: React.FC<SpotifyProps> = () => {

    const sContext = useContext(SpotifyContext)

    return ( 
        <ApplicationAnimation className="Spotify" tabIndex={2}>
            <div className='container'>
                <div className='cover'>
                    <img src={sContext.music[sContext.currentMusic].cover}/>
                </div>
                <div className='nameBar'>
                    <div>+</div>
                    <div>
                        <span>{sContext.music[sContext.currentMusic].title}</span>
                        <span>{sContext.music[sContext.currentMusic].artist}</span>
                    </div>
                    <div>...</div>
                </div>
                <div className='musicLineBar'>
                    <div>
                        {Math.floor(sContext.playedTime/60)}
                        :
                        {(sContext.playedTime%60)<10?`0${sContext.playedTime%60}`:sContext.playedTime%60}
                    </div>
                    <div className='line'>
                        <div className='listened' 
                        style={{width: `${(sContext.playedTime/sContext.music[sContext.currentMusic].seconds)*100}%`}}
                        ></div>
                        <div className='left'
                        style={{width: `${100-((sContext.playedTime/sContext.music[sContext.currentMusic].seconds)*100)}%`}}
                        ></div>
                    </div>
                    <div>
                    {Math.floor(sContext.music[sContext.currentMusic].seconds/60)}
                    :
                    {(sContext.music[sContext.currentMusic].seconds%60)<9?`0${sContext.music[sContext.currentMusic].seconds%60}`:sContext.music[sContext.currentMusic].seconds%60}
                    </div>
                </div>
                <div className='buttonsBar'>
                    <div onClick={sContext.handlePreviousMusic}>
                        <img src={previous}/>
                    </div>
                    <div onClick={()=>sContext.setPlay((prev:boolean)=>!prev)}>{
                        sContext.play?<img src={pause}/>:<img src={play}/>
                    }</div>
                    <div onClick={sContext.handleNextMusic}>
                    <img src={next}/>
                    </div>
                </div>
            </div>
        </ApplicationAnimation>
     );
}
 
export default Spotify;
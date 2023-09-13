import React, {useContext, useEffect} from 'react';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/BigDynamicIsland.scss';

import previous from '../img/icons/spotify/previous.svg'
import next from '../img/icons/spotify/next.svg'
import play from '../img/icons/spotify/play.svg'
import pause from '../img/icons/spotify/pause.svg'

import SpotifyContext from '../store/SpotifyContext';
import musicLineImg from '../img/dynamicIsland/music.png'


const BigDynamicIsland: React.FC = () => {

    const spotifyContext = useContext(SpotifyContext)

    return ( 
        <div className='BigDynamicIsland'>
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
     );
}
 
export default BigDynamicIsland;
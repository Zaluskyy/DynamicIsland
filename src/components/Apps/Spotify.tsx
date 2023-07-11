import React, {useContext} from 'react';
import ApplicationAnimation from '../../UI/ApplicationAnimation';
// import SpotifyContext from '../../store/SpotifyContext';

import '../../style/Apps/Spotify.scss';

import dopehouse from '../../img/apps/spotify/dopehouse.jpg'
import kukonozaur from '../../img/apps/spotify/kukonozaur.jpg'

export interface SpotifyProps{
    setSpotify: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Imusic{
    cover: string, 
    artist: string,
    title: string,
}

const Spotify: React.FC<SpotifyProps> = ({setSpotify}) => {

    // const kurwaContext:  = useContext(SpotifyContext)

// console.log(kurwaContext.num);

    const music: Imusic[] = [
        {cover: dopehouse, artist: "Gibbs x Janek", title: "Ostatni"},
        {cover: kukonozaur, artist: "Kukon", title: "Mood"}
    ]

    return ( 
        <ApplicationAnimation className="Spotify" tabIndex={2}>
            <div className='container'>
                <div className='cover'/>
                <div className='nameBar'>
                    <div>+</div>
                    <div>
                        <span>Anyzowe zelki</span>
                        <span>Chivas</span>
                    </div>
                    <div>...</div>
                </div>
                <div className='musicLineBar'>
                    <div>
                        0:00
                    </div>
                    <div className='line'>
                        <div className='listened'></div>
                        <div className='left'></div>
                    </div>
                    <div>
                        3:26
                    </div>
                </div>
                <div className='buttonsBar'>
                    <div>&#60;</div>
                    <div>||</div>
                    <div>&#62;</div>
                </div>


            </div>
        </ApplicationAnimation>
        // <div className='Spotify'>
        // </div>
     );
}
 
export default Spotify;
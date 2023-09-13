import React, {useContext, useEffect} from 'react';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/ExtendedDynamicIsland.scss';

import SpotifyContext from '../store/SpotifyContext';
import musicLineImg from '../img/dynamicIsland/music.png'


const ExtendedDynamicIsland: React.FC = () => {

    const spotifyContext = useContext(SpotifyContext)

    return ( 
        <div className='ExtendedDynamicIsland'>
            <div className='left'>
                <img src={spotifyContext.music[spotifyContext.currentMusic].cover}/>
            </div>
            <div className='right'>
                <img src={musicLineImg}/>
            </div>
        </div>
     );
}
 
export default ExtendedDynamicIsland;
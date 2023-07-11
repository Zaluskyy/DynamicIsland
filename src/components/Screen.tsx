import React, {useState} from 'react';
import '../style/Screen.scss';
import DynamicIsland from './DynamicIsland';

import { AnimatePresence } from 'framer-motion';

import wallpaper from '../img/walpaperr.png';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import IconsPlace from './IconsPlace';
import Spotify from './Apps/Spotify';

const Screen: React.FC = () => {
    const [spotify, setSpotify] = useState<boolean>(false)
    return ( 
        <div className='Screen'>
            <div className='wallpaper'>
                <img src={wallpaper}/>
            </div>
            <TopBar/>
            <IconsPlace setSpotify={setSpotify}/>
            <BottomBar/>

            <AnimatePresence
            mode={'wait'}
            initial={false}
            onExitComplete={()=>null}
            >
            {spotify && <Spotify setSpotify={setSpotify}/>}

            </AnimatePresence>

            <DynamicIsland/>
        </div>
     );
}
 
export default Screen;
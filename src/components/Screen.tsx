import * as React from 'react';
import '../style/Screen.scss';
import DynamicIsland from './DynamicIsland';
import wallpaper from '../img/walpaperr.png';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import IconsPlace from './IconsPlace';

const Screen: React.FC = () => {
    return ( 
        <div className='Screen'>
            <div className='wallpaper'>
                <img src={wallpaper}/>
            </div>
            <TopBar/>
            <IconsPlace/>
            <BottomBar/>

            <DynamicIsland/>
        </div>
     );
}
 
export default Screen;
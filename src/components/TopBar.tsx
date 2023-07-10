import * as React from 'react';
import '../style/TopBar.scss';

import battery from '../img/topIcons/battery.png'
import range from '../img/topIcons/range.png'
import wifi from '../img/topIcons/wifi.png'

const TopBar: React.FC = () => {
    
    return ( 
        <div className='TopBar'>

            <span className='left'>
                21:37
            </span>
            <span className='right'>
                <img src={range}/>
                <img src={wifi}/>
                <img src={battery}/>
            </span>
        </div>
     );
}
 
export default TopBar;
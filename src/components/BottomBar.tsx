import * as React from 'react';
import '../style/BottomBar.scss';

import phone from '../img/icons/phone.png'
import messages from '../img/icons/messages.png'
import settings from '../img/icons/settings.png'
import camera from '../img/icons/camera.jpg'

const BottomBar: React.FC = () => {
    return ( 
        <div className='BottomBar'>
            <div>
                <img src={phone}/>
            </div>
            <div>
                <img src={messages}/>
            </div>
            <div>
                <img src={settings}/>
            </div>
            <div>
                <img src={camera}/>
            </div>
        </div>
     );
}
 
export default BottomBar;
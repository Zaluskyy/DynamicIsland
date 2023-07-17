import React, { useContext, useEffect } from 'react';
import '../style/OffScreen.scss';
import AppsContext from '../store/AppsContext';
import AppearAnimation from '../UI/AppearAnimation';
import { appear } from '../UI/AnimationVariants';

const OffScreen = () => {

    const context = React.useContext(AppsContext)

    return ( 
        <AppearAnimation
        className='OffScreen'
        onClick={()=>context.setScreenOn(true)}
        variants={appear}
        >
            
        </AppearAnimation>
     );
}
 
export default OffScreen;
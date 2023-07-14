import React, { useContext } from 'react';
import '../../style/Apps/OffScreen.scss';
import AppsContext from '../../store/AppsContext';
import AppearAnimation from '../../UI/AppearAnimation';
import { appear } from '../../UI/AnimationVariants';

const OffScreen = () => {

    const appsContext = React.useContext(AppsContext)

    return ( 
        <AppearAnimation
        className='OffScreen'
        onClick={()=>appsContext.setScreenOn(true)}
        variants={appear}
        >
            
        </AppearAnimation>
     );
}
 
export default OffScreen;
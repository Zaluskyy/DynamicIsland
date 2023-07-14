import React, {useContext, useEffect} from 'react';
import DynamicIslandContext from '../../store/DynamicIslandContext';
import '../../style/Apps/ApplePay.scss'
import ApplicationAnimation from '../../UI/ApplicationAnimation';

interface ApplePayProps{
}

const ApplePay: React.FC<ApplePayProps> = () => {

    const diContext = useContext(DynamicIslandContext)

    useEffect(()=>{
        // diContext.setMode = 'FACEID'
        const timeoutId = setTimeout(() => {
            diContext.setMode('FACEID')
        }, 300);
        // const kurwaId = setTimeout(() => {
        //     diContext.setMode('NORMAL')
        // }, 2000);
        return()=>{
            clearTimeout(timeoutId)
            // clearTimeout(kurwaId)
        }
    }, [])

    return ( 
        <ApplicationAnimation>
            <div className='ApplePay'>
                <div className='cardContainer'>
                    <span className='name' data-name="REVOLUT">REVOLUT</span>
                    <div className='logo'/>
                </div>
            </div>
        </ApplicationAnimation>
     );
}
 
export default ApplePay;
import * as React from 'react';
import '../../style/Apps/ApplePay.scss'
import ApplicationAnimation from '../../UI/ApplicationAnimation';

interface ApplePayProps{
}

const ApplePay: React.FC<ApplePayProps> = () => {
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
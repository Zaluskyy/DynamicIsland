import * as React from 'react';
import '../style/Application.scss';

export interface ApplicationProps {
    name: string;
    image: string;
    onClick: ()=>void;
}

const Application: React.FC<ApplicationProps> = ({name, image, onClick}) => {
    return ( 
        <div className='Application' onClick={onClick}>
            <div className='imageContainer'>
                <img src={image}/>
            </div>
            <span>{name}</span>
        </div>
     );
}
 
export default Application;
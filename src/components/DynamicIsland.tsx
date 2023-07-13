import React, { useContext } from 'react';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/DynamicIsland.scss'

const DynamicIsland: React.FC = () => {

    const diContext = useContext(DynamicIslandContext)

    return ( 
        <div 
        className='DynamicIsland'
        style={{
            width: diContext.width,
            height: diContext.height,
            borderRadius: diContext.radius,
            top: diContext.top,
        }}
        >
            
        </div>
     );
}
 
export default DynamicIsland;
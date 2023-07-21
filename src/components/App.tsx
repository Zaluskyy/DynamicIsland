import React, { useContext } from 'react';
import AppsContext from '../store/AppsContext';
import DynamicIslandContext from '../store/DynamicIslandContext';
import '../style/App.scss';
import Screen from './Screen';

const App: React.FC = () => {

  const appsContext = useContext(AppsContext)
  const diContext = useContext(DynamicIslandContext)

  let timeoutId: NodeJS.Timeout | null = null;

  const handlePowerDoubleClick = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    appsContext.handleOpenApp('APPLEPAY');
  };
  
  const handlePowerClick = () => {

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      appsContext.setScreenOn(!Boolean(appsContext.screenOn));
      appsContext.setLocked(true);
      diContext.setCurrentDiApp('')
      timeoutId = null;
    }, 300);
  };
  
  return (
    <div className="App">
      <div className='container'>
          <div className='volumeSwitch physicialButton'></div>
          <div className='topVolumeButton physicialButton'></div>
          <div className='bottomVolumeButton physicialButton'></div>
          <div className='powerButton physicialButton' 
          onDoubleClick={handlePowerDoubleClick}
          onClick={handlePowerClick}
          ></div>
          <Screen/>
      </div>
    </div>
  );
}

export default App;

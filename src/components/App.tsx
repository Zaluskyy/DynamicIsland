import React, { useContext } from 'react';
import logo from '../logo.svg';
import AppsContext from '../store/AppsContext';
import '../style/App.scss';
import Screen from './Screen';

const App: React.FC = () => {

  const appsContext = useContext(AppsContext)

  const handlePowerDoubleClick = ()=>{
    // appsContext.handleOpenApp('APPLEPAY')
  }

  const handlePowerClick = ()=>{
    appsContext.setScreenOn(!Boolean(appsContext.screenOn))
    appsContext.setLocked(true)
    
  }

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

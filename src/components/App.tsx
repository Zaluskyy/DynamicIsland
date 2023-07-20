import React, { useContext } from 'react';
import logo from '../logo.svg';
import AppsContext from '../store/AppsContext';
import '../style/App.scss';
import Screen from './Screen';
import Timer from './Test';

const App: React.FC = () => {

  const appsContext = useContext(AppsContext)

  // const handlePowerDoubleClick = ()=>{
  //   appsContext.handleOpenApp('APPLEPAY')
  // }

  // const handlePowerClick = ()=>{
  //   appsContext.setScreenOn(!Boolean(appsContext.screenOn))
  //   appsContext.setLocked(true)
    
  // }



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
          {/* <Timer/> */}
      </div>
    </div>
  );
}

export default App;

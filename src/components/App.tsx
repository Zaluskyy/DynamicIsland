import React from 'react';
import logo from '../logo.svg';
import '../style/App.scss';
import Screen from './Screen';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='container'>
          <div className='volumeSwitch physicialButton'></div>
          <div className='topVolumeButton physicialButton'></div>
          <div className='bottomVolumeButton physicialButton'></div>
          <div className='powerButton physicialButton'></div>
          <Screen/>
      </div>
    </div>
  );
}

export default App;

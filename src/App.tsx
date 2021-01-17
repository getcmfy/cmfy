import React from 'react';

import { ReactSVG } from 'react-svg';
import './assets/styles/css.css';

interface AppProps {}

function App({}: AppProps) {

  return (
    <div className='blur'>
      <ReactSVG src='cmfy-logo.svg'/>
    </div>
  );
}

export default App;

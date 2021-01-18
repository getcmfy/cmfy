import React from 'react';
import './assets/styles/css.css';

interface AppProps {}

function App({}: AppProps) {

  return (
    <div className='blur'>
      <img src={require('./assets/images/cmfy.svg')} alt="CMFY Logo" className="logo"/> 
    </div>
  );
}

export default App;

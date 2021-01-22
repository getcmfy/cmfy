import React from 'react';
import Header from './components/Header'
import Content from './components/Content'

interface AppProps {}

const App = ( {}: AppProps ) => {

  return pug`
    Header
    Content
  `;
}

export default App;

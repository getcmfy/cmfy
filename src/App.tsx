import type { Component } from 'solid-js';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App: Component = () => {

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
};

export default App;

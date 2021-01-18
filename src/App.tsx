import React from 'react';

interface AppProps {}

const App = ( {}: AppProps ) => {

  return pug`
    .blur
      img.logo(
        src=require('./assets/images/cmfy.svg')
        alt="CMFY - React Webpack Typescript Boilerplate"
      )
      .title-bar
        .title C Module Federation Y
          span /ˈkəmfē/
        .version Current Version :
          span #{VERSION}
  `;
}

export default App;

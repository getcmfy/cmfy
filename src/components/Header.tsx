import React from 'react';

interface Props {}

const Header = ( {}: Props ) => {

  return pug`
    .blur
      img.logo(
        src=require('../assets/images/cmfy.svg')
        alt="CMFY - React Webpack Typescript Boilerplate"
      )
      .title-bar
        .title C Module Federation Y
          span /ˈkəmfē/
        .version Current Version :
          span #{VERSION}
  `;
}

export default Header;

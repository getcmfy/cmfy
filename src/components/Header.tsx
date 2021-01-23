import type { Component } from 'solid-js';

const Header: Component = () => {

  return (
    <div class="blur">
        <img class="logo" alt="CMFY - React Webpack Typescript Boilerplate" />
        <div class="title-bar">
            <div class="title">C Module Federation Y<span>/ˈkəmfē/</span></div>
            <div class="version">Current Version :<span></span></div>
        </div>
    </div>
  );
};

export default Header;

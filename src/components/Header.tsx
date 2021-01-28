import type { Component } from 'solid-js';

import logo from '@img/cmfy.svg'

const Header: Component = () => {

  return (
    <header class="blur">
        <img src={logo} class="logo" alt={import.meta.env.SNOWPACK_PUBLIC_DESC} />
        <div class="title-bar">
            <div class="title">{import.meta.env.SNOWPACK_PUBLIC_DESC}<span>/ˈkəmfē/</span></div>
            <div class="version">Current Version :<span>{import.meta.env.SNOWPACK_PUBLIC_PACKAGE_VERSION}</span></div>
        </div>
    </header>
  );
};

export default Header;

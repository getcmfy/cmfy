import type { Component } from 'solid-js';

import github from '../assets/images/github.svg';

const Footer: Component = () => {

  return (
    <footer>
      <div class='footer'>
        <div>
          CMFY is
          <a href='https://github.com/tsanyqudsi/cmfy/blob/master/LICENSE'>
            MIT LICENSE
          </a>
          <span>
            Background pictures taken from
            <a href='https://unsplash.com/'>
              Unsplash  
            </a>
          </span>
        </div>
        <a href='https://github.com/tsanyqudsi/cmfy'>
          <img src={github} alt='Github'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

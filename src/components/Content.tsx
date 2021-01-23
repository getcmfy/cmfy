import type { Component } from 'solid-js';

import sakura from '../assets/images/sakura.svg';

const Content: Component = () => {

  return (
    <main>
      <p class='welcome'>
        Hey, How are you ?
      </p>
      <img src={sakura} />
      <p>
        You can start creating your next
        <span>
          masterpiece
        </span>
        by checking
        <code>
          ./src
        </code>
        and edit some stuff
      </p>
      <p class='ps'>
        <b>PS :</b>Don't forget to change the
        <code>index.html</code>
        inside the
        <code>
          ./public
        </code>
        folder
        <span>
          :3
        </span>
      </p>
    </main>
  );
};

export default Content;

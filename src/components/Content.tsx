import type { Component } from 'solid-js';

const Content: Component = () => {

  return (
    <main>
      <p class='welcome'>
        Congratulation and Welcome !
      </p>
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
    </main>
  );
};

export default Content;

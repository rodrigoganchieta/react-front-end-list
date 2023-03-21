import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/rodrigoganchieta" target="_blank">
          <i className="devicon-github-original" />
          {' '}
          RODRIGOGANCHIETA
        </a>
      </p>
    </footer>
  );
}

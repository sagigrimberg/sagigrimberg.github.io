import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Sagi Grimberg's personal website. Israel based, "
    + 'Enjoying at home, previously co-founder and CTO at Lightbits, and a Linux kernel contributor/maintainer.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A reasonable, responsive, statically-generated,
            react application written with Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/mldangelo/personal-site">here</a>.
      </p>
      <p> Source available <a href="https://github.com/sagigrimberg/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;

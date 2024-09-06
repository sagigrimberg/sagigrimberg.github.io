import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Sagi Grimberg's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About Me</Link></h2>
        </div>
      </header>
      <p>
        I am currently unemployed. Before, I was a co-founder & CTO at
        [Lightbits](https://lightbitslabs.com). Outside of my day job,
        I try to regularly contribute to the Linux Kernel I/O stack and help maintain the Linux
        [NVMe subsystem](http://git.infradead.org/nvme.git) and iSER drivers. If you would like
        to get in touch, please feel free to do so.
      </p>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/sagigrimberg/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;

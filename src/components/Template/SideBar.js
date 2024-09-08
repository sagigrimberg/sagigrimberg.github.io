import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sagi Grimberg</h2>
        <p>
          <a href="mailto:sagi@grimberg.me">sagi@grimberg.me</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Sagi. I am a SW engineer with a pure orientation to realtime systems, with
        deep understanding in storage, networking, virtualization and distributed systems.
        I&apos;m currently living in Kfar Saba, Israel and enjoying my time balancing between my
        <a href="https://vastdata.com"> day job</a> and my family and friends.
        Previously, I was a co-founder and CTO of <a href="https://lightbits.com">Lightbits</a>,
        and worked at Mellanox (now {' '}<a href="https://nvidia.com">NVIDIA</a>). I also try to
        contribute regularly to the Linux Kernel and help maintain the <a href="https://git.infradead.org/nvme.git">NVMe Subsystem</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sagi Grimberg <Link to="/">grimberg.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;

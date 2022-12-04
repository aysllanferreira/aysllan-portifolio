import React from 'react';
import '../styles/components/Navbar.scss';

const navLinks = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Expertise',
    path: '/#',
  },
  {
    id: 3,
    title: 'Experience',
    path: '/#',
  },
  {
    id: 4,
    title: 'Projects',
    path: '/#',
  },
  {
    id: 5,
    title: 'Contact',
    path: '/#',
  },
];

function Navbar() {
  return (
    <nav className="Navbar">
      <div id="logo">
        <a href="/#">Logo</a>
      </div>

      <div id="nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.path}>
                {
                link.title
              }
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

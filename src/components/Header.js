import React from 'react';
import HeaderCSS from '../cssModules/Header.module.css';

const Header = () => {
  return (
    <div className={HeaderCSS.flexContainer}>
        <p className={HeaderCSS.header}>Chenjia's Origami Store</p>
    </div>
  )
}

export default Header
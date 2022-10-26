import React from 'react';
import "./styles/header.scss"

const Header = () => {
  return (
    <div className={'header'}>
        <img src="./assets/header-icon.svg" alt={"icon"} />
        <h1>Culinary Kitchen</h1>
    </div>
  );
};

export default Header;
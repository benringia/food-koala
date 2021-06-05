import React from "react";
import mealsImage from "../../assets/meals.jpg";
import headerStyles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={headerStyles.header}>
        <h1>Food Koala</h1>
        <HeaderCartButton/>
      </header>
      <div className={headerStyles['main-image']}>
        <img src={mealsImage} alt="A table of food" />
      </div>
    </React.Fragment>
  );
};
export default Header;

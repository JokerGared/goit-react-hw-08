import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const setClassBuilder = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav>
      <NavLink className={setClassBuilder} to="/">
        Home
      </NavLink>
      <NavLink className={setClassBuilder} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;

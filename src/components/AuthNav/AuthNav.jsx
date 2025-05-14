import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const setClassBuilder = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <NavLink className={setClassBuilder} to="/login">
        Log In
      </NavLink>
      <NavLink className={setClassBuilder} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;

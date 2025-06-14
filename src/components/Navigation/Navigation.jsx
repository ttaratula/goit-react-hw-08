import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  return (
    <div className={css.navList}>
      <NavLink to={"/"} className={css.link}>Home</NavLink>
      <NavLink to={"/contacts"} className={css.linkcontacts}>Contacts</NavLink>
    </div>
  );
}
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.navList}>
      <NavLink to="/" className={css.link}>Home</NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.linkcontacts}>
          Contacts
        </NavLink>
      )}
    </div>
  );
}



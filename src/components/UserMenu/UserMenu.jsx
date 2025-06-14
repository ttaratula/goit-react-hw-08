import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={css.userMenu}>
      <p>Welcome, {name}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}
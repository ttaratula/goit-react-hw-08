import { useDispatch } from "react-redux";
import { changeFilters } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox({ inputValue }) {
  const dispatch = useDispatch();

  const onUpdate = (e) => {
    dispatch(changeFilters(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="searchBox" className={css.label}>Find contacts by name</label>
      <input
        type="text"
        id="searchBox"
        value={inputValue}
        onChange={onUpdate}
        className={css.searchbox}
      />
    </div>
  );
}

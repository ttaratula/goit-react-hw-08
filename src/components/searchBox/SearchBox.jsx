import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, setNameFilter } from '../../redux/filters/slice.js';
import css from "./SearchBox.module.css"

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <>
      <p className={css.label}>Find contacts by name</p>
      <input   className={css.searchbox} type="text" value={filter} onChange={handleChange} />
    </>
  );
}

// import { useDispatch, useSelector } from 'react-redux';
// import { selectNameFilter, setNameFilter } from '../../redux/filters/slice.js';
// import css from "./SearchBox.module.css"

// export default function SearchBox() {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectNameFilter);

//   const handleChange = e => {
//     dispatch(setNameFilter(e.target.value));
//   };

//   return (
//     <div className={css.wrapper}>
//       <p className={css.label}>Find contacts by name</p>
//       <input   className={css.searchbox} type="text" value={filter} onChange={handleChange} />
//     </div>
//   );
// }


import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilters } from "../../redux/filters/slice";

export default function SearchBox({ inputValue }) {
  const dispatch = useDispatch();
  const onUpdate = (event) => {
    dispatch(changeFilters(event.target.value));
  };
  return (
    <div className={css.wrapper}>
      <label className={css.searchbox} htmlFor="searchBox">Find contacts</label>
      <input
        type="text"
        id="searchBox"
        value={inputValue}
        onChange={onUpdate}
      />
    </div>
  );
}
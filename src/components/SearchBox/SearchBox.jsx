import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChangeQuery = (query) => {
    dispatch(changeFilter(query));
  };
  return (
    <>
      <h2 className={s.searchBoxHeading}>Find contact</h2>
      <input
        placeholder="Enter name or number"
        className={s.searchBoxInput}
        type="text"
        value={filter}
        onChange={(e) => handleChangeQuery(e.target.value)}
      />
    </>
  );
};

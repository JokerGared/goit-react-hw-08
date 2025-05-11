import { RiseLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <RiseLoader
        color={"cyan"}
        aria-label="Loading Spinner"
        size={20}
        data-testid="spinner"
      />
    </div>
  );
};

export default Loader;

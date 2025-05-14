import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.container}>
      <p className={s.greeting}>
        Hello, <span className={s.greetingName}>{user.name}</span>!
      </p>
      <button
        className={s.button}
        onClick={() => dispatch(logoutThunk())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

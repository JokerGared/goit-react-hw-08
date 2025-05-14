import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.heading}>Your Contacts, Always at Hand!</h2>
      <p className={s.text}>
        Save, search, and manage your contacts effortlessly — all in one secure
        place.
      </p>
    </div>
  );
};

export default HomePage;

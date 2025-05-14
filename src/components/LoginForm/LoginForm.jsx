import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const addLogInSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .email("Invalid email format")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const handleLoginForm = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={addLogInSchema}
      initialValues={initialValues}
      onSubmit={handleLoginForm}
    >
      <Form className={s.contactFormContainer}>
        <h3 className={s.heading}>Log In</h3>
        <label className={s.label} htmlFor="email">
          Enter Your Email!
        </label>
        <Field
          className={s.contactFormInput}
          placeholder="Email@email.com"
          type="email"
          name="email"
        />
        <ErrorMessage className={s.errorEmail} name="email" component="span" />
        <label className={s.label} htmlFor="password">
          Enter Your Password!
        </label>
        <Field
          placeholder="password"
          className={s.contactFormInput}
          type="password"
          name="password"
        />
        <ErrorMessage
          className={s.errorPassword}
          name="password"
          component="span"
        />
        <Link className={s.loginLink} to="/register">
          No account yet? Sign up
        </Link>
        <button className={s.submitBtn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};
export default LoginForm;

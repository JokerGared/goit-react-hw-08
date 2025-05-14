import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const addRegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
    name: "",
    email: "",
    password: "",
  };
  const handleRegisterForm = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={addRegisterSchema}
      initialValues={initialValues}
      onSubmit={handleRegisterForm}
    >
      <Form className={s.contactFormContainer}>
        <h3 className={s.heading}>Registration</h3>
        <label className={s.label} htmlFor="name">
          Enter Your Name!
        </label>
        <Field
          className={s.contactFormInput}
          placeholder="Username"
          type="text"
          name="name"
        />
        <ErrorMessage className={s.errorName} name="name" component="span" />
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
        <Link className={s.loginLink} to="/login">
          Already have an account? Sign in
        </Link>
        <button className={s.submitBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

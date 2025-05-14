import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./EditContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContactInfo, selectModalId } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";
import { editContact } from "../../redux/contacts/operations";

const EditContactForm = () => {
  const contactInfo = useSelector(selectContactInfo);
  const dispatch = useDispatch();
  const contactId = useSelector(selectModalId);

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmitForm = (values, actions) => {
    dispatch(editContact({ values, contactId }));
    dispatch(closeModal());
    actions.resetForm();
  };

  const handleCancelEditing = () => {
    dispatch(closeModal());
  };

  return (
    <Formik
      validationSchema={addContactSchema}
      initialValues={contactInfo}
      onSubmit={handleSubmitForm}
    >
      {({ resetForm }) => (
        <Form className={s.contactFormContainer}>
          <label className={s.label} htmlFor="name">
            Edit name
          </label>
          <Field
            className={s.contactFormInput}
            placeholder="Username"
            type="text"
            name="name"
          />
          <ErrorMessage className={s.errorName} name="name" component="span" />
          <label className={s.label} htmlFor="number">
            Edit number
          </label>
          <Field
            placeholder="Phone number"
            className={s.contactFormInput}
            type="tel"
            name="number"
          />
          <ErrorMessage
            className={s.errorNumber}
            name="number"
            component="span"
          />
          <div className={s.buttonContainer}>
            <button className={s.submitBtn} type="submit">
              Edit
            </button>
            <button
              onClick={handleCancelEditing}
              className={s.submitBtn}
              type="button"
            >
              Cancel
            </button>
            <button onClick={resetForm} className={s.submitBtn} type="button">
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditContactForm;

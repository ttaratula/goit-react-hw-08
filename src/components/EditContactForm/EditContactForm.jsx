import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations.js";
// import { addContact } from "../../redux/contacts/operations.js";
import toast from "react-hot-toast";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { setCurrentContact } from "../../redux/contacts/slice";

export default function EditContactForm() {
  const prevData = useSelector(selectCurrentContact);

  const initialValues = {
    name: prevData.name,
    number: prevData.number,
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(7, "Number too short! Min. 7 symbols")
      .max(50, "Too long!")
      .required("Required!"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(editContact({ id: prevData.id, ...values }))
      .unwrap()
      .then(() => {
        toast.success("Contact updated");
        dispatch(setCurrentContact(null));
      })
      .catch(() => toast.error("Error while trying to update contact"));
  };

  const handleExit = () => {
    dispatch(setCurrentContact(null));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name:</label>
        <Field type="text" name="name" className={css.name} id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberFieldId}>Number:</label>
        <Field
          type="text"
          name="number"
          className={css.number}
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit" className={css.button}>
          Save
        </button>
        <button type="button" className={css.button} onClick={handleExit}>
          Exit
        </button>
      </Form>
    </Formik>
  );
}
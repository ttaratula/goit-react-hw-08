import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import clsx from "clsx";

import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label className={css.label} htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.submitBtn}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};
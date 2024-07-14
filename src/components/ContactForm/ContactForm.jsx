import css from "./ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, action) => {
    onAdd({
      ...values,
      id: nanoid(5),
    });
    action.resetForm();
  };

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(30, "Too long!")
      .required("Required")
      .trim(),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required")
      .trim(),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapInput}>
          <label htmlFor={nameId}>Name</label>
          <Field
            type="text"
            name="name"
            className={css.form_input}
            id={nameId}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.wrapInput}>
          <label htmlFor={numberId}>Phone</label>
          <Field
            className={css.form_input}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

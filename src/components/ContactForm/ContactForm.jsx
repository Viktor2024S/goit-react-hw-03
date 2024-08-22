import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import { useId } from "react";

export default function ContactForm({ addContact }) {
  const id = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be 50 characters or less")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.fieldContainer}>
            <label htmlFor={`${id}-name`}>Name</label>
            <Field
              id={`${id}-name`}
              name="name"
              type="text"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldContainer}>
            <label htmlFor={`${id}-number`}>Number</label>
            <Field
              id={`${id}-number`}
              name="number"
              type="text"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.button}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

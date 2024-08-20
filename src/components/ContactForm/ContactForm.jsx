import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import { useId } from "react";

export default function ContactForm({ addContact }) {
  const id = useId();
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be 50 characters or less")
        .required("Required"),
      number: Yup.string()
        .min(3, "Number must be at least 3 characters")
        .max(50, "Number must be 50 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      addContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.fieldContainer}>
        <label htmlFor={`${id}-name`}>Name</label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={styles.input}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.error}>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className={styles.fieldContainer}>
        <label htmlFor={`${id}-number`}>Number</label>
        <input
          id={`${id}-number`}
          name="number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
          className={styles.input}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.error}>{formik.errors.number}</div>
        ) : null}
      </div>

      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
}

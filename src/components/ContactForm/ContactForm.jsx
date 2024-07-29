import { addContact } from "../../redux/contactsOps";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };
  const nameId = nanoid();
  const numberId = nanoid();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

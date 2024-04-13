import { Field, Form, Formik } from "formik";

const ContactForm = () => {
  return (
    <>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Field type="text" name="username" />
          <Field type="text" name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;

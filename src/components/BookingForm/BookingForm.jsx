import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Css from "./BookingForm.module.css";

const BookingSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string().max(300, "Comment too long"),
});

export default function BookingForm({ camperName }) {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Booking submitted:", values);

    toast.success(`Reservation for ${camperName} sent successfully!`, {
      theme: "colored",
    });

    resetForm();
  };

  return (
    <div>
      <h2 className={Css.title}>Book your trip</h2>
      <p className={Css.subtitle}>
        We will contact you to confirm your reservation for {camperName}.
      </p>

      <Formik
        initialValues={{ name: "", email: "", date: "", comment: "" }}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={Css.form}>
          <div>
            <Field
              className={Css.input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" className={Css.error} />
          </div>

          <div>
            <Field
              className={Css.input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" className={Css.error} />
          </div>

          <div>
            <Field className={Css.input} type="date" name="date" />
            <ErrorMessage name="date" component="div" className={Css.error} />
          </div>

          <div>
            <Field
              as="textarea"
              className={Css.textarea}
              name="comment"
              placeholder="Comment"
              rows={4}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={Css.error}
            />
          </div>

          <button type="submit" className={Css.submitBtn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}

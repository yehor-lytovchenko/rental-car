"use client";
import { useFormDraftStore } from "@/lib/store/formStore";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import css from "./CarForm.module.css";

const validationSchema = Yup.object({
  userName: Yup.string()
    .min(2, "The name must contain at least 2 characters.")
    .required("Name is required"),
  userEmail: Yup.string()
    .email("Enter a valid email address.")
    .required("Email is required"),
  userText: Yup.string().max(500, "Comments should not exceed 500 characters."),
});

const CarForm = () => {
  const { draft, setDraft, clearDraft } = useFormDraftStore();

  const initialValues = {
    userName: draft.userName || "",
    userEmail: draft.userEmail || "",
    userText: draft.userText || "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    clearDraft();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ setFieldValue }) => {
        const handleFieldChange = (fieldName: string, value: string) => {
          setFieldValue(fieldName, value);
          setDraft({
            ...draft,
            [fieldName]: value,
          });
        };

        return (
          <Form className={css.bookingForm}>
            <h2 className={css.title}>Book your car now</h2>
            <p className={css.descr}>
              Stay connected! We are always ready to help you.
            </p>
            <div>
              <Field
                className={css.input}
                name="userName"
                type="text"
                placeholder="Name*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFieldChange("userName", e.target.value)
                }
              />
              <ErrorMessage
                name="userName"
                component="div"
                className={css.error}
              />
            </div>

            <div>
              <Field
                className={css.input}
                name="userEmail"
                type="email"
                placeholder="Email*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFieldChange("userEmail", e.target.value)
                }
              />
              <ErrorMessage
                name="userEmail"
                component="div"
                className={css.error}
              />
            </div>

            <BookingDatePicker />

            <div>
              <Field
                className={css.inputArea}
                as="textarea"
                name="userText"
                placeholder="Comment"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleFieldChange("userText", e.target.value)
                }
              />
              <ErrorMessage
                name="userText"
                component="div"
                className={css.error}
              />
            </div>

            <button type="submit" className={css.button}>
              Send
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CarForm;

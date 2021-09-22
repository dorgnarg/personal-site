import type { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormField = styled(Field)`
  width: calc(100% - 24px);
  padding: 12px;
  font-size: 0.875rem;
  font-family: 'fengardo-neue, Arial, Helvetica, sans-serif';
  background-color: black;
  color: white;
  border: 1px solid red;
`;

const Label = styled('label')`
  font-size: 0.875rem;
  position: absolute;
  top: 15px;
  left: 6px;
  background-color: black;
  padding-left: 6px;
`;

const Req = styled('span')`
  color: red;
`;

const Button = styled('button')`
  position: relative;
  z-index: 1;
  font-size: 0.75rem;
  border: 5px solid black;
  outline: 1px solid red;
  background-color: transparent;
  color: white;
  &:hover {
    color: black;
    background-color: red;
    cursor: pointer;
  }
`;

const encode = (data: object) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm: FC = () => (
  <Formik
    enableReinitialize
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={
      Yup
        .object()
        .shape({
          name: Yup
            .string()
            .max(255)
            .required('Name is required'),
          email: Yup
            .string()
            .email('Must by a valid email')
            .max(255)
            .required('Email is required'),
          message: Yup
            .string()
            .max(5000)
            .required('A message is required'),
        })
    }
    onSubmit={async (values, {
      resetForm,
      setErrors,
      setStatus,
      setSubmitting,
    }) => {
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
        resetForm();
        setSubmitting(false);
        setStatus({ success: true });
      } catch (e) {
        setSubmitting(false);
        setStatus({ success: false });
        setErrors({ message: e.message });
      }
    }}
  >
    {({
      isSubmitting,
    }) => (
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="form"
        name="contact"
        data-netlify-honeypot="bot-field"
        data-netlify
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: 600, marginBottom: '1rem' }}>
          <Label htmlFor="name">Name<Req>*</Req></Label><br />
          <FormField
            type="text"
            name="name"
            id="name"
          />
          <ErrorMessage
            component="div"
            name="name"
            render={(msg) => (
              <span
                style={{
                  color: 'red',
                  fontSize: '0.75rem'
                }}
              >
                {msg}
              </span>
            )}
          />
        </div>

        <div style={{ position: 'relative', width: '100%', maxWidth: 600, marginBottom: '1rem' }}>
          <Label htmlFor="email">Email<Req>*</Req></Label><br />
          <FormField
            type="email"
            name="email"
            id="email"
          />
          <ErrorMessage
            component="div"
            name="email"
            render={(msg) => (
              <span
                style={{
                  color: 'red',
                  fontSize: '0.75rem'
                }}
              >
                {msg}
              </span>
            )}
          />
        </div>

        <div style={{ position: 'relative',  width: '100%', paddingBottom: 48, maxWidth: 600 }}>
          <Label htmlFor="message">Message<Req>*</Req></Label><br />
          <FormField
            component="textarea"
            name="message"
            id="message"
            rows={15}
          />
          <ErrorMessage
            component="div"
            name="message"
            render={(msg) => (
              <span
                style={{
                  color: 'red',
                  fontSize: '0.75rem'
                }}
              >
                {msg}
              </span>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          style={{ width: '100%', maxWidth: 600, padding: 12 }}
        >
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;

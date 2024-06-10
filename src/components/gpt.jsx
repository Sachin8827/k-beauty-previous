import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StepOne = ({ onNext }) => (
  <div>
    <h2>Step 1</h2>
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onNext(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Next
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const StepTwo = ({ onPrev, onSubmit, formData }) => (
  <div>
    <h2>Step 2</h2>
    <Formik
      initialValues={{ password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password must be at least 6 characters long';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit({ ...formData, ...values });
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="button" onClick={onPrev}>
            Previous
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData(data);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div>
      {step === 1 && <StepOne onNext={nextStep} />}
      {step === 2 && <StepTwo onPrev={prevStep} onSubmit={submitForm} formData={formData} />}
    </div>
  );
};

export default MultiStepForm;

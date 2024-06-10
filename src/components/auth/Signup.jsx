
import React from "react";
import FormInputGroup from "./../Common/FormInputGroup";
 import { ErrorMessage } from "formik";
import "../../assets/Css/Signup.css";

function SignUp({user, handleChange}) {
  return (
    <>
      <FormInputGroup
        label=''
        name='email'
        placeholder='email'
        type='text'
        value={user.email}
        className='emailInput'
        handleChange={handleChange}
      />
      <ErrorMessage name="email" component="div" className="emailerror" />

      <FormInputGroup
        label=''
        name='password'
        placeholder='password'
        type='password'
        className='passInput'
        value={user.password}
        handleChange={handleChange}
      />
      <ErrorMessage name="password" component="div" className="emailerror"/>
    </>
  );
}

export default SignUp;

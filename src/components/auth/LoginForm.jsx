import { Formik, Form, Field, ErrorMessage } from "formik";
import '../../assets/Css/login.css'
import { validateEmail } from "../../Validations/Validations";
function LoginForm({handleSubmit, navigate}){
    return <>
        <div className='login-form'>
          <p>LOGIN</p>
          <p>Please enter your email and password</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              validateEmail(values, errors)
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='email'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='errormsg'
                />

                <div className='pass'>
                  <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='password'
                  />
                  <ErrorMessage
                    name='password'
                    component='span'
                    className='errormsg1'
                  />

                  <div className='forgot'>Forgot Password?</div>
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='submitButton'
                >
                  SUBMIT
                </button>
              </Form>
            )}
          </Formik>
          <p style={{cursor : 'pointer'}}>
            Don't have an account? <a onClick={() => navigate('/signup')}>Create one</a>
          </p>
        </div>

    </>
}
export default LoginForm;
import { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { userLoginType, userSignUpType } from "../types/types"
import { loginInitialValues, signUpInitialValues } from "../utils/utils"
import image from "../assets/android-chrome-192x192.png"

const Login = () => {
  const apiKey = import.meta.env.VITE_API_KEY

  const [signUp, setSignUp] = useState(false)

  const [userMessage, setUserMessage] = useState(undefined);
  
  const signupSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, 'First Name is Too Short!')
    .max(50, 'First Name is Too Long!')
    .required('First Name is Required'),
    lastName: Yup.string()
      .min(2, 'Last Name is Too Short!')
      .max(50, 'Last Name is Too Long!') 
      .required('Last Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string()
    .min(2, 'Password is Too Short!')
    .max(50, 'Password is Too Long!') 
    .required('Password is Required')
  })

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string()
    .min(2, 'Password is Too Short!')
    .max(50, 'Password is Too Long!') 
    .required('Password is Required')
  })

  const setSignup = () => {
    setSignUp(prevState => !prevState);
  }

  const userSignUp = async (values: userSignUpType) => {
    const res = await axios.post(`${apiKey}authentication/signup`, values)
    setUserMessage(res.data)
  }

  const userLogin = async (values: userLoginType) => {
    const res = await axios.post(`${apiKey}authentication/login`, values)
    setUserMessage(res.data)
  }

  return (
    <section className="login-section">
      <img src={image} alt="logo" className="logo" />
      <h1>{signUp ? "Create " : "Login to your "}account</h1>
      <p>{signUp ? "Already have an account?" : "Don't have an account yet?" } <a onClick={setSignup}><span className="link">{signUp ? "Login" : "Signup"}</span></a></p>
      {userMessage ? 
      <div className="error-message">
        <p>{userMessage}</p>
      </div> :
      <div></div>
      }
      {signUp ? 
        <Formik
          initialValues={signUpInitialValues}
          enableReinitialize={true}
          validationSchema={signupSchema}
          onSubmit={values => userSignUp(values)}
        >
        {({ errors, touched }) => (
          <Form className="form-area">
            <Field className="form-element" name="firstName" placeholder="First Name" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field className="form-element" name="lastName" placeholder="Last Name" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field className="form-element" name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field className="form-element" name="password" type="password" placeholder="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit" className="primary" disabled={Object.keys(errors).length > 0}>Sign Up</button>
          </Form>
        )}
        </Formik> : 
        <Formik
        initialValues={loginInitialValues}
        enableReinitialize={true}
        validationSchema={loginSchema}
        onSubmit={values => userLogin(values)}
      >
        {({ errors, touched }) => (
          <Form className="form-area">
            <Field className="form-element" name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field className="form-element" name="password" type="password" placeholder="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit" className="primary" disabled={Object.keys(errors).length > 0}>Login In</button>
          </Form>
        )}
        </Formik>
      }
    </section>
  )
}

export default Login
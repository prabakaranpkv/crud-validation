import { Formik, Form } from "formik";
import TextField from "./TextField";
import "../../App.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function SignIn() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 10 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 10 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="form">
          <h1 className="my-4 font-weight-bold-display-4">SignUp</h1>

          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <Link to="/">
              <button className="btn btn-dark mt-3" type="submit">
                Register
              </button>
            </Link>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

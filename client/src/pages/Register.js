import { useState, useEffect } from "react";
import { Alert, FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

// global context and useNavigate later

import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
} from "../assets/wrappers/RegisterPage.js";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Register Successful! Redirecting...",
      });
    }

    console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <CardWrapper>
      <form className="form" onSubmit={onSubmit}>
        <CardHeader>
          <CardHeading>{values.isMember ? "Login" : "Register"}</CardHeading>
          {showAlert && <Alert />}
        </CardHeader>

        <CardBody>
          <CardFieldset>
            {!values.isMember && (
              <CardInput
                placeholder="Username"
                type="text"
                required
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            )}
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="E-mail"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          {/* Future Signup with social media Buttons
        <CardFieldset>
          <CardOptionsNote>Or sign up with</CardOptionsNote>

          <CardOptions>
            <CardOptionsItem>
              <CardIcon className="fab fa-google" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-twitter" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-facebook" big />
            </CardOptionsItem>
          </CardOptions>
        </CardFieldset>
*/}
          <CardFieldset>
            <CardButton type="submit">
              {values.isMember ? "Login" : "Register"}
            </CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardButton
              className="switch"
              type="button"
              onClick={toggleMember}
              disabled={isLoading}
            >
              {values.isMember
                ? "Create an Account"
                : "I already have an account"}
            </CardButton>
          </CardFieldset>
        </CardBody>
      </form>
    </CardWrapper>
  );
};

export default Register;

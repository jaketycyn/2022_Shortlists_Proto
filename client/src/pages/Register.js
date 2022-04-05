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
    //   <Wrapper className="full-page">
    //     <form className="form" onSubmit={onSubmit}>
    //       <Logo />
    //       <h3>{values.isMember ? "Login" : "Register"}</h3>
    //       {showAlert && <Alert />}
    //       {!values.isMember && (
    //         <FormRow
    //           type="text"
    //           name="name"
    //           value={values.name}
    //           handleChange={handleChange}
    //         />
    //       )}
    //       {/* email input */}
    //       <FormRow
    //         type="email"
    //         name="email"
    //         value={values.email}
    //         handleChange={handleChange}
    //       />
    //       {/* password input */}
    //       <FormRow
    //         type="password"
    //         name="password"
    //         value={values.password}
    //         handleChange={handleChange}
    //       />
    //       <button type="submit" className="btn btn-block">
    //         Submit
    //       </button>
    //       <p>
    //         {values.isMember ? "Not a member yet" : "Already a member?"}
    //         <button
    //           type="button"
    //           onClick={toggleMember}
    //           className="member-btn"
    //           disabled={isLoading}
    //         >
    //           {values.isMember ? "Register" : "Login"}
    //         </button>
    //       </p>
    //     </form>
    //   </Wrapper>
    // );

    <CardWrapper>
      <CardHeader>
        <CardHeading>Sign in</CardHeading>
      </CardHeader>

      <CardBody>
        <CardFieldset>
          <CardInput placeholder="Username" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="E-mail" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="Password" type="password" required />
          <CardIcon className="fa fa-eye" eye small />
        </CardFieldset>

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

        <CardFieldset>
          <CardButton type="button">Sign Up</CardButton>
        </CardFieldset>

        <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default Register;

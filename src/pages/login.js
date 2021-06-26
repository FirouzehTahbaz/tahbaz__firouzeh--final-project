import React, { useState } from "react";
import { PostData } from "../service/PostData";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    apiError: "",
  });

  const formChange = (event) => {
    if (event.target.name === "email") {
      let regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      if (event.target.value === "") {
        setError({
          ...error,
          [event.target.name]: "Email cannot Be Empty",
        });
      } else {
        if (!regEmail.test(event.target.value)) {
          setError({
            ...error,
            [event.target.name]: "Invalid Email",
          });
        } else {
          setError({
            ...error,
            [event.target.name]: "",
          });
        }
      }
    } else if (event.target.name === "password") {
      if (event.target.value === "") {
        setError({
          ...error,
          [event.target.name]: "Password cannot Be Empty",
        });
      } else {
        setError({
          ...error,
          [event.target.name]: "",
        });
      }
    } else
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
  };

  const submitData = (e) => {
    e.preventDefault();

    PostData("/POST/auth", data).then((result) => {
      let responseJSON = result;
      if (responseJSON.success === false) {
        setError({
          ...error,
          apiError: "Please Check your  Email or Credential",
        });
      }
      if (responseJSON.success === true) {
        localStorage.setItem("token", responseJSON.data.token);
        history.push("/contact-list");
      } else {
        if (responseJSON.status === 404) {
          this.setState({ errMsg: responseJSON.message });
        } else {
          this.setState({ errMsg: "Something Went Wrong !" });
        }
      }
    });
  };

  return (
    <div>
      <div class="bgimg-1">
        <div class="caption">
          <span class="border">Login</span>
          <div className="login__wrapper">
            <div className="email__wrapper">
              <label>Email </label>
              <input name="email" onChange={(e) => formChange(e)}></input>
              <span className="error">{error.email}</span>
            </div>
            <div className="password__wrapper">
              <label>Password </label>
              <input
                name="password"
                type="password"
                onChange={(e) => formChange(e)}
              ></input>
              <span className="error">{error.password}</span>
            </div>
            <div className="submit__btn">
              <button className="button" onClick={(e) => submitData(e)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

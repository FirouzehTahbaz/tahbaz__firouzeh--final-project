import React, { useState } from "react";
import { PostData } from "../service/PostData";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [data, setData] = useState({
    Fname: "",
    Lname: "",
    email: "",
  });
  const [error, setError] = useState({
    Fname: "",
    Lname: "",
    email: "",
    apiError: "",
  });

  const formChange = (event) => {
    if (event.target.name === "Fname") {
      if (event.target.value === "") {
        setError({
          ...error,
          [event.target.name]: "First Name cannot Be Empty",
        });
      } else {
        setError({
          ...error,
          [event.target.name]: "",
        });
      }
    } else if (event.target.name === "Lname") {
      if (event.target.value === "") {
        setError({
          ...error,
          [event.target.name]: "Last Name cannot Be Empty",
        });
      } else {
        setError({
          ...error,
          [event.target.name]: "",
        });
      }
    } else if (event.target.name === "email") {
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
    }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();

    PostData("/contact_form/entries", data).then((result) => {
      let responseJSON = result;
      if (responseJSON.success === false) {
        setError({
          ...error,
          apiError: "Invalid Token",
        });
      }
      if (responseJSON.success === true) {
        history.push("/login");
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
    <>
      <div className="row">
        <div className="rightcolumn__resume">
          <p>
            <h4>Firouzeh Tahbaz</h4>
            <br />
            Address: 828 Sutton Mills Court, Apt. 806
            <br />
            Kingston, Ontario
            <br />
            K7P 2S9
            <br />
            Phone:343 333 7470
            <br />
            Email: firouzeh@firouzehtahbaz.com
            <br />
          </p>
        </div>

        <div className="leftcolumn__resume">
          <p>Send me a message:</p>
          <table id="table1">
            <tr>
              <td>First Name:</td>
              <td>
                <input
                  type="text"
                  id="first"
                  name="Fname"
                  onChange={(e) => formChange(e)}
                />
              </td>
              <td>
                <div id="errFirst">{error.Fname}</div>
              </td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>
                <input
                  type="text"
                  id="last"
                  name="Lname"
                  onChange={(e) => formChange(e)}
                />
              </td>
              <td>
                <div id="errLast">{error.Lname}</div>
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => formChange(e)}
                />
              </td>
              <td>
                <div id="errEmail">{error.email}</div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input
                  type="button"
                  id="create"
                  value="Submit"
                  onClick={(e) => submitData(e)}
                />
              </td>
              <td>
                <div id="errFinal">{error.apiError}</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contact;

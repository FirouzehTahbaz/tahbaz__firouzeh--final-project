import React, { useState } from "react";
import { PostData } from "../service/PostData";
import { useHistory } from "react-router-dom";

const ContactList = () => {
  const history = useHistory();
  const [data, setData] = useState({});

  useEffect(() => {
    let x = localStorage.getItem("token");

    PostData("/POST/auth", data, x).then((result) => {
      let responseJSON = result;
      if (responseJSON.success === false) {
        setError({
          ...error,
          apiError: "Please Check your  Email or Credential",
        });
      }
      if (responseJSON.success === true) {
        setData(responseJSON.data.data);
      } else {
        if (responseJSON.status === 404) {
          this.setState({ errMsg: responseJSON.message });
        } else {
          this.setState({ errMsg: "Something Went Wrong !" });
        }
      }
    });
  }, []);

  
  return (
    <div>
      <div class="bgimg-1">
        <div class="caption">
          <span class="border">Contact List</span>

          {data.map((el, key) => {
            <div className="individual__wrapper" key={key}>
              <div className="individual__data">
                <span>name :</span>
                <span>{el.name}</span>
              </div>
              <div className="individual__data">
                <span>Email :</span>
                <span>{el.email}</span>
              </div>
              <div className="individual__data">
                <span>Phone No :</span>
                <span>{el.Phone}</span>
              </div>
              <div className="individual__data">
                <span>Content :</span>
                <span>{el.content}</span>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactList;

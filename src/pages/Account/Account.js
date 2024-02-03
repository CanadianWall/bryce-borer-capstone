import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

const baseUrl = "http://localhost:8080";
const accountURL = `${baseUrl}/user`;

function Account() {
  const [userInfo, setUserInfo] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleChangeName = (event) => {
    setUserInfo(prevState => ({
      ...prevState.name,
      name: event.target.value
    }))
  };

  const handleChangeEmail = (event) => {
    setUserInfo(prevState => ({
      ...prevState.email,
      email: event.target.value
    }))
  };

  useEffect(() => {
    axios.get(accountURL)
      .then((res) => {
        setUserInfo(res.data[0])
        setHasLoaded(true)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleAccountSubmit() {
    axios.patch(accountURL, userInfo)
    .then((res) => {
      console.log("patch confirmed!")
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })
  }



  if (!hasLoaded) {
    return null;
  } else {
    return (

      <main>
        <h1>Welcome {userInfo.name}!</h1>
        <form className="form" onSubmit={() => (handleAccountSubmit(accountURL))}>
          <label className="form--title">Name</label>
          <input
            className="form__input"
            placeholder={userInfo.name}
            name="itemQuantity"
            htmlform="itemQuantity"
            value={userInfo.name}
            onChange={handleChangeName}
          />
          <br/>
          <label className="form--title">Email</label>
          <input
            className="form__input"
            placeholder={userInfo.email}
            name="itemQuantity"
            htmlform="itemQuantity"
            value={userInfo.email}
            onChange={handleChangeEmail}
          />
          {/* <span
            className={`errorMsg ${error.qtyError ? "errorMsg--invalid-input" : ""
              }`}
          >
            <img src={ErrorIcon} alt="Error Icon" />
            This field must be a non-zero integer
          </span> */}
          <br/>
          <button className="form--save">Update</button>
        </form>
      </main>

    );
  }
}

export default Account;
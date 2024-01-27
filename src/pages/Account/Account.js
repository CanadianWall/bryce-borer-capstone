import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

const baseUrl = "http://localhost:8080";
const accountUrl = `${baseUrl}/account`;

function Account() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Here grab the token from sessionStorage and then make an axios request to profileUrl endpoint.
    // Remember to include the token in Authorization header
    const token = sessionStorage.getItem('authToken')

    axios.get(accountUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setIsLoading(false)
      setUserInfo(response.data)
    });
  }, []);

  return (
  
  <main>
    <h1>Welcome {userInfo.name}!</h1>
  </main>
  
  );
}

export default Account;
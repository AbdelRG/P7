import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";
import React, { useState } from "react";
import React, { useEffect } from "react";
import getAllUsers from "../apiCall/getAllUsers";
import { InputGroup, Form } from "react-bootstrap";
import evtSource from "../apiCall/ssEvent";
import getUser from "../apiCall/getUser";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(usersArray);
  const navigate = useNavigate();

  useEffect(() => {
    user();
  });

  const user = async () => {
    await getUser().then((res) => {
      if (res.user.role == 0) {
        navigate("/postsPage");
      }
    });
  };

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsersArray(res);
    });
  }, []);

  evtSource.addEventListener("deleteUser", async (e) => {
    await getAllUsers().then((res) => {
      setUsersArray(res);
    });

    const newData = JSON.parse(e.data);

    setUsersArray(usersArray.filter((user) => user.id !== newData.id));
  });

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = usersArray.filter((user) => {
        return user.pseudo.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(usersArray);
    }

    setName(keyword);
  };

  return (
    <>
      <NavigationBar />
      <div className="userPageContainer">
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Rechercher"
          />
        </InputGroup>

        {foundUsers && name.length > 0
          ? foundUsers.map((element, i) => (
              <div className="containerUser" key={i}>
                <UserInfo user={element} />
              </div>
            ))
          : usersArray.map((element, i) => (
              <div className="containerUser" key={i}>
                <UserInfo user={element} />
              </div>
            ))}
      </div>
      <Footer />
    </>
  );
};

export default UsersPage;

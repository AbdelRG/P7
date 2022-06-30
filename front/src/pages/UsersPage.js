import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";
import React, { useState } from "react";
import React, { useEffect } from "react";
import getAllUsers from "../apiCall/getAllUsers";
import { InputGroup, Form } from "react-bootstrap";
import evtSource from "../apiCall/ssEvent";

const UsersPage = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(usersArray);

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

    const newArray = [newData, ...usersArray];

    setUsersArray(newArray);
  });

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = usersArray.filter((user) => {
        return user.pseudo.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(usersArray);
      // If the text field is empty, show all users
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

        {foundUsers && foundUsers.length > 0
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//let ID = 2;

function UserForm() {
  let params = useParams();
  const [userName, setUserName] = useState<string>();
  const [userAge, setUserAge] = useState<number>();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  },[]);

  const getUser = (userId : string) => {
    const url =
      "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.error("Success", data);
        setUserName(data.name);
        setUserAge(data.age);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // event of form
    e.preventDefault();
    console.log("handleSubmit", userName);
    console.log("handleSubmit:", userAge);
    if (params.id) {
      updateUser(userName, userAge);
      console.log("updateUser", "updateUser");
    } else {
      createUser(userName, userAge);
      console.log("createUser", "createUser");
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempvalue = e.target.value;
    console.log(e.target.value);
    setUserAge(parseInt(tempvalue));
  };

  const createUser = (name: string | undefined, age: number | undefined) => {
    console.log(name, age);
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
    const data = {
      name: name,
      age: age,
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateUser = (name: string | undefined, age: number | undefined) => {
    console.log(name, age);
    const url =
      "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + params.id;
    const data = {
      name: name,
      age: age,
    };

    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        defaultValue={userName}
        onChange={handleName}
      />
      <input
        type="number"
        name="userAge"
        defaultValue={userAge}
        onChange={handleAge}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UserForm;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function WebUserForm() {
  let params = useParams();
  const [userName, setUserName] = useState<string>();
  const [userName2, setUserName2] = useState<string>();
  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, []);
  const getUser = (userId: string) => {
    const url =
      "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.error("Success", data);
        setUserName(data.name);
        setUserName2(data.name2);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (params.id) {
      console.log("handleSubmit", "Update");
      upDateUser(userName, userName2);
    } else {
      console.log("handleSubmit", "Create");
      createUser(userName, userName2);
    }
  };
  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);

  };
  const handleChangeUserName2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName2(e.target.value);

  };
  const createUser = (name: string | undefined, name2: string | undefined) => {
    console.log(name, name2);
    const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments";
    const data = {
      name: name,
      name2: name2,
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

  const upDateUser = (name: string | undefined, name2: string | undefined) => {
    console.log(name, name2);
    const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments/" + params.id;
    const data = {
      name: name,
      name2: name2,
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
    // <form onSubmit={handleSubmit}>
    //     <input type="text" placeholder="Name1"
    //         defaultValue={userName}
    //         onChange={handleChangeUserName}

    //     />
    //     <input type="text" placeholder="Name2"
    //         defaultValue={userName2}
    //         onChange={handleChangeUserName2}

    //     />

    //     <button type="submit">Submit</button>

    // </form>
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <fieldset >
        <legend>ONEPIECE</legend>
        <div className="mb-3">

          <input type="text" id="disabledTextInput" className="form-control" placeholder="Nhập Name1"
            defaultValue={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div className="mb-3">

          <input type="text" id="disabledTextInput" className="form-control" placeholder="Nhập Name2"
            defaultValue={userName2}
            onChange={handleChangeUserName2}
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled
            />

            Can't check this

          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  );
};
export default WebUserForm;
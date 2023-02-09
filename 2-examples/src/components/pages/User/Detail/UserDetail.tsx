import React, { useEffect, useState } from "react";

type Props = {};
interface IUser {
  name: string;
  age: number;
  id: string | number;
}

function UserDetail(props: Props) {
  const [user, setUser] = useState<IUser | undefined>({
    name: "abc",
    age: 32,
    id: 4,
  });
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/user/4";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(user);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <table className=" table table-bordered border-danger table-primary">
      <thead className="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user?.id}</th>
          <td>{user?.name}</td>
          <td>{user?.age}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserDetail;
import { log } from 'console';

import index from '../example/4-Lifecycle/Countdown';

import React, { useEffect, useState } from "react";

type Props = {};

interface IUser {
    name: string;
    age: number;
    id: string | number;
}

function RenderListUser(props: Props) {
    const [listUser, setListUser] = useState<Array<IUser>>([]);

    useEffect(() => {
        getListUser();
    }, []);
    const getListUser = () => {
        const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/user";
        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setListUser(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    const handleDelete = (id: string | number) => {
        const url =
            "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/user/" + id;
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                getListUser();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        // alert("Delete susscess !!!");
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {listUser.map((item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default  RenderListUser;
import React from 'react'
import index from '../example/4-Lifecycle/Countdown';

type Props = {}

function RenderListUser(props: Props) {
    
    const user = {
        name: "user object",
        age: 18,

    };
    const listUser = [
        {
            name: " Tuan 1",
            age: 18,
        },
        {
            name: " Tuan 2",
            age: 18,
        },
        {
            name: " Tuan 3",
            age: 18,
        },
        {
            name: " Tuan 4",
            age: 18,
        },

    ];






    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>@</td>
                    </tr>
                    {listUser.map((item, index) => (


                        <tr key={index}>
                            <th scope="row">{index + 2}</th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>@</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default RenderListUser

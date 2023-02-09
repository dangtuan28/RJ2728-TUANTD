import { error } from "console";
import React, { useEffect, useState } from "react";

const ID =undefined;

const UserForm: React.FC = () => {
    const [userName, setUserName] = useState<string>();
    const [userAge, setUserAge] = useState<number>();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(ID){
        console.log("handleSubmit","Update" );
        upDateUser(userName, userAge);
        } else{
            console.log("handleSubmit","Create" );
            createUser(userName, userAge); 
        }
    };
    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserName(e.target.value);

    };
    const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempValue = e.target.value;

        console.log(tempValue);
        setUserAge(parseInt(tempValue));

    };
    const createUser = (name: string | undefined, age: number | undefined) => {
        console.log(name, age);
        const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/user";
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
            console.log("Success:",data);
          })
          .catch((error) =>{
            console.error("Error:",error);
          });
        };

    const upDateUser = (name: string | undefined, age: number | undefined) => {
            console.log(name, age); 
            const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/user/" +ID;
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
                console.log("Success:",data);
              })
              .catch((error) =>{
                console.error("Error:",error);
              });
            };    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                defaultValue={userName}
                onChange={handleChangeUserName}

            />
            <input type="number"
                defaultValue={userAge}
                onChange={handleChangeUserAge}

            />

            <button type="submit">Submit</button>
        </form>
    );
};
export default UserForm;
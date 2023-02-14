import React, { useEffect, useState } from "react";

interface IProps {
  setIsLogin: (value : boolean) => void;
}

const Login: React.FC<IProps> = (props) => {
  const { setIsLogin } = props;
  //let params = useParams();
  const [userName, setUserName] = useState<string>();
  const [userPassWord, setUserPassWord] = useState("");

  useEffect(() => {
    /* if (params.id) {
      getUser(params.id);
    } */
  }, []);

  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // event of form
    e.preventDefault();
    console.log("handleSubmit", userName);
    console.log("handleSubmit:", userPassWord);
    //setIsLogin && setIsLogin(true);
    /* if (params.id) {
      updateUser(userName, userAge);
      console.log("updateUser", "updateUser");
    } else {
      createUser(userName, userAge);
      console.log("createUser", "createUser");
    } */
    if (userName === 'aptech' && userPassWord === 'aptech') {
        alert('login thanh cong')
    }else{
        alert('login fail')
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempvalue = e.target.value;
    console.log(e.target.value);
    setUserPassWord(tempvalue);
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
        type="password"
        name="userAge"
        defaultValue={userPassWord}
        onChange={handleAge}
      />
      <button type="submit">Login</button>
      
    </form>
  );
};

export default Login;
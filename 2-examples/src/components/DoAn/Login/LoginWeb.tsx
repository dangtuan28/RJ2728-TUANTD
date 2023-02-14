import React, { useEffect, useState } from "react";

interface IProps {
  setIsLogin: (value: boolean) => void;
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

    if (userName === 'dangtuan' && userPassWord === 'dangtuan') {
      alert('login thanh cong')
      setIsLogin(true);

    } else {
      alert('login fail')
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handleName2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempvalue = e.target.value;
    console.log(e.target.value);
    setUserPassWord(tempvalue);
  };

  return (
    <div className="d-flex justify-content-center pt-5">
      <form
        className="w-50 border border-3 rounded-3 p-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={userName}
            onChange={handleName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            defaultValue={userPassWord}
            onChange={handleName2}
          />
        </div>
        <button type="submit" className="btn btn-danger text-white">
          Submit
        </button>
      </form>
    </div>


  );
};

export default Login;
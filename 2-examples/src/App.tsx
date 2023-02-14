import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import anh from './assets/image/thewalk.avif'
import 'bootstrap/dist/css/bootstrap.min.css'
import JSX from "./components/example/1-JSX";
import Session02 from './components/Homework/Session02/Session02';
import LikeBtn from './components/Homework/Session03/LikeBtn/LikeBtn';
import Countdown from './components/example/4-Lifecycle/Countdown';
import ChangeColor from './components/ex/ChangeColor';
import RenderListUser from './components/ex/RenderListUser';
import RateBtn from './components/Homework/Session03/RateBtn/RateBtn';
import Bai4Tab from './components/Homework/Session03/Bai4Tab/Bai4Tab';
import Accordions from './components/Homework/Session03/Accordions/Accordions';
import UserDetail from './components/pages/User/Detail/UserDetail';
import UserForm from './components/pages/User/Form/UserForm';
import BaseWebRouter from './components/pages/BaseWebRouter';
import Login from './components/pages/Auth/Login';
import UserList from './components/pages/User/List/UserList';
import WebUserList from './components/DoAn/UserWeb/List/WebUserList';
import BaseWeb from './components/DoAn/BaseWeb';
import WebUserForm from './components/DoAn/UserWeb/Form/WebUserForm';
import WebUserDetail from './components/DoAn/UserWeb/Detail/WebUserDetail';
import LoginWeb from './components/DoAn/Login/LoginWeb';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <>
      {/* <JSX /> */}
      {/* <Session02 /> */}
      {/* <LikeBtn /> */}
      {/* < RateBtn /> */}
      {/* <Countdown /> */}
      {/* < ChangeColor /> */}
      {/* < RenderListUser /> */}
     {/* < Bai4Tab /> */}
     {/* <Accordions /> */}
     {/* <UserDetail/> */}
     {/* < UserForm /> */}
     {/* <UserList /> */}
     {/* <BaseWebRouter setIsLogin={function (value: boolean): void {
        throw new Error('Function not implemented.');
      } } /> */}
     {/* {isLogin ? (
      <BaseWebRouter setIsLogin={setIsLogin} />
     ) :(
      <Login setIsLogin={setIsLogin}/>
     )} */}
     {/* <WebUserList /> */}
     {/* <BaseWeb setIsLogin={function (value: boolean): void {
        throw new Error('Function not implemented.');
      } } /> */}
     {/* <WebUserForm /> */}
     {/* <WebUserDetail /> */}
    {isLogin ? (
      <BaseWeb setIsLogin={setIsLogin} />
     ) :(
      <LoginWeb setIsLogin={setIsLogin}/>
     )}
     {/* <LoginWeb setIsLogin={function (value: boolean): void {
        throw new Error('Function not implemented.');
      } } /> */}
    </>
  );
}

export default App;




// function App() {
//   return (
//     <div>
//      <Headers />
//       <div>
       
//           <div className="row my-3 ">
//             <div className="col-12 col-md-3 col-content ">
//               <p>The Drive</p>
//               <hr />
//               <p>The Walk</p>
//               <hr />
//               <p>The Return</p>
//               <hr />
//               <p>The End</p>
//               <hr />
//             </div>
//             <div className="col-12 col-md col-content">
//               <h1>The Walk</h1>
//               <p>The walk to the Pulpit Rock will take you approxxlmately two hours, give or take an hour depending on hte weather condtions and your physical shape</p>
//               <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="" />
//             </div>
//             <div className="col-12 col-md-3 col-content  ">
//             <div className='bg__1'>
//             <h2>What?</h2>
//               <p>The Pulpit Rock is a part of a mountain that looks like a
//                 pulpit.</p>
//               <h2>where?</h2>
//               <p>The Pulpit Rock is in Norway</p>
//               <h2>Price?</h2>
//               <p>The walk is free!</p>
//             </div>
//             </div>
//           </div>

        
//       </div>
//       <footer>
//         <p>footer</p>
//       </footer>
//     </div>

//   );
// }

// export default App;

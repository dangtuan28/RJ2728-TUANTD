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
import Gallery from './components/Homework/Session03/Gallery/Gallery';
import BlockUI1 from './components/Homework/Session02/BlockUI1/BlockUI1';
import BlockUI2 from './components/Homework/Session02/BlockUI2/BlockUI2';
import BlockUI5 from './components/Homework/Session02/BlockUI5/BlockUI5';
import BlockUI3 from './components/Homework/Session02/BlockUI3/BlockUI3';
import { AiOutlineAndroid, AiOutlineApple, AiOutlineGooglePlus } from 'react-icons/ai';
import { FiFacebook } from "react-icons/fi";

import { TfiTwitter, TfiPinterestAlt } from "react-icons/tfi";
import BlockUI7 from './components/Homework/Session02/BlockUI7/BlockUI7';
import BlockUI6 from './components/Homework/Session02/BlockUI6/BlockUI6';
function GreenLargeIcon() {
  return (
    <div className="bg bg_green">
      <div>
        {" "}
        <AiOutlineAndroid />
      </div>
    </div>
  );
}
function RedLargeIcon() {
  return (
    <div className=" bg bg_red">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}
function BlueLargeIcon() {
  return (
    <div className=" bg bg_blue">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}
function YellowLargeIcon() {
  return (
    <div className=" bg bg_yellow">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}
function VioletLargeIcon() {
  return (
    <div className=" bg bg_violet">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <>
      {/* <JSX /> */}
      {/* <Session02 /> */}
      {/* <BlockUI1 title={"Banwidth"} bgTitle="red" percent={20} bgProcess="orange" />
      <BlockUI1 title={"Storage"} bgTitle="cyan" percent={50} bgProcess="orange" />
      <BlockUI1 title={"Users"} bgTitle="green" percent={70} bgProcess="orange" />
      <BlockUI1 title={"Visitors"} bgTitle="yellow"  percent={30} bgProcess="orange" />
      <BlockUI1 title={"Emails"} bgTitle="purple" percent={45} bgProcess="orange" />
      <BlockUI1 title={"Basic"} bgTitle="magenta" percent={80} bgProcess="orange" />
      <BlockUI1 title={"Others"} bgTitle="blue" percent={37} bgProcess="orange" />  */}
      {/* <BlockUI2 img={<GreenLargeIcon />} bgimg="" title="HTML" percent={70} bgProcess="green"/>
      <BlockUI2 img={<RedLargeIcon/>} bgimg="" title="CSS" percent={60} bgProcess="red" />
      <BlockUI2 img={<BlueLargeIcon/>} bgimg="" title="PHP" percent={30} bgProcess="blue" />
      <BlockUI2 img={<YellowLargeIcon/>} bgimg="" title="Java" percent={80} bgProcess="yellow" />
      <BlockUI2 img={<VioletLargeIcon/>} bgimg="" title=".Net" percent={45} bgProcess="violet"/>  */}
      
       {/* <div className="d-flex w-700">
        <BlockUI3 icon={<FiFacebook />} title1="Facebook" title2="5,000,000 Likes" bgProcess="#3399ff" />
        <BlockUI3 icon={<TfiTwitter />} title1="Twitter" title2="40,000 Tweets" bgProcess="#00ccff"/>
        <BlockUI3 icon={<AiOutlineGooglePlus />} title1="Google +" title2="4,60,000 Plus" bgProcess="#ff751a"/>
        <BlockUI3 icon={<TfiPinterestAlt />} title1="Pinterest" title2="34,000 Pins" bgProcess="#ff471a" />
      </div>  */}
        <div className="d-flex">
        <BlockUI5
          img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "210px", maxHeight: "100px" }} /> }
          title1="ROBORT PATISON"
          title2="Developing"
          bgEmail="#ff1a1a"
          bgPhone="#00e64d"
          title3="robott12@gamil.com"
          title4="8665543219"
        />
        <BlockUI5
          img={
            <img
              src={require("./assets/images/anh2.jpg")}
              alt=""
              style={{ maxWidth: "210px", maxHeight: "100px" }}
            />
          }
          title1="JAMES SMITH"
          title2="Designer"
          bgEmail="#4da6ff"
          bgPhone="#0080ff"
          title3="smith12@gamil.com"
          title4="8225543219"
        />
        <BlockUI5
          img={
            <img
              src={require("./assets/images/anh2.jpg")}
              alt=""
              style={{ maxWidth: "210px", maxHeight: "100px" }}
            />
          }
          title1="TOM HANKS"
          title2=" Ui Designer"
          bgEmail="#ff751a"
          bgPhone="#ffcc00"
          title3="peter1@gamil.com"
          title4="8225543929"
        />
        <BlockUI5
          img={
            <img
              src={require("./assets/images/anh2.jpg")}
              alt=""
              style={{ maxWidth: "210px", maxHeight: "100px" }}
            />
          }
          title1="SILVESTER STALIN"
          title2=" Testing"
          bgEmail="#aa80ff"
          bgPhone="#ff80d5"
          title3="point12@gamil.com"
          title4="9937924265"
        />
      </div> 
      {/* <div className="d-flex">
        <BlockUI6 img={<img src={require("./assets/images/1 copy.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="EODEM MODO TYPI" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/2 copy.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="SEQUITUR MUTATONEM" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/3 copy.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="CONSUETUDIUM LECTORUM" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/4 copy.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="PARUM CLARAM" bgButton="#009933"/>
      </div>  */}
       {/* <div className="d-flex">
      <BlockUI7 discount="-39%" img={<img src={require("./assets/images/1 1.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px"}} /> }  price1="$1.422.7" price2="$1,025.5" price3="18% off" title="LG White Front Load Steam Washer" bgProcess="#ffd11a" percent={90} evaluate="10"/>
      <BlockUI7 discount="-13%" img={<img src={require("./assets/images/2.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px" }} /> }  price1="$96" price2="$85" price3="18% off" title="Edifier Powered Bookshelf Speakers" bgProcess="#ffd11a" percent={85} evaluate="15"/>
      <BlockUI7 discount="-37%" img={<img src={require("./assets/images/3.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px" }} /> }  price1="$62.99" price2="$45.9" price3="18% off" title="LG White Front Load Steam Washer" bgProcess="#ffd11a" percent={85} evaluate="20"/>
      <BlockUI7 discount="-37%" img={<img src={require("./assets/images/4.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px" }} /> }  price1="$41.99" price2="$32.99" price3="18% off" title="LG White Front Load Steam Washer" bgProcess="#ffd11a" percent={85} evaluate="22"/>

      </div>  */}
      
      {/* <BlockUI7/> */}
      {/* <LikeBtn /> */}
      {/* < RateBtn /> */}
      {/* <Countdown /> */}
      {/* < ChangeColor /> */}
      {/* < RenderListUser /> */}
     {/* < Bai4Tab /> */}
     {/* <Accordions /> */}
     {/* <Gallery /> */}
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
    {/* {isLogin ? (
      <BaseWeb setIsLogin={setIsLogin} />
     ) :(
      <LoginWeb setIsLogin={setIsLogin}/>
     )} */}
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

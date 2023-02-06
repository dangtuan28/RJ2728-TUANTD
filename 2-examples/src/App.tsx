import React from 'react';
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


function App() {
  return (
    <>
      {/* <JSX /> */}
      {/* <Session02 /> */}
      {/* <LikeBtn /> */}
      {/* < RateBtn /> */}
      {/* <Countdown /> */}
      {/* < ChangeColor /> */}
      {/* < RenderListUser /> */}
     < Bai4Tab />
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

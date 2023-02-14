import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from '../common/Navigation/Navigation';
import WebUserDetail from './UserWeb/Detail/WebUserDetail';
import WebUserForm from './UserWeb/Form/WebUserForm';
import WebUserList from './UserWeb/List/WebUserList';
interface IProps{
   setIsLogin: (value : boolean) => void;
}
function BaseWeb(props: IProps) {
   
   const {setIsLogin}=props;

    return (
       <BrowserRouter>
        <Navigation setIsLogin={setIsLogin} />
       
          <Routes>
             <Route path="/" element={<WebUserList />} />
            
             <Route path="/detail/:id" element={<WebUserDetail />} />
             <Route path="/form" element={<WebUserForm />} />
             <Route path="/form/:id" element={<WebUserForm />} />
             {/* <Route
             path='*'
             element={
               < style={{ padding: '1rem'}}>
                  <p>404 Page not found </p>
                  </
             } */}
          </Routes>
       </BrowserRouter>
    );
 }
 
 export default BaseWeb
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from '../common/Navigation/Navigation';
import UserDetail from './User/Detail/UserDetail';
import UserForm from './User/Form/UserForm';
import UserList from './User/List/UserList'
interface IProps{
   setIsLogin: (value : boolean) => void;
}

function BaseWebRouter(props: IProps) {
   const {setIsLogin}=props;
   return (
      <BrowserRouter>
      <Navigation setIsLogin={setIsLogin} />
         <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/detail" element={<UserDetail />} />
            <Route path="/detail/:id" element={<UserDetail />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/form/:id" element={<UserForm />} />
         </Routes>
      </BrowserRouter>
   );
}

export default BaseWebRouter
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDetail from './User/Detail/UserDetail';
import UserList from './User/List/UserList'


function BaseWebRouter() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/detail' element={<UserDetail />} />
         </Routes>
      </BrowserRouter>
   );
}

export default BaseWebRouter
import React from 'react';
import logo from './logo.svg';
import './App.css';
import anh from './assets/image/1.jpg'
function App() {
  return (
    <div className="App" style = {{backgroundColor: 'blue'}}>
      <h1 style={{
       
        color: "red",
        // backgroundColor: 'red',
        textAlign:'center',
      }}>Tran Dang Tuan</h1>
      <p className='text-success'> Lớp : RJ2728</p>
      <p className='text-success'>Ngày sinh: 28/12/2002</p>

      <img style={{
        width: 300,}} src={anh} />
    </div>
  );
}

export default App;

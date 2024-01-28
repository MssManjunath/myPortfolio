import logo from './logo.svg';
import './App.css';
import Header from './containers/header';
import Nav from "./containers/nav"
import Home from './containers/home';
import SideBar from './containers/sidebar';
import { useState } from 'react';
import Background from "./containers/background";
import Chat from './containers/chat';
import Footer from './containers/footer';

function App() {
  return (
    <div className="App">
      <div className='background'>
      <Background/>
      </div>
      <Header/>
      <Home/>
      <Nav/>
      <Chat/>
    </div>
  );
}

export default App;

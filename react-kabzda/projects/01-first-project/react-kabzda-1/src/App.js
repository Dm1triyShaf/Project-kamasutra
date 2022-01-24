import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class= 'app-wrapper-content'>
        <Routes>
        <Route path='/dialogs' element = {<Dialogs/>} />
        <Route path='/profile' element = {<Profile/>} /> 
        <Route path='/news' element = {<News/>} />
        <Route path='/musik' element = {<Musik/>} />
        <Route path='/settings' element = {<Settings/>} />
        </Routes>
        </div>
        </div>
       </BrowserRouter>
       );

}

export default App;
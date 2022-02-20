import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import Message from './components/Dialogs/Message/Message';
import State, { addPost } from './redux/store';

const App = (props) => {
      return (
            <div className='app-wrapper'>
                  <Header />
                  <Navbar />
                  <div class='app-wrapper-content'>
                        <Routes>
                              <Route path='/dialogs'
                                    element={<Dialogs store={props.store}  />} />
                              <Route path='/profile'
                                    element={<Profile
                                          profilePage={props.state.profilePage}
                                          dispatch={props.dispatch}
                                    />} />
                              <Route path='/news'
                                    element={<News />} />
                              <Route path='/musik'
                                    element={<Musik />} />
                              <Route path='/settings'
                                    element={<Settings />} />
                        </Routes>
                  </div>
            </div>
      );
}
export default App;
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

  return (
    <body>
      <div className='app-wripper'>
        <HeaderContainer />
        <NavBar />
        <div class='app-wrapper-content'>
          <Switch>
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() =>
              <ProfileContainer />} />
            <Route path='/users' render={() =>
              <UsersContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <Login />} />
          </Switch>
        </div>
      </div>
    </body>
  );
}

export default App;

// import { useState } from "react";
import './App.css';
import Profile from './components/Profile/Profile';
import FrendList from './components/FriendList/FriendList';
import userData from './data/userData.json';
import friend from './data/friends.json';

function App() {
  return (
    <>
      <Profile profile={userData} />
      <FrendList friends={friend} />
    </>
  );
}

export default App;

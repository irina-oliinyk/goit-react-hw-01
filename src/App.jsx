// import { useState } from "react";
import './App.css';
import Profile from './components/Profile/Profile';
import FrendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './data/userData.json';
import friend from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <Profile profile={userData} />
      <FrendList friends={friend} />
      <TransactionHistory item={transactions} />
    </>
  );
}

export default App;

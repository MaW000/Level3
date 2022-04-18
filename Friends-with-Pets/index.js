import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from './components/FriendList';
import './index.css';



function App() {
  
  return (
    <FriendList></FriendList>
    
  )  
} 


ReactDOM.render(
    <App />,

  document.getElementById('root')
);


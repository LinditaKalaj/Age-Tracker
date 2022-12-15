import {useState} from 'react';
import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"
import userArray from "./userArray"
import "./index.css"


function App() {
  const [currUsers, setCurrUsers] = useState(userArray);
  function addUserToListHandler(userObj){
    setCurrUsers(prevUsers => {
      const updatedList = [...prevUsers]
      userObj.id = Math.random().toString()
      updatedList.unshift(userObj)
      return updatedList;
    })
    
  }
  return (
    <>
      <AddUser onAddUser={addUserToListHandler}/>
      <UserList currUserList={currUsers}/>
    </>
  );
}

export default App;

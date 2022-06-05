import React, {useState} from 'react';
import Adduser from './components/user/user';
import Userlist from './components/user/userlist';
function App() {

  const [userslist,setUserslist]=useState([]);

  const adduserhandler=(uName,uAge)=>{
    setUserslist((prevUserlist)=>{
        return [...prevUserlist,{name:uName,age:uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      {/* <h2>USer Validation</h2> */}
      <Adduser onAdduser={adduserhandler} />
      <Userlist users={userslist} />

    </div>
  );  
}

export default App;

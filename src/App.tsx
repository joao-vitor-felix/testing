import { useState } from 'react';
import './App.css'
import UserForm from './UserForm'
import UserList from './UserList';

type User = {
  name: string;
  email: string;
}[]

function App() {
  const [users, setUsers] = useState<User>([]);

  const onAddUser = (user: {name: string, email: string}) => setUsers([...users, user])

  return (
    <>
    <UserForm onAddUser={onAddUser}/>
    <UserList users={users}/>
    </>
  )
}

export default App

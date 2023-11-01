import { useState } from 'react';

function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      email
    };

   return onAddUser(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name'/>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email'value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'/>
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;

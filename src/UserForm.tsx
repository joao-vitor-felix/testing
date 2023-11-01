import { FormEvent, useState } from 'react';

type UserFormProps = {
  onAddUser: (users: {name: string, email: string}) => void;
}

function UserForm({ onAddUser }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent) => {
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
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;

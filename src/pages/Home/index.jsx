import './style.css';
import Trash from '../../assets/garbage.svg';
import { useState } from 'react';

function Home() {
  const [users, setUsers] = useState([]);

  return (
    <div className="container_registration">
      <form>
        <h1>User Registration</h1>

        <input placeholder="Name" name="name" type="text" />
        <input placeholder="Age" name="age" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Register</button>
      </form>

      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>E-mail: {user.email}</p>
          <button className="button trash">
            <img src={Trash} alt="Trash icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;

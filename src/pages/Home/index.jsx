import './style.css'
import Trash from '../../assets/garbage.svg'
import { useState, useEffect, useRef } from 'react'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers() {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value

    })

  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)
  }


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container_registration">
      <form>
        <h1>User Registration</h1>
        <input placeholder="Name" name="name" type="text" ref={inputName} />
        <input placeholder="Age" name="age" type="number" ref={inputAge} />
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>Register</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div className="card-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>E-mail:</strong> {user.email}</p>
          </div>
          <button className="btn_delete" onClick={() => deleteUsers(user.id)}>
            <img src={Trash}/>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;

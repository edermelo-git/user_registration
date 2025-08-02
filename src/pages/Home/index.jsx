import './style.css';
import Trash from '../../assets/garbage.svg';

function Home() {

  return (

      <div className="container_registration">
        <form>
          <h1>User Registration</h1>

          <input placeholder="Name"name= "name" type='text'/>
          <input placeholder="Age"age= "age" type='number'/>
          <input placeholder="e-mail"email= "e-mail" type='email'/>
          <button type='button'>Register</button>

        </form>
        
        <div>
          <p>Name:</p>
          <p>Age:</p>
          <p>e-mail:</p>
        </div>
        <button className='burron trash'>
          <img src={Trash} alt="Trash icon" />
        </button>

      </div>
  )
}

export default Home

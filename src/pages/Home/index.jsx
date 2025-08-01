import './style.css';

function Home() {

  return (

      <div className='container_registration'>
        <form>
          <h1>User Registration</h1>

          <input name= "name" type='text'/>
          <input age= "age" type='number'/>
          <input email= "e-mail" type='email'/>
          <button type='button'></button>

        </form>
        
      </div>
  )
}

export default Home

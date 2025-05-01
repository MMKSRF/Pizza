import CreateUser from '../features/user/CreateUser.jsx'
import {useSelector} from "react-redux";
import Button from "./Button.jsx";

function Home() {

    const {username} = useSelector(state => state.user.username);
    console.log( 'home',username);
  return (
    <div className=' sm:my-16 text-center px-4 my-10 '>
      <h1 className='mb-8 text-xl font-semibold md:text-3xl'>
        The best pizza.
        <br />
        <span className='text-sky-500'>
          Straight out of the oven, straight to you.
        </span>
      </h1>

        {
            username === undefined ?
            ( <CreateUser/>)
            :
           ( <Button to='/menu' type='primary'> Continue ordering, {username } </Button>)
        }
    </div>
  )
}

export default Home

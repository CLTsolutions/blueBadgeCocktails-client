import { Link } from 'react-router-dom'
import Logo from '../Pics/transparentlogo.png'

const Navbar = ({ clickLogout, token }) => {

    const logoutButton = () => {
      return localStorage.getItem("token") === null ? ("") : (
      <li onClick={clickLogout} className='text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium'>Logout
      </li>   
      ) 
    }

    return (

        <nav className='bg-white bg-opacity-50 max-width'>
            <ul className="list-none flex items-center justify-end mr-6 space-x-3 h-16">
            <img className='items-left h-16 w-15' src={Logo} alt= 'logo' />
                <li className='text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium'>
                    <Link to="/">Home</Link>
                </li>
                {token
                ? <li className='text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium'>
                    <Link to="/mybar">My Bar</Link>
                </li>
              :<li className='text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium'>
                    <Link to="/auth">Login</Link>
                </li>
              }
                {logoutButton()}
              <input 
                  placeholder='Search' 
                  className='p-1 rounded-md text-left border-2 border-white focus:outline-none focus:ring-1 focus:border-purple-500'>
              </input>
            </ul>     
        </nav>
    );
  };

export default Navbar;
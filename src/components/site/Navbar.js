import { Link } from 'react-router-dom'
import Logo from '../Pics/transparentlogop.png'
import SearchIcon from '@material-ui/icons/Search';

const Navbar = ({ clickLogout, token }) => {

    const logoutButton = () => {
      return localStorage.getItem("token") === null ? ("") : (
      <li onClick={clickLogout} className='text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium'>Logout
      </li>   
      ) 
    }

    return (
      <nav className="bg-white bg-opacity-50 max-width h-20 flex items justify-between">
        <Link to='/home'><img className="items-left h-28 w-28" src={Logo} alt="logo" /></Link>
          <ul className="list-none flex items-center mr-6 space-x-3 ">
            <li className="text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium">
              <Link to="/home">Home</Link>
            </li>
            {token ? (
              <li className="text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium">
                <Link to="/mybar">My Bar</Link>
              </li>
            ) : (
              <li className="text-blue-600 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md font-medium">
                <Link to="/auth">Login</Link>
              </li>
            )}
            {logoutButton()}
            <Link to='/search'><SearchIcon className='text-blue-600' /></Link>
            {/* <input
              placeholder="Search"
              className="p-1 rounded-md text-left border-2 border-white focus:outline-none focus:ring-1 focus:border-purple-500"
            ></input> */}
          </ul>
      </nav>
    );
  };

export default Navbar;
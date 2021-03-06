import { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Button } from 'reactstrap'
import Auth from '../../auth/Auth';
import MyBar from '../profile/MyBar';
import Home from './Home'
// import Box from '@material-ui/core/Box';
// import TextField from '@material-ui/core/TextField'
// import SearchIcon from '@material-ui/icons/Search';

const Navbar = ({ clickLogout, token }) => {

    const logoutButton = () => {
      return localStorage.getItem("token") === null ? ("") : (
      <li onClick={clickLogout} className='text-gray-600 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md font-medium'> Logout
      
      </li>
     
      ) 
    }

    return (

        <nav className='bg-white bg-opacity-50 max-w-6xl flex flex-row h-16'>
          <div>
            {logoutButton()}
              <ul className="list-none max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                {/* <div className='relative flex items-center justify-between h-16'> */}
                {/* <div className='relative flex justify-between h-16 text-right'> */}
                  {/* <div className='absolute inset-y-0 left-0 flex items-center text-gray-50'> */}
                    <li className='text-gray-600 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md font-medium'>
                        <Link to="/">Home</Link>
                    </li>
                    {token
                    ? <li className='text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md font-medium'>
                        <Link to="/mybar">My Bar</Link>
                    </li>
                  :<li className='text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md font-medium'>
                        <Link to="/auth">Login</Link>
                    </li>
                  }
                   
                    
                    {/* <Link to='/' 
                      onClick={clickLogout}
                      className='text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md font-medium'>
                      Logout
                    </Link> */}
                  <input 
                      placeholder='Search' 
                      className='p-1 rounded-md text-left'>
                  </input>
                {/* </div> */}
                {/* </div> */}
              </ul>
          </div>
          <div>
            
          </div>          
        </nav>
    );
};



export default Navbar;
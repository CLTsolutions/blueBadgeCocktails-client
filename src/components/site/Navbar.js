// import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
// import Box from '@material-ui/core/Box';
// import TextField from '@material-ui/core/TextField'
// import SearchIcon from '@material-ui/icons/Search';


// Function name matches file name
const Navbar = ( ) => {
    // return must have one parent element
    return (

        <nav className='bg-gray-900 flex items-center justify-between h-16'>
          <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
            {/* <div className='relative flex items-center justify-between h-16'> */}
              {/* <div className='absolute inset-y-0 left-0 flex items-center text-gray-50'> */}
                <Link to="/" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium'> Home</Link>
                <Link to="/mybar" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium'>My Bar</Link>
                <Link to="/splash" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium'>Login</Link>
              {/* </div> */}
                <input placeholder='Search' className='p-1 rounded-md text-left'></input>
            {/* </div> */}
          </div>
            
        </nav>
    );
};

// Makes it available for import
export default Navbar;
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
// import Box from '@material-ui/core/Box';
// import TextField from '@material-ui/core/TextField'
// import SearchIcon from '@material-ui/icons/Search';


// Function name matches file name
const Navbar = ( ) => {
    // return must have one parent element
    return (
      // <Box
      //   display="flex"
      //   flexDirection="row"
      //   justifyContent="end"
      //   alignItems='center'
      //   bgcolor="grey.600"
      //   height="2rem"
      //   width="100%"
      //   p={3}
      // >
        // <Box p={1}><Link to="/">Home</Link></Box>
        // <Box p={1}><Link to="/mybar">My Bar</Link></Box>
        // <Box p={1}><Link to="/splash">Login</Link></Box>
        <nav className='bg-gray-600 h-14 flex justify-center items-center'>
            <Link to="/">Home</Link>
            <Link to="/mybar">My Bar</Link>
            <Link to="/splash">Login</Link>
          {/* <Box ml={2}><SearchIcon /></Box> */}
          {/* <Box mr={5}><TextField mr='1rem' /></Box> */}
            <input placeholder='Search' className='p-1 rounded-md'></input>
        </nav>
    );
};

// Makes it available for import
export default Navbar;
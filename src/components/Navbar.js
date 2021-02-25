import './Navbar.css'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import MyBar from './profile/MyBar'
import Splash from './Splash'
import { render } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';


// Function name matches file name
const Navbar = ( ) => {
    // return must have one parent element
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="end"
        alignItems='center'
        bgcolor="grey.600"
        height="1rem"
        width="100%"
        p={3}
      >
        <Box p={1}><Link to="/">Home</Link></Box>
        <Box p={1}><Link to="/mybar">My Bar</Link></Box>
        <Box p={1}><Link to="/splash">Login</Link></Box>
        <Box ml={2}><SearchIcon /></Box>
        <Box mr={5}><TextField mr='1rem' /></Box>
        {/* <input type='text' placeholder='Search' /> */}

        {/* <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/mybar'>My Bar</Link></li>
                <li><Link to='/splash'>Login</Link></li>
            </ul> */}
      </Box>
    );
};

// Makes it available for import
export default Navbar;
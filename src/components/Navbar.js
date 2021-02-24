import './Navbar.css'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Splash from './Splash'

// Function name matches file name
const Navbar = () => {
    // return must have one parent element
    return (
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/splash'>Login</Link></li>
            <div>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/profile'><Profile /></Route>
                    <Route exact path='/splash'><Splash /></Route>
                </Switch>
            </div>
        </nav>
    );
};

// Makes it available for import
export default Navbar;
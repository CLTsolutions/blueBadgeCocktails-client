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


// Function name matches file name
const Navbar = ( ) => {
    // return must have one parent element
    return (
        <nav>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/mybar'>My Bar</Link></li>
            <li><Link to='/splash'>Login</Link></li>
            <div>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/mybar'><MyBar /></Route>
                    <Route exact path='/splash'><Splash /></Route>
                </Switch>
            </div>
        </nav>
    );
};

// Makes it available for import
export default Navbar;
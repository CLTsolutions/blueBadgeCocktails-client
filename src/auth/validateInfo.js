export default function validateInfo(values) {
    let errors = {}
    //Email
    if(!values.email) {
        errors.email = 'Email required'
    } else if(!/^[^@]+@[^@]+\.[^@]+$/i.test(values.email)) {
        errors.email = 'Email address is invalid'
    }
    //Password
    if(values.password) {
        errors.password = 'Password required'
    } else if (values.password.length < 5) {
        errors.password = 'Password needs to be 6 characters or more'
    }
    if (errors.length > 0){
        return false;
    }
    return true;
}
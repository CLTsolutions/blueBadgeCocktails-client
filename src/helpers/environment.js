let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
    case 'czc-thebarcart.herokuapp.com':
        APIURL = 'https://the-bar-cart.herokuapp.com'
        break
    default:
        APIURL = 'https://the-bar-cart.herokuapp.com'

}

export default APIURL;
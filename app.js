// GLOBALS - NO WINDOW !!!

// __dirname - path to current directoty


// about Module - Encapsulated Code(only share minmal)
// CommonJS, every file is module (by default)

const names = require('./names.js')
const sayHi = require('./utils.js')
require('./addValues')

sayHi("Kartik")
sayHi(names.Lakshita)
sayHi(names.Suraj)


const os = require('os')

// info about current user

const user =  os.userInfo()
console.log(user);
console.log(`User name is ${user.username}`);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentos ={
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentos);


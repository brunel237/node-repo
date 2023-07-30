const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem()/1000000,
    freeMem : os.freemem()/1000000,
}
console.log(currentOS)

// console.log(`This ${os}`)
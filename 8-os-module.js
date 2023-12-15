const os = require('os')

// info about current user
const user = os.userInfo()

// method returns the system uptime in seconds

console.log(`System is up for ${os.uptime() / 60 / 60 / 24} days`) 

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
}
console.log(currentOS)


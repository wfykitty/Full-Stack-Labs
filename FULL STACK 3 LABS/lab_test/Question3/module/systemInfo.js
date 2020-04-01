const os = require('os');
module.exports = {
    systemInfo: () => {
    console.log(`Operating System Info: CPU Architecture: ${os.arch()}   Hostname: ${os.hostname()}   Name: ${os.type()} \r\n`)},
    userInfo: () => {
    console.log(`User Info: Username: ${os.userInfo().username}   Home Directory: ${os.homedir}`)}
}
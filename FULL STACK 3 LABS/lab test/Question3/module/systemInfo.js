const os = require('os');
module.exports = {
    systemInfo: () => {
    console.log(`CPU Architecture: ${os.arch()}   `,`Hostname: ${os.hostname()}   `,`Operating System Type: ${os.type()} \r\n`)},
    userInfo: () => {
    console.log(`Username: ${os.userInfo().username}   `,`Home Directory: ${os.homedir}`)}
}
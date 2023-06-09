
const os = require('os');
const readline = require('readline');

const username = os.userInfo().username;

console.log(`Welcome ${username}!`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const args = input.trim().split(' ');

    const command = args[0];

    switch (command) {
        case '.exit':
            exitApp();
            break;
        case 'os':
            executeOsCommand(args);
            break;
        default:
            console.log('Invalid input');
            break;
    }
});

function exitApp() {
    console.log(`Thank you ${username}, goodbye!`);
    rl.close();
}

function executeOsCommand(args) {
    const subCommand = args[1];

    switch (subCommand) {
        case '--cpus':
            printCpusInfo();
            break;
        case '--homedir':
            printHomeDir();
            break;
        case '--username':
            printUsername();
            break;
        case '--architecture':
            printArchitecture();
            break;
        case '--hostname':
            printHostname();
            break;
        case '--platform':
            printPlatform();
            break;
        case '--memory':
            printMemory();
            break;
        default:
            console.log('Invalid input');
            break;
    }
}

function printCpusInfo() {
    const cpus = os.cpus();
    console.log(`CPUs Info:`);
    console.log(`Overall Amount: ${cpus.length}`);
    cpus.forEach((cpu, index) => {
        console.log(`CPU ${index + 1}:`);
        console.log(`  Model: ${cpu.model}`);
        console.log(`  Clock Rate: ${cpu.speed / 1000} GHz`);
    });
}

function printHomeDir() {
    console.log(`Home Directory: ${os.homedir()}`);
}

function printUsername() {
    console.log(`Username: ${username}`);
}

function printArchitecture() {
    console.log(`CPU Architecture: ${os.arch()}`);
}

function printHostname() {
    console.log(`Hostname: ${os.hostname()}`);
}

function printPlatform() {
    console.log(`Platform: ${os.platform()}`);
}

function printMemory() {
    console.log(`Total Memory: ${os.totalmem()} bytes`);
}

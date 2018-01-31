let username;
let password;
let clientId;
let clientSecret;

require('yargs').parse()
  .command({
    command: 'username <USER>',
    aliases: ['user', 'usr', 'u'],
    desc: 'Enter Reddit username',
    handler: (argv) => {
      username = argv;
    }
  }).command({
    command: 'password <PASS>',
    aliases: ['pass', 'p'],
    desc: 'Enter Reddit password',
    handler: (argv) => {
      password = argv;
    }
  }).command({
    command: 'client_id <CLIENT_ID>',
    aliases: ['ci', 'id', 'i'],
    desc: 'Enter your Reddit app client ID',
    handler: (argv) => {
      clientId = argv;
    }
  }).command({
    command: 'client_secret <CLIENT_SECRET>',
    aliases: ['cs', 'secret', 's'],
    desc: 'Enter your Reddit app client secret key',
    handler: (argv) => {
      clientSecret = argv;
    }
  })
  .help()
  .argv

console.log(username);
console.log(password);
console.log(clientId);
console.log(clientSecret);

let username;
let password;
let clientId;
let clientSecret;

require('yargs')
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

// NOTE: For now just log these variables to console.
// IDEA: return an object with these variables. Maybe JSON.
console.log(username);
console.log(password);
console.log(clientId);
console.log(clientSecret);

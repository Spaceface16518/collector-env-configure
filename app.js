require('yargs').parse()
  .command('credentials <USER> <PASS> <CLIENT_ID> <CLIENT_SECRET>', 'Enter your Reddit bot credentials', (argsv) => {
    yargs.positional('USER', {
    describe: 'Reddit username',
    type: 'string',
    default: 'Spaceface16518'
  }).positional('PASS', {
    describe: 'Reddit password',
    tyoe: 'string',
    default: ''
  }).positional('CLIENT_ID', {
      describe: 'Reddit app client ID',
      type: 'string',
      default: ''
}).postional('CLIENT_SECRET', {
      describe: 'Reddit app client secret key',
      type: 'strin',
      default: ''
  }
  .help()
  .argv

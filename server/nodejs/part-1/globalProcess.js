cl = console.log;

cl(".......PROCESS PID:")
cl(process.pid);

cl(".......PROCESS VERSIONS")
cl(process.versions);
// console.dir(process)
// cl('Here you are: ' + JSON.stringify(process.env));

cl(".......PROCESS ARGV");
cl(process.argv);

const [,, firstname, lastname] = process.argv;

cl(`Your name is ${firstname} ${lastname}`);

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

cl(`${greeting} ${user}`);

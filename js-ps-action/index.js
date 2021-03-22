const core = require('@actions/core');
const github = require('@actions/github');
const shell = require('node-powershell');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  let ps = new shell({
    executionPolicy: 'Bypass',
    noProfile: true
  });
  
  ps.addCommand('echo node-powershell')
  ps.invoke().then(output => {
    console.log(output);
  }).catch(err => {
    console.log(err);
    ps.dispose();
  });

} catch (error) {
  core.setFailed(error.message);
}
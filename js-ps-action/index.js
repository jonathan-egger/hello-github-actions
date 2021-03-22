const core = require('@actions/core');
const github = require('@actions/github');
const edge = require('edge');

var hello = edge.func('ps', function () {
    /*
    "PowerShell welcomes $inputFromJS on $(Get-Date)"
    */});
    
hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result[0]);
});

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
const core = require('@actions/core');
const github = require('@actions/github');

try {

    const nameToGreet = core.getInput('user-name');
    console.log(`Hello ${nameToGreet}!`);
    core.setOutput("greeting", `Hello ${nameToGreet}!`);

    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

} catch (error) {

    core.setFailed(error.message);
}

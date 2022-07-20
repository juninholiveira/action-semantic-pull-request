const core = require('@actions/core');

module.exports = async function raiseError(message, outputErrorMessage) {
  if (outputErrorMessage) {
    core.setOutput('ERROR_MESSAGE', message);
    return;
  }
  throw new Error(message);
};

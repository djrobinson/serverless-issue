const { spawnSync } = require('child_process')

const run = (cmd, args) => {
    const options = { cwd: process.cwd(), stdio: 'inherit' }
    const result = spawnSync('/Users/danielrobinson/serverless-error/node_modules/serverless/node_modules/.bin/serverless-darwin-arm64-0.0.2', args, options)
    console.log('RESULT: ', result);
}

run();
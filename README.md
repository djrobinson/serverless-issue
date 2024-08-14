# Bug

It appears that running multiple `serverless` commands simultaneously in a monorepo runs the risk of interrupting the installation of the new version locally. To recreate:
1. Force an autoupdate of the binary by deleting the latest release of serverless from your local replacing 4.1.22 with your most recent version: 
```
cd ~/.serverless/releases
rm -rf 4.1.22
```
2. Install your dependencies by running `yarn` from the root
3. Run `yarn dev` from the root

Expected: All 3 packages should start up successfully
Actual: 
- I get a `SyntaxError: Cannot use import statement outside a module`
- If you look at the most recently downloaded `~/.serverless/releases/4.1.22/package/`, you'll see that the `node_modules` never installed


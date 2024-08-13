# Bug

It appears that running any two `serverless` commands simultaneously in a monorepo runs the risk of interrupting the installation of the new version locally. To recreate:
1. Force an autoupdate of the binary by deleting the latest release of serverless from your local: 
```
cd ~/.serverless/releases
rm -rf 4.1.22
```
2. Now run 

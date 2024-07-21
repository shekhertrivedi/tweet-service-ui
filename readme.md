# tweet-service-ui

* create basic form to create tweet
* page to list all tweets


## Road Ahead

* give filters to list tweet by a particular user
* order by creation time
* pagination (may be on scroll)
* webpack configuration and use to run the app end to end


## Issues

1. Got error while adding http library. [Fixed]

seems version conflict between `ts-node` and `typescript`

resolution:

Uninstall `typescript` and `ts-node`

`npm uninstall ts-node typescript`

Install compatible versions of `ts-node` and `typescript`

`npm install typescript@latest ts-node@latest --save-dev`

2. bundle.js is not found

haven't bundled the TypeScript files into a single JavaScript file named `bundle.js`. We need to use a bundler like `Webpack` to do this.
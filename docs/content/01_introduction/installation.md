---
title: "Installation"
order: 3
---

Prodo is [available on NPM](https://www.npmjs.com/package/@prodo/core). The
base package you need for all Prodo apps is `@prodo/core`.

```shell
npm install --save @prodo/core
# OR
yarn add @prodo/core
```

If you get an error `Incorrect integrity when fetching from the cache` when creating your app, try running `yarn cache clean` first.

Prodo also provides a [Babel plugin](https://babeljs.io/)
that enables you to write components and actions in a concise syntax. Check out
[the docs](/basics/babel-plugin/) for information on how to set it up.

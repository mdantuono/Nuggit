// svelte.config.js

const autoProcess = require('svelte-preprocess');

module.exports = {
  preprocess: autoProcess({ postcss: true }),
};

const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

module.exports = {
  output: {
    path: path.resolve(ROOT_DIR, 'dist')
  }
};

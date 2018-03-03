const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'quickimm'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/quickimm-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'quickimm'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/quickimm-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'quickimm'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/quickimm-production'
  }
};

module.exports = config[env];

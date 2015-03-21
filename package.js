Package.describe({
  name: 'huaming:jiathis-share',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'This is a plugin for adding jiathis share buttons to meteor app',
  // URL to the Git repository containing the source code for this package.
  git: 'https://www.github.com/raohuaming/meteor-jiathis',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use(['templating', 'underscore']);
  api.addFiles(
    [
      'jiathis-share.html',
      'jiathis-share.js'
    ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('huaming:jiathis-share');
  api.addFiles('jiathis-share-tests.js');
});

Package.describe({
  name: 'test-validator',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jagi:astronomy@0.10.5');
  // Comment out this line and error will go away, as the `check` package is
  // being used in the validator package without being explicitly declared
  api.use('jagi:astronomy-validators@0.10.7');
  api.addFiles('test-validator.js');
});

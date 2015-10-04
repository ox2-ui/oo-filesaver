Package.describe({
  name: 'ox2:filesaver',
  summary: 'TESTING_DO_NOT_USE  FileSaver.js library',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('lib/FileSaver.js', C);
  api.export('saveAs');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:filesaver');
  api.addFiles('tests/oo-filesaver-tests.js');
});

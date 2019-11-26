module.exports = {
  name: 'aiwa-portfolio',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/aiwa-portfolio',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

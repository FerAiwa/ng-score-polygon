module.exports = {
  name: 'score-polygon',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/score-polygon',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

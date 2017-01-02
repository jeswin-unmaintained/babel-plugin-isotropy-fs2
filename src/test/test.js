import should from "should";
import * as babel from "babel-core";
import fs from "fs";
import path from "path";

describe("babel-plugin-isotropy-mongodb", () => {
  function test(fixtureName) {
    it(fixtureName, () => {
      const fixturePath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
      const expectedPath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
      const actual = babel.transformFileSync(fixturePath, {
        plugins: [['../../../']],
        babelrc: false,
      }).code;
      const expected = fs.readFileSync(expectedPath, { encoding: 'utf8' });
      actual.should.equal(expected);
    });
  }

  [
    'create-file',
    'delete-file',
    'get-files',
    'get-files-sub-dirs',
    'read-file',
    'update-file',
  ].map(test);
});

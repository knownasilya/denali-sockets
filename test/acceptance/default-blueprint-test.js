import * as path from 'path';
import * as fs from 'fs';
import test from 'ava';
import {
  BlueprintAcceptanceTest
} from '@denali-js/cli';

test('test outputed files', async (t) => {
  let defaultBlueprint = new BlueprintAcceptanceTest('default');

  await defaultBlueprint.run();

  let builtFile = path.join(defaultBlueprint.dir, 'dist', 'app', 'namespaces', 'application.js');
  let results = fs.readFileSync(builtFile, 'utf-8');

  console.log(results);
  t.true(results);
});

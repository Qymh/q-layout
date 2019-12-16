import { propsCollections } from '../src/props';
import * as fs from 'fs-extra';
import beautify from 'js-beautify';

const tags = {
  'q-row': {
    description: '布局',
    attributes: []
  }
};
const attributes = {};

const typeReg = /function\s*(\w+).*/;

for (const key in propsCollections) {
  tags['q-row'].attributes.push(key);
  const attributesKey = `q-row/${key}`;
  const item = propsCollections[key];
  const type = [];
  if (Array.isArray(item.type)) {
    item.type.forEach(v => {
      type.push(
        String(v)
          .toLowerCase()
          .match(typeReg)[1]
      );
    });
  } else {
    type.push(
      String(item.type)
        .toLowerCase()
        .match(typeReg)[1]
    );
  }
  attributes[attributesKey] = {
    description: item.raw,
    type: type.join('|')
  };
}

const tagsJSON = JSON.stringify(tags);
const attributesJSON = JSON.stringify(attributes);

fs.outputFileSync(
  'vetur/tags.json',
  beautify.js(tagsJSON, { indent_size: 2, space_in_empty_paren: true })
);
fs.outputFileSync(
  'vetur/attributes.json',
  beautify.js(attributesJSON, { indent_size: 2, space_in_empty_paren: true })
);

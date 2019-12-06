// eslint-disable-next-line no-unused-vars
import { VueConstructor } from 'vue';
// eslint-disable-next-line no-unused-vars
import { InstallConfig, InstallCollectionGroup } from './types';
import VueCompositionApi from '@vue/composition-api';
import QRow from './QRow';
import {
  setConfig,
  makeMap,
  warn,
  assert,
  isObj,
  toPlain,
  base
} from './utils';
import './style/index.scss';

const configMap = makeMap('unit,ratio,decimals,collections');
const collectionsMap = makeMap(
  'alias,coverage,raw,type,default,pure,class,classPure'
);

function checkConfig(config: InstallConfig) {
  if (
    assert(
      isObj(config),
      `config must be an Object but now get ${toPlain(config)}`
    )
  ) {
    return;
  }
  for (const key in config) {
    if (!configMap[key]) {
      return warn(
        false,
        `config keys can only be unit、ratio、decimals or collections, but now get ${key}`
      );
    }
    if (key === 'collections' && config.collections) {
      return checkCollections(config.collections);
    }
  }
  return false;
}

function checkCollections(collections: InstallCollectionGroup) {
  for (const obj in collections) {
    for (const key in collections[obj]) {
      if (!collectionsMap[key]) {
        return assert(
          false,
          `collections key can only be alias、coverage、raw、type、default、pure、class、classPure, but now collection ${obj} has ${key}`
        );
      }
    }
  }
  return false;
}

export default {
  install(Vue: VueConstructor, Config: InstallConfig) {
    if (checkConfig(Config)) {
      Config = base;
    }
    setConfig(Config);
    Vue.use(VueCompositionApi);
    Vue.component('QRow', QRow());
  }
};

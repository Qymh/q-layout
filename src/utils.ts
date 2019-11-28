// eslint-disable-next-line no-unused-vars
import { InstallConfig, CollectionGroup, Dictionary } from './types';

export function assert(bool: boolean, msg: string): boolean {
  if (!bool && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(`[q-row]: ${msg}`);
    return true;
  }
  return false;
}

const base: InstallConfig = {
  unit: 'px',
  ratio: 1,
  decimals: 3
};

export let config: InstallConfig = base;

export function setConfig(conf: InstallConfig) {
  config = {
    ...base,
    ...conf
  };
}

export function mergeProps(props: CollectionGroup): CollectionGroup {
  if (!config.collections) {
    return props;
  }
  for (const key in config.collections) {
    const item = config.collections[key];
    if (item.coverage || item.alias) {
      props[item.coverage! || item.alias!] = { ...props[key], ...item };
      if (item.coverage) {
        delete props[key];
      }
    } else {
      props[key] = { ...props[key], ...item };
    }
  }
  return props;
}

export function makeMap(map: string) {
  return map.split('').reduce<Dictionary<boolean>>((acc, val) => {
    acc[val] = true;
    return acc;
  }, {});
}

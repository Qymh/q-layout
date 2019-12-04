// eslint-disable-next-line no-unused-vars
import { InstallConfig, Dictionary } from './types';

export function assert(bool: boolean, msg: string): boolean {
  if (!bool && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(`[q-layout]: ${msg}`);
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

export function makeMap(map: string) {
  return map.split('').reduce<Dictionary<boolean>>((acc, val) => {
    acc[val] = true;
    return acc;
  }, {});
}

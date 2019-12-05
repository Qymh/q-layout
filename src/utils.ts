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

export function warn(bool: boolean, msg: string): boolean {
  if (!bool && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(`[q-layout]: ${msg}`);
  }
  return false;
}

export const base: InstallConfig = {
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
  return map.split(',').reduce<Dictionary<boolean>>((acc, val) => {
    acc[val] = true;
    return acc;
  }, {});
}

export function isObj(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Object';
}

export function toPlain(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

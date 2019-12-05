// eslint-disable-next-line no-unused-vars
import { Collection, CollectionGroup, Dictionary } from './types';
import {
  backgroundCollections,
  borderCollections,
  boxCollections,
  colorCollections,
  dimensionCollections,
  flexCollections,
  fontCollections,
  marginCollections,
  paddingCollections,
  positionCollections,
  textCollections,
  userCollections,
  flexMap
} from './collections';
import { config } from './utils';

export const propsCollections = {
  ...backgroundCollections,
  ...borderCollections,
  ...boxCollections,
  ...colorCollections,
  ...dimensionCollections,
  ...flexCollections,
  ...fontCollections,
  ...marginCollections,
  ...paddingCollections,
  ...positionCollections,
  ...textCollections,
  ...userCollections
};

export const defaultProps: Dictionary = {
  tag: {
    type: String,
    default: 'div'
  }
};

export function mergeProps(props: CollectionGroup): CollectionGroup {
  for (const key in defaultProps) {
    props[key] = defaultProps[key];
  }
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
export const mergePropsFn = () => mergeProps(propsCollections);

export function generateProps(props: Dictionary) {
  const style = {};
  const className: string[] = [];
  for (const key in props) {
    let prop = props[key];
    if (prop) {
      if (typeof prop.trim === 'function') {
        prop = prop.trim();
      }
      const raw = propsCollections[key];
      if (raw.classPure) {
        processClassPureProps(prop, raw, className, style);
      } else if (raw.class) {
        processClassProps(prop, raw, className);
      } else if (raw.pure) {
        proccessPureProps(prop, raw, style);
      } else if (typeof prop === 'number') {
        processNumberProps(prop, raw, style);
      } else if (typeof prop === 'string') {
        processStringProps(prop, raw, style);
      }
    }
  }
  return {
    style,
    className
  };
}

function processClassPureProps(
  prop: any,
  raw: Collection,
  className: string[],
  style: Dictionary
) {
  if (typeof prop === 'boolean') {
    className.push(`q-layout-${raw.raw}`);
  } else {
    style[raw.raw] = processCompositionValue(prop);
  }
}

function processClassProps(prop: any, raw: Collection, className: string[]) {
  if (flexMap[raw.raw] && !className.includes('q-layout-flex')) {
    className.push('q-layout-flex');
  }
  if (typeof prop === 'boolean') {
    className.push(`q-layout-${raw.raw}`);
  } else {
    className.push(`q-layout-${raw.raw}-${prop}`);
  }
}

function proccessPureProps(prop: any, raw: Collection, style: Dictionary) {
  style[raw.raw] = prop;
}

function processNumberProps(prop: any, raw: Collection, style: Dictionary) {
  style[raw.raw] = prop + '%';
}

function processStringProps(prop: any, raw: Collection, style: Dictionary) {
  if (/^\d+$/.test(prop)) {
    style[raw.raw] =
      (prop / +config.ratio).toFixed(config.decimals) + config.unit;
  } else if (/^\d+.*(\s)/.test(prop)) {
    style[raw.raw] = processCompositionValue(prop);
  } else {
    style[raw.raw] = prop;
  }
}

function processCompositionValue(prop: string) {
  return prop.split(' ').reduce<string>((acc, val: string) => {
    if (isFinite(+val)) {
      acc +=
        (+val / +config.ratio).toFixed(config.decimals) + config.unit + ' ';
    } else {
      acc += val + ' ';
    }
    return acc;
  }, '');
}

// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';
import { makeMap } from '../utils';

export const flexCollections: CollectionGroup = {
  dir: {
    raw: 'flexDirection',
    type: String,
    default: '',
    class: true
  },
  justify: {
    raw: 'justifyContent',
    type: String,
    default: '',
    class: true
  },
  align: {
    raw: 'alignItems',
    type: String,
    default: '',
    class: true
  },
  flex: {
    raw: 'flex',
    type: [String, Number],
    default: '',
    class: true
  },
  wrap: {
    raw: 'flexWrap',
    type: String,
    default: '',
    class: true
  },
  center: {
    raw: 'center',
    type: Boolean,
    default: false,
    class: true
  }
};

export const flexMap = makeMap(
  'flexDirection,justifyContent,alignItems,flex,flexWrap,center'
);

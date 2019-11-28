// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';

export const dimensionCollections: CollectionGroup = {
  h: {
    type: [String, Number],
    raw: 'height',
    default: ''
  },
  maxh: {
    type: [String, Number],
    raw: 'maxHeight',
    default: ''
  },
  minh: {
    type: [String, Number],
    raw: 'minHeight',
    default: ''
  },
  w: {
    raw: 'width',
    type: [String, Number],
    default: ''
  },
  maxw: {
    raw: 'maxWidth',
    type: [String, Number],
    default: ''
  },
  minw: {
    raw: 'minWidth',
    type: [String, Number],
    default: ''
  }
};

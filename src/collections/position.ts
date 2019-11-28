// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';

export const positionCollections: CollectionGroup = {
  position: {
    raw: 'position',
    type: String,
    default: ''
  },
  t: {
    raw: 'top',
    type: [String, Number],
    default: ''
  },
  r: {
    raw: 'right',
    type: [String, Number],
    default: ''
  },
  b: {
    raw: 'bottom',
    type: [String, Number],
    default: ''
  },
  l: {
    raw: 'left',
    type: [String, Number],
    default: ''
  },
  display: {
    raw: 'display',
    type: String,
    default: '',
    pure: true
  },
  float: {
    raw: 'float',
    type: String,
    default: '',
    pure: true
  },
  cursor: {
    raw: 'cursor',
    type: String,
    default: '',
    pure: true
  },
  va: {
    raw: 'verticalAlign',
    type: String,
    default: '',
    pure: true
  },
  zIndex: {
    raw: 'zIndex',
    type: [String, Number],
    default: '',
    pure: true
  },
  visibility: {
    raw: 'visibility',
    type: String,
    default: '',
    pure: true
  }
};

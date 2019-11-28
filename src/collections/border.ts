// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';

export const borderCollections: CollectionGroup = {
  borderTop: {
    type: [Boolean, String],
    raw: 'borderTop',
    default: false,
    classPure: true
  },
  borderRight: {
    type: [Boolean, String],
    raw: 'borderRight',
    default: false,
    classPure: true
  },
  borderBottom: {
    type: [Boolean, String],
    raw: 'borderBottom',
    default: false,
    classPure: true
  },
  borderLeft: {
    type: [Boolean, String],
    raw: 'borderLeft',
    default: false,
    classPure: true
  },
  border: {
    type: [Boolean, String],
    raw: 'border',
    default: false,
    classPure: true
  },
  radius: {
    type: [Number, String],
    raw: 'borderRadius',
    default: ''
  }
};

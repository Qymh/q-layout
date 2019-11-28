// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';

export const paddingCollections: CollectionGroup = {
  pt: {
    raw: 'paddingTop',
    type: [String, Number],
    default: ''
  },
  pr: {
    raw: 'paddingRight',
    type: [String, Number],
    default: ''
  },
  pb: {
    raw: 'paddingBottom',
    type: [String, Number],
    default: ''
  },
  pl: {
    raw: 'paddingLeft',
    type: [String, Number],
    default: ''
  },
  padding: {
    raw: 'padding',
    type: [String, Number],
    default: ''
  }
};

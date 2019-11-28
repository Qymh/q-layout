// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';

export const marginCollections: CollectionGroup = {
  mt: {
    type: [String, Number],
    raw: 'marginTop',
    default: ''
  },
  mr: {
    raw: 'marginRight',
    type: [String, Number],
    default: ''
  },
  mb: {
    raw: 'marginBottom',
    type: [String, Number],
    default: ''
  },
  ml: {
    raw: 'marginLeft',
    type: [String, Number],
    default: ''
  },
  margin: {
    raw: 'margin',
    type: [String, Number],
    default: ''
  }
};

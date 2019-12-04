// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';

export const fontCollections: CollectionGroup = {
  fontSize: {
    raw: 'fontSize',
    type: String,
    default: ''
  },
  weight: {
    raw: 'fontWeight',
    type: [String, Number],
    default: '',
    pure: true
  }
};

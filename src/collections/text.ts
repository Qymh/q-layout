// eslint-disable-next-line no-unused-vars
import { CollectionGroup } from '../types';

export const textCollections: CollectionGroup = {
  color: {
    raw: 'color',
    type: String,
    default: '',
    pure: true
  },
  lh: {
    raw: 'lineHeight',
    type: [String, Number],
    default: ''
  },
  letterSpacing: {
    raw: 'letterSpacing',
    type: String,
    default: ''
  },
  wordSpacing: {
    raw: 'wordSpacing',
    type: String,
    default: ''
  },
  textAlign: {
    raw: 'textAlign',
    type: String,
    default: '',
    pure: true
  },
  whiteSpace: {
    raw: 'whiteSpace',
    type: String,
    default: '',
    pure: true
  },
  wordBreak: {
    raw: 'wordBreak',
    type: String,
    default: '',
    pure: true
  },
  wordWrap: {
    raw: 'wordWrap',
    type: String,
    default: '',
    pure: true
  },
  indent: {
    raw: 'textIndent',
    type: String,
    default: ''
  }
};

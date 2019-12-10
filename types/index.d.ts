export type Unit = 'px' | 'rem' | 'vw';

export type Constructor<T = any> = { new (...args: any): T };

export type Collection = {
  raw: string;
  type: Constructor | Constructor[];
  default: any;
  pure?: boolean;
  class?: boolean;
  classPure?: boolean;
};

export type CollectionGroup = Record<string, Collection>;

export interface InstallCollection extends Collection {
  alias?: string;
  coverage?: string;
}

export type InstallCollectionGroup = Record<string, InstallCollection>;

export type InstallConfig = {
  unit: Unit;
  ratio: string | number;
  decimals: number;
  collections?: InstallCollectionGroup;
};

declare const _default: {
  install: (Vue: any, options: InstallConfig) => void;
};

export default _default;

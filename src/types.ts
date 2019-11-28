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

export type Props = {
  [prop: string]: {
    type: Constructor | Constructor[];
    default: any;
  };
};

export type Unit = 'px' | 'rem' | 'vw';

export type InstallConfig = {
  unit: Unit;
  ratio: string | number;
  decimals: number;
  collections?: InstallCollectionGroup;
};

export type Dictionary<T = any> = Record<string, T>;

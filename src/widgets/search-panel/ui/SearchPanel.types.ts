export type State = {
  value: string;
};

export type Store = {
  search: string;
};

export type Props = {
  value: string;
  onChange: (value: string) => void;
};

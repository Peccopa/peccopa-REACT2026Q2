export type Product = {
  id: number;
  title: string;
  description: string;
};

export type Pagination = {
  limit: number;
  skip: number;
};

export type ProductsMeta = {
  total: number;
} & Pagination;

export type ProductsRequest = {
  search: string;
} & Pagination;

export type ProductsResponse = {
  products: Product[];
} & ProductsMeta;

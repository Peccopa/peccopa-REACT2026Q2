import { API_URL } from '@/constants';

export type ProductsResponse = {
  products: {
    id: number;
    title: string;
    description: string;
  }[];
  total: number;
  skip: number;
  limit: number;
};

export async function fetchProducts(
  search: string = '',
  limit: number = 10,
  skip: number = 0
): Promise<ProductsResponse> {
  const rawSearch = search.trim();
  const encoded = encodeURIComponent(rawSearch);

  const url = encoded
    ? `${API_URL}/search?q=${encoded}&limit=${limit}&skip=${skip}`
    : `${API_URL}?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch products');
  const data: ProductsResponse = await response.json();

  return data;
}

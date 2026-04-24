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
  search: string,
  limit: number,
  skip: number
): Promise<ProductsResponse> {
  const trimmedSearch = search.trim();

  const url = trimmedSearch
    ? `${API_URL}/search?q=${encodeURIComponent(trimmedSearch)}&limit=${limit}&skip=${skip}`
    : `${API_URL}?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}

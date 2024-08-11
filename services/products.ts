import { Product } from '@prisma/client';
import { axiosInstence } from './axios';
import { ApiRoutes } from './routes';

export const search = async (query: string): Promise<Product[]> => {
	return (await axiosInstence.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } }))
		.data;
};

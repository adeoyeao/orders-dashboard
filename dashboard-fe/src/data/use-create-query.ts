import { useQuery,type UseQueryOptions } from "@tanstack/react-query";

import { useClient } from "./use-client";

export type CreateQueryArgs = {
	key: string;
	endpoint: string;
	options?: {
		invalidates?: string[];
		staleTime?: number;
		cacheTime?: number;
		retry?: number | boolean;
	};
};

type QueryParams = Record<string, unknown>;

export const useCreateQuery = ({
	key,
	endpoint,
	options = {},
}: CreateQueryArgs) => {
	return (params: QueryParams = {}, queryOptions?: UseQueryOptions) => {
		const client = useClient();
		return useQuery({
			queryKey: [key, params],
			queryFn: async () => {
				const { data } = await client.get(endpoint, { params });
				return data;
			},
			...options,
			...queryOptions,
		});
	};
};
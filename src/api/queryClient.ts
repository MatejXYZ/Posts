import { QueryCache, QueryClient } from "react-query";

export const queryCache = new QueryCache();

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

export default queryClient;

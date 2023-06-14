import { useMemo, lazy, Suspense } from "react";
import { Flex } from "@chakra-ui/react";
import {
  useRoutes,
  useLocation,
  RouteObject,
  Navigate,
} from "react-router-dom";

const PostDetail = lazy(() => import("./Detail"));
const PostList = lazy(() => import("./List"));

export const relativePaths = {
  list: "list",
  detail: "detail",
} as const;

const Posts = () => {
  const routeConfig = useMemo<RouteObject[]>(
    () => [
      {
        path: relativePaths.list,
        element: <PostList />,
      },
      {
        path: `${relativePaths.detail}/:id`,
        element: <PostDetail />,
      },
      {
        path: "*",
        element: <Navigate to={relativePaths.list} />,
      },
    ],
    []
  );

  const location = useLocation();

  const routes = useRoutes(routeConfig, location);

  return (
    <Flex w="100vw" h="100vh" overflow="auto hidden">
      <Suspense fallback={null}>{routes}</Suspense>
    </Flex>
  );
};

export default Posts;

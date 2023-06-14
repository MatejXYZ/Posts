import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { getPosts } from "../../../api/requests";

import { PAGE_SIZE } from "../../../constants/api";

const getElementScrolledBottom = (el: HTMLDivElement) =>
  el.scrollHeight - el.scrollTop - el.clientHeight < 1500;

const PostList = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const [page, setPage] = useState(0);

  const ref = useRef<null | HTMLDivElement>(null);

  const checkPage = useCallback(() => {
    const target = ref.current;

    if (target && getElementScrolledBottom(target)) {
      setPage((prev) => (prev === posts?.length ? prev : prev + 1));
    }
  }, [posts?.length]);

  useEffect(checkPage, [checkPage]);

  const numberOfVisiblePosts = useMemo(() => (page + 1) * PAGE_SIZE, [page]);

  return (
    <Box
      ref={ref}
      w="100vw"
      h="100vh"
      overflow="hidden auto"
      onScroll={
        numberOfVisiblePosts < (posts?.length ?? 0) ? checkPage : undefined
      }
    >
      {posts?.slice(0, numberOfVisiblePosts)?.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </Box>
  );
};

export default PostList;

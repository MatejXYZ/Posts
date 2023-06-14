import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { getPosts } from "../../../api/requests";

import { PAGE_SIZE } from "../../../constants/api";

import PostItem from "./Item";

import "./textOverflow.css";
import colors from "../../../colors";

const getElementScrolledBottom = (el: HTMLDivElement) =>
  el.scrollHeight - el.scrollTop - el.clientHeight < 1500;

const PostList = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const [page, setPage] = useState(1); // NOTE - start with 2 pages loaded to have some data

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
      w="full"
      bg={colors.white}
      color={colors.black}
      ref={ref}
      overflow="hidden auto"
      onScroll={
        numberOfVisiblePosts < (posts?.length ?? 0) ? checkPage : undefined
      }
      display="flex"
      justifyContent="center"
      padding="8px"
    >
      <Box display="flex" flexWrap="wrap" justifyContent="center" maxW="1400px">
        {posts?.slice(0, numberOfVisiblePosts)?.map((post) => (
          <Suspense fallback={null}>
            <PostItem key={post.id} {...post} />
          </Suspense>
        ))}
      </Box>
    </Box>
  );
};

export default PostList;

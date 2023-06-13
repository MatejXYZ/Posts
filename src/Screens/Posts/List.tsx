import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import type { Post } from "../../api/types";

import { getPostComments, getPosts, getUser } from "../../api/requests";

import { PAGE_SIZE } from "../../constants/api";

import { relativePaths } from ".";

const getElementScrolledBottom = (el: HTMLDivElement) =>
  el.scrollHeight - el.scrollTop - el.clientHeight < 1500;

const PostItem: FC<Post> = memo(({ id, title, body, userId }) => {
  const { data: author } = useQuery({
    queryKey: ["author", userId],
    queryFn: () => getUser({ id: userId }),
  });

  const { data: postComments } = useQuery({
    queryKey: ["postComments", id],
    queryFn: () => getPostComments({ id }),
  });

  const navigate = useNavigate();

  return (
    <Box bg="sandybrown" margin="5px">
      <Box>
        <b>{title}</b>
      </Box>
      <Box>{author?.name}</Box>
      <Box>{body}</Box>
      <Box
        textDecor="underline"
        cursor="pointer"
        onClick={() => {
          navigate(`/${relativePaths.detail}/1`);
        }}
      >
        show more
      </Box>
      <Box
        textDecor="underline"
        cursor="pointer"
        onClick={() => {
          navigate(`/${relativePaths.detail}/1`);
        }}
      >
        comments {postComments?.length}
      </Box>
    </Box>
  );
});

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

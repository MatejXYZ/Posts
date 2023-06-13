import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { FC, memo } from "react";

import type { Post } from "../../api/types";

import { getPostComments, getPosts, getUser } from "../../api/requests";

const PostItem: FC<Post> = memo(({ id, title, body, userId }) => {
  const { data: author } = useQuery({
    queryKey: ["author", userId],
    queryFn: () => getUser({ id: userId }),
  });

  const { data: postComments } = useQuery({
    queryKey: ["postComments", id],
    queryFn: () => getPostComments({ id }),
  });

  return (
    <Box bg="sandybrown" margin="5px">
      <Box>
        <b>{title}</b>
      </Box>
      <Box>{author?.username}</Box>
      <Box>{body}</Box>
      <Box>{postComments?.length}</Box>
    </Box>
  );
});

const PostList = () => {
  const { data: posts } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <Box w="100vw" h="100vh" overflow="hidden auto">
      {posts?.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </Box>
  );
};

export default PostList;

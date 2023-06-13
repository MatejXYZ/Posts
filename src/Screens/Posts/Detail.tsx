import { useQuery } from "react-query";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FC, memo } from "react";

import { getPost, getPostComments, getUser } from "../../api/requests";

import { Comment } from "../../api/types";

const CommentItem: FC<Comment> = memo(({ email, name, body }) => {
  return (
    <Box bg="seagreen" margin="3px 7px">
      <Box>
        <b>{name}</b>
      </Box>
      <Box>{email}</Box>
      <Box>{body}</Box>
    </Box>
  );
});

const PostDetail = () => {
  const { id = null } = useParams();

  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: () => (id ? getPost({ id }) : null),
    enabled: id !== null,
  });

  const { title, body, userId } = post ?? {};

  console.info(post);

  const { data: author } = useQuery({
    queryKey: ["author", userId],
    queryFn: () => (userId ? getUser({ id: userId }) : null),
    enabled: userId !== undefined,
  });

  const { data: postComments } = useQuery({
    queryKey: ["postComments", id],
    queryFn: () => (id ? getPostComments({ id }) : null),
    enabled: id !== null,
  });

  return (
    <Box bg="sandybrown" margin="5px">
      <Box>
        <b>{title}</b>
      </Box>
      <Box>{author?.name}</Box>
      <Box>{body}</Box>
      <Box>
        {postComments?.map((comment) => (
          <CommentItem {...comment} />
        ))}
      </Box>
    </Box>
  );
};
export default PostDetail;

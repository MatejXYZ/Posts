import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { Post } from "../../../api/types";

import { relativePaths } from "..";

import { getUser, getPostComments } from "../../../api/requests";

const PostItem: FC<Post> = ({ id, title, body, userId }) => {
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
};

export default PostItem;

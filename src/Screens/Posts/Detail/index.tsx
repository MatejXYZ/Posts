import { useQuery } from "react-query";
import { Box, Stack, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { getPost, getPostComments, getUser } from "../../../api/requests";

import colors from "../../../colors";

import CommentItem from "../Detail/CommentItem";

import { capitalizeFirstLetter } from "../../../utils";
import { RightArrowIcon } from "../../../assets/svg";
import { relativePaths } from "..";

const PostDetail = () => {
  const { id = null } = useParams();

  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: () => (id ? getPost({ id }) : null),
    enabled: id !== null,
  });

  const { title, body, userId } = post ?? {};

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

  const navigate = useNavigate();

  return (
    <VStack bg={colors.offWhite} w="full" spacing="0">
      <Stack
        direction={["column", "row"]}
        spacing={["16px", "24px"]}
        align={["start", "center"]}
        bg={colors.green}
        p="24px"
        w="full"
      >
        <Box
          w={["24px", "44px"]}
          color={colors.white}
          _hover={{
            color: colors.black,
          }}
          cursor="pointer"
          onClick={() => navigate(`/${relativePaths.list}`)}
          transition="color 0.06125s"
        >
          <RightArrowIcon style={{ transform: "rotate(180deg)" }} />
        </Box>
        <VStack w="full" align={["start", "center"]}>
          <Box
            fontWeight="900"
            fontSize={["24px", "44px"]}
            lineHeight="1.125"
            color={colors.white}
            maxW="640px"
            textAlign={["start", "center"]}
          >
            {capitalizeFirstLetter(title ?? "")}
          </Box>
          <Box color={colors.white} fontSize={["12px", "16px"]}>
            {author?.name}
          </Box>
        </VStack>
        <Box w="32px" />
      </Stack>
      <VStack maxW="800px" p="24px" align="center">
        <Box
          fontSize={["16px", "20px"]}
          lineHeight="1.25"
          pt="24px"
          pb={["36px", "80px"]}
          w="full"
        >
          {body}
        </Box>
        <Box maxW="640px">
          <Box
            fontWeight="900"
            fontSize={["16px", "24px"]}
            lineHeight="1.125"
            color={colors.black}
          >
            Comments
          </Box>
          {postComments?.map((comment) => (
            <CommentItem key={comment.id} {...comment} />
          ))}
        </Box>
      </VStack>
    </VStack>
  );
};

export default PostDetail;

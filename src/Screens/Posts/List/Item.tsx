import { FC, memo, useCallback } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";

import { Post } from "../../../api/types";

import { relativePaths } from "..";

import { getUser, getPostComments } from "../../../api/requests";

import colors from "../../../colors";

import { RightArrowIcon } from "../../../assets/svg";

import { capitalizeFirstLetter } from "../../../utils";

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

  const navigateToPost = useCallback(() => {
    navigate(`/${relativePaths.detail}/${id}`);
  }, [id, navigate]);

  return (
    <VStack
      flex="1"
      minW="360px"
      minH="240px"
      maxH="360px"
      bg={colors.white}
      margin="16px"
      p="24px"
      align="start"
      rounded="16px"
      border="solid"
    >
      <Box>
        <Box
          fontWeight="900"
          fontSize="24px"
          lineHeight="1.125"
          color={colors.black}
          cursor="pointer"
          _hover={{
            color: colors.green,
          }}
          onClick={navigateToPost}
          transition="color 0.06125s"
        >
          {capitalizeFirstLetter(title)}
        </Box>
        <Box color={colors.gray} fontStyle="italic" fontSize="14px">
          {author?.name}
        </Box>
      </Box>
      <Box className="text-overflow-2" fontSize="14px" lineHeight="1.25">
        {body}
      </Box>
      <Flex align="center" justify="space-between" w="full">
        <Button
          colorScheme="white"
          onClick={navigateToPost}
          fontSize="14px"
          fontWeight="700"
          transition="background-color 0.06125s, color 0.06125s, border-color 0.06125s"
          display="flex"
          alignItems="center"
          rightIcon={<RightArrowIcon width={24} height={24} />}
        >
          Read more
        </Button>
        <Box
          fontSize="14px"
          lineHeight="1.125"
          color={colors.green}
          cursor="pointer"
          _hover={{
            color: colors.black,
          }}
          onClick={navigateToPost}
          p="0 4px"
          transition="color 0.06125s"
        >
          {postComments?.length} comments
        </Box>
      </Flex>
    </VStack>
  );
});

export default PostItem;

import { FC, memo } from "react";
import { Box } from "@chakra-ui/react";

import { Comment } from "../../../api/types";
import colors from "../../../colors";

const CommentItem: FC<Comment> = memo(({ email, name, body }) => {
  return (
    <Box py="0.5em" color={colors.gray} bg={colors.offWhite}>
      <Box>
        <Box color={colors.green} fontSize={["10px", "14px"]}>
          {email}:
        </Box>
        <Box fontSize={["14px", "20px"]} lineHeight="1">
          {name}
        </Box>
      </Box>
      <Box fontSize={["10px", "14px"]} lineHeight="1.25">
        {body}
      </Box>
    </Box>
  );
});

export default CommentItem;

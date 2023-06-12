import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

import Posts from "./Screens/Posts";

import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Posts />
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
};

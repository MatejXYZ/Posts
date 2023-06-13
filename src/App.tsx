import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import queryClient from "./api/queryClient";

import Posts from "./Screens/Posts";

import theme from "./theme";

export const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Posts />
          </ChakraProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

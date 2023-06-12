import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

import Dashboard from "./Screens/PostList";

import theme from "./theme";

export const App = () => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Dashboard />
      </ChakraProvider>
    </RecoilRoot>
  );
};

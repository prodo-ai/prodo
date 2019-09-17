import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DevTools } from "./DevTools";
import darkTheme from "./styles/theme";
import UserAppContainer from "./UserAppContainer";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  url?: string;
  children?: React.ReactNode;
  skipUserApp?: boolean;
}

export default (props: Props) => (
  <ThemeProvider theme={darkTheme}>
    <Layout>
      {!props.skipUserApp && (
        <UserAppContainer url={props.url}>{props.children}</UserAppContainer>
      )}
      <DevTools />
    </Layout>
  </ThemeProvider>
);

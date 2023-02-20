import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import UI from "ui";
import { GlobalStyle } from "ui/theme/global.style";
import { defaultTheme } from "ui/theme/theme";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UI />
    </ThemeProvider>
  );
};

export default App;

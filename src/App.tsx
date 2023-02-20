import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "ui/theme/global.style";
import { defaultTheme } from "ui/theme/theme";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

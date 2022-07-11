import { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import AppRouter from "./router/AppRouter";
import { GlobalStyles } from "./UI/Global.styles";

function App() {
  const themes = {
    colors: {
      colorBtnDanger: "#E93E44",
      colorDarkBlue: "#1B1C29",
      colorBgLight: "#DEEFE7",
      colorBgLightblue: "#D3FFED",
      colorBgWhite: "#FFFCF3",
    },
    responsive: {
      smallDevice: "768px",
    },
  };
  return (
    <Fragment>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

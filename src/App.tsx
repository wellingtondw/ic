import { ThemeProvider } from "styled-components"

import theme from "./styles/theme"

import { GlobalStyles } from "./styles/global"
import { Main } from "./components/Main"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  )
}

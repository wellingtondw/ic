import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import AppProvider from './context'

import theme from './styles/theme'
import { GlobalStyles } from './styles/global'

import Routes from './routes'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  )
}

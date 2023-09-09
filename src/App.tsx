import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartItemContextProvider } from './contexts/CartItemsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartItemContextProvider>
          <Router />
        </CartItemContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

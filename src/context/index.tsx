import React from 'react'

import { SideProvider } from './side'

const AppProvider: React.FC = ({ children }) => (
  <SideProvider>{children}</SideProvider>
)

export default AppProvider

import React from 'react'
import { CroctProvider } from '@croct/plug-react'
import { AppRoutes } from './Routes'

const App = () => {
  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <AppRoutes />
    </CroctProvider>
  )
}

export default App

import React from 'react'
import { CroctProvider } from '@croct/plug-react'
import { AppRoutes } from './Routes'

const App = () => {
  const noAccountId = '00000000-0000-0000-0000-000000000000'

  return (
    <CroctProvider appId={noAccountId}>
      <AppRoutes />
    </CroctProvider>
  )
}

export default App

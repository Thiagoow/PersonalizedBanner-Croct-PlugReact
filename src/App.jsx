import React from 'react'
import { CroctProvider } from '@croct/plug-react'
import Home from './pages/Home'

export default function App() {
  const noAccountId = '00000000-0000-0000-0000-000000000000'

  return (
    <CroctProvider appId={noAccountId}>
      <Home />
    </CroctProvider>
  )
}

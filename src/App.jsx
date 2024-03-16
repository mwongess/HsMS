import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AppContextProvider } from './context/AppContext'
import { router } from './routes/routes'

function App() {

  return (
    // <AppContextProvider>
      <RouterProvider router={router} />
    // </AppContextProvider>
  )
}

export default App

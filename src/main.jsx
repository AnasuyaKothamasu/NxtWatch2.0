import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SavedVideosProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')).render(
  <SavedVideosProvider>
    <App />
  </SavedVideosProvider>
)

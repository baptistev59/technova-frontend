import './App.css'
import TestApi from './components/TestApi'

function App() {
  console.log("🔍 VITE_API_URL =", import.meta.env.VITE_API_URL);
    return (
      <>
      <TestApi />
      </>
  )
}

export default App

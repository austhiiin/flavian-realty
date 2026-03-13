import { Route, Routes, BrowserRouter } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>

      <h1 className="text-blue-500">Initialize TailwindCSS</h1>
    </>
  )
}

export default App
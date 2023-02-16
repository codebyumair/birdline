import './App.css'
import Header from './components/Header'
import Tab from './components/Tab'
// import Hero from './pages/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Macow from './pages/Macow'
import Peigon from './pages/Peigon'
import Parrot from './pages/Parrot'
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Hero /> */}
                <Tab />
              </>
            }
          ></Route>
          <Route path="/macow" element={<Macow />}></Route>
          <Route path="/parrot" element={<Parrot />}></Route>
          <Route path="/piegon" element={<Peigon />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

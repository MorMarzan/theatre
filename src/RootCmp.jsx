import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.scss'

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { About } from './pages/About.jsx'


export function App() {

  return (
    <Router>
      <section className="main-layout full app">
        <AppHeader />
        <main className="main-layout full app">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<About />} path="/about" />
          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
  )
}




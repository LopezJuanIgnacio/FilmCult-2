import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'
import Login from './components/Login'
import UserProvider from './context'
import ActorPage from './components/ActorPage'
import TVShow from './components/TVshow'
//styles
import { GlobalStyle } from './GlobalStyle'

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="movies/:movieId" element={<Movie />} />
        <Route path="persons/:actorId" element={<ActorPage />} />
        <Route path="tv/:showId" element={<TVShow />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </UserProvider>
  </Router>
)

export default App

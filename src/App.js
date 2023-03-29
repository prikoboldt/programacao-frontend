import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { LoginPage } from './pages/Login'
import { HomePage } from './pages/Home'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<LoginPage />} exact />
            <Route path='/home' element={<HomePage />} exact />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

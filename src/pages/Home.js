import React from 'react'
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const location = useLocation();

  return (
    <div className="home-container">
      <h2>Olá, {location.state.email} </h2>
    </div>
  )
}
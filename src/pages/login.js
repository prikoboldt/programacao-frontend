import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate();

  const redirectToHome = () => navigate('/home', { state: { email: email } })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email)
    console.log(pass)
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit} >
        <label htmlFor="email">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="email@teste.com" id="email" name="email" />
        <label htmlFor="password">Senha</label>
        <input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
        <button type="submit" onClick={() => redirectToHome()}>Entrar</button>
      </form>
    </div>
  )
}
import React, { useState } from "react"

export const LoginPage = () => {
  const [ email, setEmail ] = useState( '' )
  const [ pass, setPass ] = useState( '' )
  const desable = email && pass

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log( email )
    console.log( pass )
  }

  return (
    <form className="login-form" onSubmit={ handleSubmit }>
      <label for="email">Email</label>
      <input value={ email } onChange={ ( e ) => setEmail(e.target.value) } type="email" placeholder="email@teste.com" id="email" name="email"/>
      <label for="password">Senha</label>
      <input value={ pass } onChange={ ( e ) => setPass(e.target.value) }type="password" placeholder="****" id="password" name="password"/>
      <button type="submit" desable={ desable }>Entrar</button>
    </form>
  )
}
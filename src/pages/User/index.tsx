import React from 'react'
import './index.scss'
import MyInput from '../../components/MyInput'

export default function UserPage() {

  // Carregar os dasdos para atualizar o usuário

  const [name, setName] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  let confirmPass = ''

  function save() {
    if (name === null || name.trim() === '') {
      alert('Nome do usuário é obrigatório')
      return
    }
    if (username === null || username.trim() === '') {
      alert('Login do usuário é obrigatório')
      return
    }
    if (password === null || password.trim() === '') {
      alert('Senha do usuário é obrigatório')
      return
    }
    if (password !== confirmPass) {
      alert('Senha não são iguais')
      return
    }

    alert('usuário salvo com sucesso!')
  }

  return (
    <div className='user-page'>
      <header>
        Página de usuário
      </header>

      <main>
        
        <MyInput id='name' label='Nome' value={name} change={setName}/>

        <MyInput id='username' label='Login' value={username} change={setUsername}/>

        <MyInput id='password' label='Senha' type='password' change={setPassword}/>

        <MyInput id='confirmPass' label='Confirmar senha' type='password' change={value => confirmPass = value}/>
        
      </main>

      <footer>
        <button onClick={save}>Salvar</button>
      </footer>
    </div> 
  )
}
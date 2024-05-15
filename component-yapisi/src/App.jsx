import './App.css'
import Login from './components/login/Login'
import { users } from './components/login/Login' //export ifadesi ile import edildi ve sadece belirli kısım, süslü içinde yazılır

function App() {

  console.log(users)
  
  return (
    <>
      <Login />
    </>
  )
}

export default App

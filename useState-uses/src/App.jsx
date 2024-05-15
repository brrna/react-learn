import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("Jane");
  const [names, setNames] = useState(["Robert", "Nancy", "Denise", "Georgia"]);
  const [userInfo, setUserInfo] = useState({ username: "brrna", password: "1212" });
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  console.log(names);

  const handleName = () => {
    setFirstName("Joe")
  }

  const handleAdd = () => {
    setCount((count + 1))
  }

  const handleSub = () => {
    if(count > 0){
      setCount((count - 1))
    }
  }

  return (
    <div>
      <div>{firstName}</div>
      <div>
        <button onClick={handleName} >İsmi Değiştir</button>
      </div>
      <hr />
      <div>
        {names.map((name, index) => (
          <div key={index} >{name}</div>
        ))}
      </div>
      <hr />
      <div>
        {userInfo.username} {userInfo.password}
      </div>
      <hr />
      <div>
        {show ? <div>{userInfo.username}{userInfo.password}</div> : "bilgileri gösterme"}
      </div>
      <hr/>
      <div>
        <div>{count}</div>
        <button onClick={handleAdd} >Arttır</button>
        <button onClick={handleSub} >Azalt</button>
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const  [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("yalnızca bşr kez çalışır")
  }, []) //boş array sayesinde sadece bir kez çalışması sağlanır

  useEffect(() => {
    console.log("sayfa ilk render edildiğinde ve name statei değiştiğinde çalışır")
  }, [name])

  useEffect(() => {
    console.log("sayfa ilk render edildiğinde ve lastName statei değiştikten sonra çalılır")
  }, [lastName])

  return (
    <div>
      <div>
        <button onClick={() => setName("Jane")} >
          Adı değiştir
        </button>
      </div>
      <div>
        <button onClick={() => setLastName("Doe")} >
          Soyadı değiştir
        </button>
      </div>
    </div>
  )
}

export default App

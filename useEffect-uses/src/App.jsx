import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const  [lastName, setLastName] = useState("");

  //bu useEffect herhangi bir parametre olmadığı için sayfadaki her aksiyonda render olur
  useEffect(() => {
    console.log("her zaman çalışır")
  })

  //boş array olduğu için sadece ilk ernder edildiğinde çalışır
  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
  }, []) // veri tabanından ürünleri getir ve listele

  useEffect(() => {
    console.log("sayfa ilk render edildiğinde ya da name statei değiştiğinde çalışır")
  }, [name])

  useEffect(() => {
    console.log("sayfa ilk render edildiğinde ya da lastName statei ya da name statei değiştikten sonra çalılır")
  }, [name, lastName])

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

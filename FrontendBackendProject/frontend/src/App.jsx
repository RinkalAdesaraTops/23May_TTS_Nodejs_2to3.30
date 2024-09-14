import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [name,setName] = useState("")
  const [data,setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get("http://localhost:4000/category")
            .then((res)=> setData(res.data.result))
    }
    fetchData();
  }); 
  const saveData = async(e)=>{
    e.preventDefault()
    const response = await axios.post("http://localhost:4000/category/addcat",{name})
            .then((res)=> setData(res.data.result))          
  }
  // useEffect(async()=>{
  //     await axios.get("http://localhost:4000/category")
  //       .then((res)=> setData(res.data.result))
  // },[])
  return (
    <>
      <h3>Front-End With Backend Example</h3>
      <form action="#" method='post' onSubmit={saveData}>
        Category :
          <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
          <br />
          <input type="submit" value="Save" />
      </form>
    <ul>
      {
        data.map((i)=>{
          return (
            <li> {i.name} </li>
          )
        })
      }
    </ul>
    </>
  )
}

export default App

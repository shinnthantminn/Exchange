import { createContext, useEffect, useState } from 'react'
import Exchange from './Components/Exchange'

export const Context = createContext()

function App() {
  const [cur, setCur] = useState({})
  const [price, setPrice] = useState('')
  const [condi, setCondi] = useState(false)
  const [tb, setTb] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:3004/data')
      let res = await result.json()

      setCur(res.rates)
    }
    fetchData()
  }, [])

  const receive = (e) => {
    setPrice(e)
    setCondi(!condi)
  }

  const forTable = (x, y, z, a) => {
    let date = new Date()
    let dataSt = `${date.toLocaleDateString()},${date.toLocaleTimeString()}`

    setTb([...tb, { dataSt, x, y, z, a }])
  }

  const clear = () => {
    setTb([])
  }

  return (
    <Context.Provider
      value={{ cur, receive, price, condi, forTable, tb, clear }}
    >
      <div className=" min-h-[100vh] max-w-full">
        <Exchange />
      </div>
    </Context.Provider>
  )
}

export default App

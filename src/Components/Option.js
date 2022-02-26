import { useContext, useEffect, useState } from 'react'
import { Context } from '../App'

function Option({ text, value, price }) {
  const [opt, setOpt] = useState('')
  const [curr, setCurr] = useState('')
  const seter = useContext(Context)

  useEffect(() => {
    if (opt === '') return
    price({ opt, curr })
  }, [opt])

  useEffect(() => {
    setOpt('')
  }, [seter.condi])

  return (
    <div>
      <label
        htmlFor="currency"
        className="text-4xl font-bold text-gray-500 block mb-2"
      >
        {text}
      </label>
      <select
        value={opt}
        onBlur={(e) => {
          setOpt(e.target.value)
          setCurr(e.target.options[e.target.options.selectedIndex].textContent)
        }}
        onChange={(e) => {
          setOpt(e.target.value)
          setCurr(e.target.options[e.target.options.selectedIndex].textContent)
        }}
        name="currency"
        id="currency"
        className="appearance-none px-16 py-1 rounded outline-0 duration-500 focus:shadow-3xl border border-black"
      >
        <option value="">Select</option>
        {Object.keys(value).map((i, index) => (
          <option key={index} text={i} value={value[i].replace(',', '')}>
            {i}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Option

import { useContext, useEffect, useState } from 'react'
import { Context } from '../App'

function InputForm({ text }) {
  const [value, setValue] = useState('')
  const context = useContext(Context)

  useEffect(() => {
    text(value)
  }, [value])

  useEffect(() => {
    setValue('')
  }, [context.condi])

  return (
    <div>
      <label
        className="text-4xl font-bold text-gray-500 block mb-2"
        htmlFor="input"
      >
        Input
      </label>
      <input
        value={value}
        type="number"
        autoComplete="off"
        className=" border pr-2 border-gray-500 py-1 appearance-none rounded outline-0 duration-500 focus:shadow-3xl text-right"
        placeholder="0.00"
        name="input"
        id="input"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default InputForm

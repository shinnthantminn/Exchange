import { useContext, useState } from 'react'
import { Context } from '../App'
import InputForm from './InputForm'
import Option from './Option'

function Form() {
  const [lef, setLef] = useState([])
  const [rig, setrig] = useState([])
  const [print, setPrint] = useState('')
  const adder = useContext(Context)

  const left = (e) => {
    setLef([e.opt, e.curr])
  }

  const right = (e) => {
    setrig([e.opt, e.curr])
  }

  const text = (e) => {
    setPrint(e)
  }

  const calc = () => {
    let res = ((print * lef[0]) / rig[0]).toFixed(2)
    adder.receive(res)
    return res
  }

  const submiter = (e) => {
    e.preventDefault()
    if (print === '' || lef[0] === '' || rig[0] === '') return
    calc()
    adder.forTable(calc(), print, lef[1], rig[1])
  }

  return (
    <>
      <form
        className="sm:flex flex-wrap justify-between items-center"
        onSubmit={submiter}
      >
        <InputForm text={text} />

        <Option text="From" value={adder.cur} price={left} />

        <Option text="To" value={adder.cur} price={right} />

        <input
          type="submit"
          className="btn mt-11 w-[100%] lg:w-fit"
          value="Calculate"
        />
      </form>
    </>
  )
}

export default Form

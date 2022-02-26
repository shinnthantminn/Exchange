import { useContext } from 'react'
import { Context } from '../App'

function Clear() {
  const cle = useContext(Context)

  return (
    <>
      <button className="btn w-full mt-5" onClick={cle.clear}>
        Clear Record
      </button>
    </>
  )
}

export default Clear

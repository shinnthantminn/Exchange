import Logo from '../Img/Logo.png'
import { Context } from '../App'
import { useContext } from 'react'

function Header() {
  let value = useContext(Context)

  return (
    <div className="header mb-10">
      <div className="flex items-center space-x-3 text-4xl ">
        <img className="w-16" src={Logo} alt="" />
        <h1>MMEx</h1>
      </div>
      <div className="text-5xl">
        <p>{value.price === '' ? '0.00' : value.price}</p>
      </div>
    </div>
  )
}

export default Header

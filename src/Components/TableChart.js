import { useContext } from 'react'
import { Context } from '../App'
import Clear from './Clear'

function TableChart() {
  let pop = useContext(Context)
  let arr = pop.tb

  if (arr.length !== 0) {
    return (
      <div className=" w-full mt-5 text-gray-600">
        <table className="table-auto w-full border-2">
          <thead className=" bg-teal-200 border-b-[2.1px] border-b-black ">
            <tr className="text-4xl border-2 text-left">
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th className="text-right">Result</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i, index) => (
              <tr className="" key={index}>
                <td>{i.dataSt}</td>
                <td>{`${i.y}${i.z}`}</td>
                <td>{i.a}</td>
                <td className="text-right">{i.x}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Clear />
      </div>
    )
  } else {
    return <h1 className="text-center mt-10 text-2xl font-bold">No Record</h1>
  }
}

export default TableChart

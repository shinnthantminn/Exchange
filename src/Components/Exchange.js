import Form from './Form'
import Header from './Header'
import TableChart from './TableChart'

function Exchange() {
  return (
    <div className=" w-[95%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%] mx-auto">
      <Header />
      <Form />
      <TableChart />
    </div>
  )
}

export default Exchange

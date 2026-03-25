import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'
import PaginationButton from './components/PaginationButton'


const App = () => {

  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)

  async function fetch() {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    setData(res.data)
    console.log(res.data);
  }

  useEffect(() => {
    fetch();
  }, [index])

  function previous() {
    if (index > 1)  {

      setIndex(index - 1);
      setData([]);
    }
  }
  function next() {
    setData([]);
    setIndex(index + 1);
  }
  let printData = <h3 className='text-zinc-600 text-xl font-bold absolute left-1/2 top-1/2'>Loading...</h3>

  if (data.length > 0) {
    printData = data.map((elem, idx) => {
      return <Card key={idx} elem={elem}></Card>
    })

  }

  return (
    <>
      <div className='flex flex-col items-start justify-center overflow-hidden p-5'>
        <div className='grid grid-cols-4  justify-center items-center gap-7 mt-8 w-full'>

          {printData}

        </div>

        <div className='w-full m-10 flex justify-center items-center gap-4'>
          <PaginationButton label='Prev' onClick={previous} disabled={index===1}></PaginationButton>
          <h5 className='text-xl text-white font-bold'>Page {index}</h5>
          <PaginationButton label='Next' onClick={next} disabled={false}></PaginationButton>
        </div>
      </div>


    </>

  )
}

export default App

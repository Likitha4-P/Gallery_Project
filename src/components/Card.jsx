import React from 'react'

const Card = (props) => {

  return (
    <div>
      <a  href={props.elem.url} target='_blank' className='bg-zinc-400 rounded-2xl py-2 flex flex-col justify-center items-center'>
        <img src={props.elem.download_url} alt="img" className='w-80 h-56 object-cover rounded-2xl' />
        <h5 className='font-bold text-l'>{props.elem.author}</h5>
      </a>
    </div>
  )
}

export default Card

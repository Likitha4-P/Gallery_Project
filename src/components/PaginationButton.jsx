import React from 'react'

const PaginationButton = ({ label,onClick,disabled }) => {
  return (
    <button

          style={{opacity:disabled?0.5:1,cursor:disabled?'not-allowed':'pointer'}}
          disabled={disabled}
          className='bg-amber-500 px-4 py-2 rounded-2xl font-bold text-zinc-800 active:bg-green-500 active:scale-95' onClick={onClick}>{label}</button>
  )
}
    
export default PaginationButton

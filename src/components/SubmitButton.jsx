import React from 'react'

const SubmitButton = (props) => {
  return (
    <button
    disabled={props.isLoading}
    type='submit'
    onClick={props.uses === props.limit ? (e)=>{ e.preventDefault(); props.navigate('/pricing-plans')} : ()=>{return false}}
    className={`bg-[#00df9a] rounded-md text-lg font-medium mx-auto my-4 p-3 text-white ${props.uses < props.limit ? props.isLoading ? 'disabled' : '' : ''}`}
    >
        {props.uses < props.limit ? props.isLoading ? 'Loading...' : props.text || 'Generate Description' : 'Upgrade'}
    </button>
  )
}

export default SubmitButton
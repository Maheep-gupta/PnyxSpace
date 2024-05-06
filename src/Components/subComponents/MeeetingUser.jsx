import React from 'react'

function MeeetingUser({userName}) {
    return (
        <div className='h-36 w-36 border flex items-center justify-center text-3xl rounded-lg  '>
        {userName}
    </div>
  )
}

export default MeeetingUser
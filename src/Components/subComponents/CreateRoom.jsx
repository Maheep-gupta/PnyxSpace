import React from 'react'

function CreateRoom() {
  return (
      <>
           <>
            <div className='bg-black border-2 border-mobileBg h-44 w-44 rounded-lg text-white p-5 flex flex-col justify-between hover:scale-105 transition-all duration-300'>
                <div className='flex items-center h-5 w-full justify-between'>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 448 512"><path fill="#b2b2b2" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span>
                </div>
                <footer className='open-sans'>Create New Room</footer>
            </div>
        </>
      </>
  )
}

export default CreateRoom
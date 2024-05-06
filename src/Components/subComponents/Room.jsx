import React from 'react'

function Room({roomName}) {
    return (
        <>
            <div className='bg-mobileBg h-44 w-44 rounded-lg text-white p-5 flex flex-col justify-between border-[0.5px] border-grayText hover:scale-105 transition-all duration-300'>
                <div className='flex items-center h-5 w-full justify-between'>
                    <span>🏠</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" height='15' width="5" viewBox="0 0 128 512"><path fill="#b2b2b2" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg></span>
                </div>
                <footer className='open-sans h-[48px]'>{ roomName}</footer>
            </div>
        </>
    )
}

export default Room
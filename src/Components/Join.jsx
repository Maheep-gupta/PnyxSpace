import React, { useState } from 'react'

function Join() {
    const [roomId, setRoomId] = useState("")
    // console.log(roomId);
    return (
        <>
            <div className='flex justify-center h-5/6'>

                <div className='pl-10 flex justify-center flex-col h-full'>
                    <div className='exo-2 text-3xl text-grayText '><h1>Join Existing Meeting</h1></div>
                    <div className='flex flex-row gap-5 flex-wrap pt-5'>
                        <input spellcheck="false" autocorrect="false" width="1" placeholder="Enter meeting ID or paste meeting URL" value={roomId} onChange={(e)=>setRoomId(e.target.value)} className='bg-[#333333] border border-[#ffffff33] h-[32px] w-96 rounded-lg pl-2' />
                        <button type="submit" width="90" className= ' w-24 bg-white text-black rounded-lg font-normal'>Join</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Join
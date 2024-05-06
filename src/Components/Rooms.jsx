import React from 'react'
import Room from './subComponents/Room'
import CreateRoom from './subComponents/CreateRoom'
import WorkspaceTitle from './subComponents/WorkspaceTitle'
import UserIcon from './subComponents/UserIcon'

function Rooms() {
    return (
        <>
            
            <div className='flex justify-center mt-5'>

                <div className='flex flex-col '>
                    <div className='exo-2 text-3xl text-grayText '><h1>Rooms</h1></div>
                    <div className='flex flex-row gap-5 flex-wrap pt-5'>
                        <Room roomName="Brain Stroming Room" />
                        <Room roomName="My Team" />
                        <Room roomName="Work Conclusion Room" />
                        <CreateRoom />
                    </div>
                    <div className=' transition-all duration-300 w-fit rounded-3xl p-1  flex flex-row items-center gap-1 mt-5 opacity-50 hover:opacity-100 hover:bg-[#606060]' >
                        <span ><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 448 512"><path fill="#b2b2b2" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg></span>
                        <span className='text-xs'><span>Create Workspace
                        </span> </span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Rooms
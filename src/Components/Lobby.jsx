import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import userPageImage from '../assets/userPageImage.jpeg'
import Room from './subComponents/Room'
import { useMotionValueEvent, useScroll } from "framer-motion"
import CreateRoom from './subComponents/CreateRoom'
import WorkspaceTitle from './subComponents/WorkspaceTitle'
import UserIcon from './subComponents/UserIcon'
// import AsideNav from './subComponents/AsideNav'
import Rooms from './Rooms'
import Recaps from './Recaps'
import Join from './Join'
function Lobby() {
    document.title = "Lobby";
    // const { scrollY } = useScroll()
    const [navValue, setNavValue] = useState("rooms")
    return (
        <>
            {/* Mobile View */}
            <main className='h-full md:hidden'>
                <nav className='flex justify-evenly mt-3 absolute top-0 w-full '>
                    <span className='text-xs bg-mobileBg text-white p-2 open-sans rounded-md  '>New Meeting</span>
                    <span className='text-xs bg-mobileBg text-white p-2 open-sans rounded-md '>Schedule</span>
                    {/* On active the color will be lighter than this */}
                    <span className='text-xs bg-mobileBg text-white p-2 open-sans rounded-md '>Join Meeting</span>

                    <UserIcon />
                </nav>
                <div className='h-[390px]  w-full bg-changed '>
                </div>
                <div className='bg-black h-full text-white relative top-0 '>
                    <WorkspaceTitle />
                    <div className='flex flex-wrap gap-3 p-5 justify-around'>
                        {/* Rooms */}
                        <Room />
                        <Room />
                        <Room />
                        <CreateRoom />
                    </div>
                </div>

            </main>
            {/* Desktop */}
            <div className='md:h-screen md:w-screen hidden md:flex md:bg-[#1C1C1E] '>
                <aside className='h-full w-56 bg-[#262627] text-white font-semibold'>
                    <div className='relative top-10 bg-black m-3 border border-grayText p-2 rounded-md text-[#AFB1B2] space-y-2 '>
                        <div className='space-y-2 border-b border-grayText pb-2 '>
                            <span className='flex flex-row items-center gap-2 bg-[#ABA3FF] hover:bg-[#746bd3] p-2 rounded-lg text-black' ><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 5.5L12.25 9.5L16.75 13.5V5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><rect x="1.25" y="3.5" width="11" height="11" rx="2" stroke="currentColor"></rect><path d="M6.75 6.25V11.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 9H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span className="text-[13px]">New Meeting</span>
                            </span>
                            <button onClick={() => setNavValue("join")} className={navValue === "join" ? 'flex flex-row items-center gap-2 w-full bg-[#ffffff1a] p-2 rounded-lg text-white' : ' flex w-full flex-row items-center gap-2  p-2 rounded-lg text-[#AFB1B2]'} >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.49422V5.12259L10.9231 2V17L4 13.8774V9.49422Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M12.7939 3.78076H14.5518V15.2187H12.7939" stroke="currentColor" stroke-linejoin="round"></path><path d="M8.43697 9.50023C8.43697 9.73388 8.24756 9.9233 8.0139 9.9233C7.78024 9.9233 7.59082 9.73388 7.59082 9.50023C7.59082 9.26657 7.78024 9.07715 8.0139 9.07715C8.24756 9.07715 8.43697 9.26657 8.43697 9.50023Z" fill="currentColor" stroke="currentColor"></path></svg>
                                <span className="text-[13px]" >

                                    Join
                                </span>
                            </button>
                        </div>

                        <div className='space-y-2 '>
                            <button onClick={() => setNavValue("recaps")} className={navValue === "recaps" ? 'flex flex-row items-center gap-2 w-full bg-[#ffffff1a] p-2 rounded-lg text-white' : ' flex w-full flex-row items-center gap-2  p-2 rounded-lg text-[#AFB1B2]'}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="14.0001" height="14" rx="3" stroke="currentColor"></rect><rect x="6.6665" y="6.6665" width="4.6666" height="4.66667" rx="2.3333" fill="currentColor"></rect></svg>
                                <span className="text-[13px]">Recaps</span>
                            </button>


                            <button className={navValue === "rooms" ? 'flex flex-row items-center gap-2 w-full bg-[#ffffff1a] p-2 rounded-lg text-white' : ' flex w-full flex-row items-center gap-2  p-2 rounded-lg text-[#AFB1B2]'} onClick={() => setNavValue("rooms")}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="5.57143" height="5.57143" rx="1" stroke="currentColor"></rect><rect x="10.4287" y="2" width="5.57143" height="5.57143" rx="1" stroke="currentColor"></rect><rect x="2" y="10.4287" width="5.57143" height="5.57143" rx="1" stroke="currentColor"></rect><rect x="10.4287" y="10.4287" width="5.57143" height="5.57143" rx="1" stroke="currentColor"></rect></svg>
                                <span className="text-[13px]" >

                                    Rooms
                                </span>
                            </button>
                        </div>
                    </div>
                </aside>
                <main className='text-white w-full max-h-full '>
                    <div className='flex w-full justify-end gap-5 pr-5 pt-3'>
                        <WorkspaceTitle />
                        <UserIcon />
                    </div>

                    {navValue == 'rooms' ? <Rooms /> : navValue == "recaps" ? <Recaps /> : navValue === "join" ? <Join /> : null}
                </main>
                {/* <Rooms /> */}
            </div>
        </>
    )
}

export default Lobby
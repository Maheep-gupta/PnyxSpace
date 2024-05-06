import React, { useState } from 'react'
import CameraGrid from './CameraGrid'
import MeetingImageSharing from './MeetingImageSharing'
import ShareMeeting from './ShareMeeting'

function MeetingRoom() {
    const [options, setOptions] = useState('meeting')
    return (
        <>
            <section className='bg-mobileBg text-white p-2 min-h-screen flex flex-col justify-between'>

                <header className='flex justify-between h-8 text-center'>
                    <div className='flex items-center justify-center gap-1'>

                        <span><svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' viewBox="0 0 448 512"><path fill="#ffffff" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></span>
                        <span>Room Name</span>
                    </div>
                    <div className='space-x-2'>

                        <button className='bg-red-500 rounded-2xl w-16 h-8 text-center'>Leave</button>
                        <button className='bg-black p-2 rounded-full'><svg height='16' width='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z" /></svg></button>
                    </div>
                </header>
                <nav className=''>
                    <div className='flex justify-evenly text-grayText border-b border-grayText'>
                        <button onClick={() => setOptions("meeting")} className={options == 'meeting' ? 'text-white  border-b-[3px] p-1' : null} >Meeting</button>
                        <button onClick={() => setOptions("notes")} className={options == 'notes' ? 'text-white  border-b-[3px] p-1' : null} >Notes</button>
                        <button onClick={() => setOptions("images")} className={options == 'images' ? 'text-white  border-b-[3px] p-1' : null} >Images</button>
                        <button onClick={() => setOptions("screenshare")} className={options == 'screenshare' ? 'text-white  border-b-[3px] p-1' : null} >ScreenShare</button>
                    </div>
                </nav>
                <main className='mt h-1/2'>
                    {options==='meeting'?<CameraGrid/>:options==='image'?<a/>:null}
                </main>
                <ShareMeeting/>
                <footer className=' bottom-0'  >
                    <div className='flex mb-3 w-full justify-end space-x-2'>
                        <div className='flex gap-2 items-center bg-[#474646] p-2 rounded-3xl w-full justify-evenly'>
                            <span className=''>👋</span>
                            <span className=''>👋</span>
                            <span className=''>👍</span>
                            <span className=''>🎉</span>
                            <span className=''></span>
                            <span className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' viewBox="0 0 512 512"><path fill='#fff' d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg></span>
                        </div>
                        <div className='flex space-x-3 w-full justify-end'>

                            <div className=' bg-[#474646] p-2 rounded-full h-10 w-10 text-center  '>
                                Aa
                            </div>
                            <div className=' bg-[#474646] p-2 rounded-full h-10 w-10 flex justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' viewBox="0 0 512 512"><path fill='#fff' d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z" /></svg>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-evenly'>

                        <div className='flex flex-col justify-center items-center'>
                            <button>

                                <svg height='16' width='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
                            </button>
                            <span>Mute</span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' viewBox="0 0 640 512"><path fill="#ffffff" d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" /></svg>
                            </button>
                            <span>Audio</span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <button>
                                <svg height='16' width='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                            </button>
                            <span>Camera</span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <button>
                                <svg height='16' width='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill='#ffffff' d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                            </button>
                            <span>Participants</span>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='16' width='16'><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                            </button>
                            <span>More</span>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default MeetingRoom
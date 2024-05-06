import React from 'react'

function WorkspaceTitle() {
    return (
        <span className='flex flex-row gap-3  items-center pl-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" viewBox="0 0 20 18"><path fill="#F16BBF" d="M10 4V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-8zM4 16H2v-2h2v2zm0-4H2v-2h2v2zm0-4H2V6h2v2zm0-4H2V2h2v2zm4 12H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V6h2v2zm0-4H6V2h2v2zm9 12h-7v-2h2v-2h-2v-2h2V8h-2V6h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2V8zm0 4h-2v2h2v-2z"></path></svg>
            <span className='text-xs open-sans'>Maheep Gupta's Personal Workspace</span>
        </span>
    )
}

export default WorkspaceTitle
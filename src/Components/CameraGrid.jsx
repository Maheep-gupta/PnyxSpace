import React from 'react'
import MeeetingUser from './subComponents/MeeetingUser'

function CameraGrid() {
    return (
        <>
            <div className='flex flex-wrap justify-evenly gap-2 h-full'>
                <MeeetingUser userName='P1' />
                <MeeetingUser userName='P2' /> 
                <MeeetingUser userName='P3' />
                <MeeetingUser userName='P4' />

            </div>
        </>
    )
}

export default CameraGrid
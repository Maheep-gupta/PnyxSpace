import React from 'react'
import logo from '../assets/logo.png'
import googleLogo from '../assets/googleLogo.png'
function LoginPage() {
  return (
    <>
      <main className='p-5 flex flex-col justify-between h-[100vh]'>
        <div className='w-[360px]'>
          <img src={logo} className='w-full mt-8' alt='PnyxSpace logo' />
        </div>
        <div className='pt-10 flex flex-col h-full justify-between'>


          <div className='text-3xl flex flex-col gap-2 font-bold'>
            <span className=''>
              Continue
            </span>
            <span className='text-grayText '>
              to Sign up / Log in
            </span>
          </div>
          <div className='flex flex-row border-2 p-2 rounded-lg border-gray-400 justify-between items-center h-16'>
            <div className='flex flex-row gap-x-3'>

              <span>
                <img src={googleLogo} alt="google logo" />
              </span>
              <span className='font-semibold'>Continue with Google
              </span>
            </div>
            <div className=' w-10 h-full flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" height='22' width="10" viewBox="0 0 128 512"><path fill="#b2b2b2" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg>
            </div>
          </div>
        </div>
        {/* <div>
          <span>Miro sign-in options:</span>
          <span></span>
        </div> */}
        <footer className='p-5 text-sm text-grayText'>
          <span>By signing up, you agree to our </span>
          <span className='font-semibold text-gray-700'>Privacy Policy </span>
          <span>and </span>
          <span className='font-semibold text-gray-700'>Terms of Use </span>
        </footer>
      </main>

    </>
  )
}

export default LoginPage
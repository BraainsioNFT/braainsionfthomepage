import React, { Component } from 'react'

export class TopMenu extends Component {
  render() {
    return (
      <div className=" bg-white flex-none min-h-screen bg-grass">
        <div className="text-center mt-20">
          <h1 className="text-7xl sm:text-8xl">BRAAINS.IO</h1>
          <h2 className="text-3xl sm:text-4xl"> Survive the apocalypse with style</h2>
        </div>
        <div className="w-fit mx-auto">
          <div className="w-fit mx-auto">
            <button className="transition bg-discord-blue-100 text-zinc-50 hover:bg-stone-900 hover:text-gray-50 hover:border-b-black font-bold py-2 px-4 rounded inline-flex items-center border-b-4 border-b-discord-blue-200 mt-20 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-current w-4 h-4 mr-2" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
              <span>Join our Discord</span>
            </button>
            <button className="transition bg-discord-blue-100 text-zinc-50 hover:bg-stone-900 hover:text-gray-50 hover:border-b-black font-bold py-2 px-4 rounded inline-flex items-center border-b-4 border-b-discord-blue-200 mt-20 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-current w-4 h-4 mr-2" viewBox="0 0 16 16">
                <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
              </svg>
              <span>Play Game</span>
            </button>
          </div>
          <button className="transition bg-discord-blue-100 text-zinc-50 hover:bg-yellow-400 hover:text-discord-blue-200 hover:border-b-yellow-300 hover:scale-125 font-bold rounded items-center border-b-4 border-b-discord-blue-200 mt-3 h-20 w-full text-7xl pb-1">
            <span>MINT</span>
          </button>
        </div>
        {/* A flex whitespace */}
        <div className="h-20"></div>
      </div>
    )
  }
}

export default TopMenu
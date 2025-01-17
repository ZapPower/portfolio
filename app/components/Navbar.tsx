import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-0 py-5 sticky">
        <div className="">
            <div className="dropdown pl-40">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-4xl">David Greenberg</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li className='px-2 pl-20 text-2xl'><a>About</a></li>
            <li className='px-2 text-2xl'><a>Experience</a></li>
            <li className='px-2 text-2xl'>
                <details>
                <summary>Projects</summary>
                <ul className="p-2 text-lg absolute">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        <div className="navbar-end pr-40 pl-20">
            <a className="btn text-3xl">Contact Me</a>
        </div>
    </div>
  )
}

export default Navbar
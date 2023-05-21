/* eslint-disable jsx-a11y/anchor-is-valid */
/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Theme } from './Theme'
import { IconContext } from 'react-icons'
import { HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div class="navbar bg-base-300 justify-between">
      <p class="font-semibold text-xl"><Link to={'/'}>Work @ Aha</Link></p>
      <div>
        
        <Theme />

        <div class="dropdown dropdown-end mx-8">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <IconContext.Provider value={{ size: "3em" }}>
                <HiUser />
              </IconContext.Provider>
              
            </div>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='#'>Settings</a></li>
            <li><a href='#'>Logout</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

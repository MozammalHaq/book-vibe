import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MyChoice() {
  return (
    <>
        <button>Read</button>
        <button>Wish</button>
        <Outlet/>
    </>
  )
}

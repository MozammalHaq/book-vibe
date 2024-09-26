import React, { createContext } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export const HandleContext = createContext("")

const handleWished = id => {
  console.log(id)
  toast.success("Wished")
}
const handleRead = id => {
  console.log(id)
  toast.success("Read")
}

const handle = { handleRead, handleWished }
console.log(handle)



export default function Root() {

  return (
    <HandleContext.Provider value={handle}>
      <Toaster />
      <Header />
      <Outlet />
    </HandleContext.Provider>
  )
}

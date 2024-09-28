import React, { createContext, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export const HandleContext = createContext("")
export const WishedContext = createContext("")


export default function Root() {
  const [wishes, SetWishes] = useState([])

  const handleWished = id => {

    const preId = wishes.find(newId => newId === id);
    if (preId) {
      return toast.error("Already as wished");
    }

    SetWishes([...wishes, id])
    toast.success("Wished")
  }

  const handleRead = id => {
    toast.success("Read")
  }

  const handle = { handleRead, handleWished }

  return (
    <HandleContext.Provider value={handle}>
      <WishedContext.Provider value={wishes}>
        <Toaster />
        <Header />
        <Outlet />
      </WishedContext.Provider>
    </HandleContext.Provider>
  )
}

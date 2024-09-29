import React, { createContext, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export const HandleContext = createContext("")
export const WishedContext = createContext("")
export const ReadContext = createContext("")


export default function Root() {
  const [wishes, SetWishes] = useState([])
  const [reads, setReads] = useState([])

  const handleWished = id => {

    const preId = wishes.find(newId => newId === id);
    if (preId) {
      return toast.error("Already as wished");
    }

    SetWishes([...wishes, id])
    toast.success("Wished")
  }

  const handleRead = book => {
    const added = reads.find(read => read.bookId === book.bookId)
    if(added) {
      return toast.error("Already as Read");
    }
    setReads([...reads, book])
    toast.success("Read")
  }

  const handle = { handleRead, handleWished }

  return (
    <HandleContext.Provider value={handle}>
      <WishedContext.Provider value={wishes}>
        <ReadContext.Provider value={reads}>
          <Toaster />
          <Header />
          <Outlet />
        </ReadContext.Provider>
      </WishedContext.Provider>
    </HandleContext.Provider>
  )
}

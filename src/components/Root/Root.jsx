import React, { createContext, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { getStoredReadBook, getStoredWishedBook, saveReadBook, saveWishedBook } from '../../utility/fn';

export const HandleContext = createContext("")
export const ReadContext = createContext("")


export default function Root() {
  const [reads, setReads] = useState([])

  const handleWished = id => {

    const localId = getStoredWishedBook()
    const preId = localId.find(newId => newId === id);
    if (preId) {
      return toast.error("Already as wished");
    }

    saveWishedBook(id);
    toast.success("Wished")
  }

  const handleRead = book => {
    const readId = getStoredReadBook();
    const added = readId.find(read => read.bookId === book.bookId)
    if(added) {
      return toast.error("Already as Read");
    }
    saveReadBook(book.bookId);
    setReads([...reads, book])
    toast.success("Read")
  }

  const handle = { handleRead, handleWished }

  return (
    <HandleContext.Provider value={handle}>
      {/* <WishedContext.Provider value={wishes}> */}
        <ReadContext.Provider value={reads}>
          <Toaster />
          <Header />
          <Outlet />
        </ReadContext.Provider>
      {/* </WishedContext.Provider> */}
    </HandleContext.Provider>
  )
}

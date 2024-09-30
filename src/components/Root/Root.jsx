import React, { createContext, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { getStoredReadBook, getStoredWishedBook, saveReadBook, saveWishedBook } from '../../utility/fn';

export const HandleContext = createContext("")


export default function Root() {

  const handleWished = id => {

    const localId = getStoredWishedBook()
    const preId = localId.find(newId => newId === id);
    if (preId) {
      return toast.error("Already as wished");
    }

    saveWishedBook(id);
    toast.success("Wished")
  }

  const handleRead = id => {
    const readId = getStoredReadBook();
    const added = readId.find(loId => loId === id)
    // console.log(added)
    if (added) {
      return toast.error("Already as Read");
    }
    saveReadBook(id);
    toast.success("Read")
  }

  const handle = { handleRead, handleWished }

  return (
    <HandleContext.Provider value={handle}>
      <Toaster />
      <Header />
      <Outlet />
    </HandleContext.Provider>
  )
}

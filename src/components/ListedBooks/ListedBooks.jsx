import React, { useContext, useEffect, useState } from 'react'
import { WishedContext } from '../Root/Root';
import List from './List';

export default function ListedBooks() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("data.json").then(res => res.json()).then(data => setDatas(data))
  }, [])

  const wishId = useContext(WishedContext);

  const filteredBooks = datas.filter(book => wishId.includes(book.bookId));


  return (
    <>
      {
        filteredBooks.map(book => <List key={book.bookId} book={book} />)
      }
    </>
  )
}

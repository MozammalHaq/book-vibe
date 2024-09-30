import React, { useContext, useEffect, useState } from 'react'
// import { WishedContext } from '../Root/Root';
import List from './List';
import { getStoredWishedBook } from '../../utility/fn';

export default function ListedBooks() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("data.json").then(res => res.json()).then(data => setDatas(data))
  }, [])

  // const wishId = useContext(WishedContext);
  // console.log("Context", wishId);
  const idfromLo = getStoredWishedBook();
  console.log("Local Area", idfromLo);

  // const filteredBooks = datas.filter(book => wishId.includes(book.bookId));
  const filteredBooks = datas.filter(book => idfromLo.includes(book.bookId));


  return (
    <>
      {
        filteredBooks.map(book => <List key={book.bookId} book={book} />)
      }
    </>
  )
}

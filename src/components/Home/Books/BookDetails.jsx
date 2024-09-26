import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { HandleContext } from '../../Root/Root';



export default function BookDetails() {
  const handle = useContext(HandleContext)
  const { id } = useParams();
  const intId = parseInt(id)
  const data = useLoaderData();

  const bookData = data.find(book => book.bookId === intId);

  const { bookId, bookName, image, author, totalPages, category, tags, review, rating, publisher, yearOfPublishing } = bookData;
  const {handleRead, handleWished} = handle;

  return (
    <div className='flex gap-10 my-20'>
      <div className="flex flex-1 items-center justify-center mb-5 bg-gray-100 rounded-xl p-5">
        <img src={image} className="w-[70%]" alt="" />
      </div>
      <div className='flex-1'>
        <h2 className="text-xl font-semibold">{bookName}</h2>
        <p className="font-semibold my-2">By: {author}</p>
        <hr className="border my-3 border-gray-300" />
        <p>{category}</p>
        <hr className="border my-3 border-gray-300" />
        <p><strong>Review</strong> {review}</p>
        <ul className="flex justify-start my-4 ">
          <strong className='mr-2'>Tag</strong>{tags.map(li => <li key={li} className="rounded-full text-[#23BE0A] bg-gray-100 text-sm py-1 px-2 me-1 ">{li}</li>)}
        </ul>
        <hr className="border my-3 border-gray-300" />
        <div className='space-y-2 mb-3'>
          <p className='relative'>Number of Pages:<span className='font-semibold absolute left-44'> {totalPages}</span></p>
          <p className='relative'>Publisher:<span className='font-semibold absolute left-44'> {publisher}</span></p>
          <p className='relative'>Year of publishing:<span className='font-semibold absolute left-44'> {yearOfPublishing}</span></p>
          <p className='relative'>Rating:<span className='font-semibold absolute left-44'> {rating}</span></p>
        </div>
        <button onClick={()=> handleRead()} className="btn btn-outline btn-accent me-3">Read</button>
        <button onClick={() => handleWished(bookId)} className="btn btn-info" >Wish List</button>
      </div>
    </div>
  )
}

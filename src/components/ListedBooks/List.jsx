import React from 'react'
import { Link } from 'react-router-dom';

export default function List({ book }) {
    const { bookId, bookName, image, author, totalPages, category, tags, rating, publisher, yearOfPublishing } = book;
    return (
        <div className='flex gap-10 mb-10 border rounded-lg p-6'>
            <div className="flex w-1/4 items-center justify-center bg-gray-100 rounded-xl p-5">
                <img src={image} className="w-[70%]" alt="" />
            </div>
            <div className='w-3/4'>
                <h2 className="text-xl font-semibold">{bookName}</h2>
                <p className="font-semibold my-2">By: {author}</p>

                <ul className="flex gap-2 justify-start my-4 ">
                    <strong className='mr-2'>Tag</strong>{tags.map(li => <li key={li} className="rounded-full text-[#23BE0A] bg-gray-100 text-sm py-1 px-2 me-1 ">#{li}</li>)}
                    <p>Year of publishing: {yearOfPublishing}</p>
                </ul>
                <div className="flex gap-5">
                    <p>Publisher: {publisher}</p>
                    <p>Publisher: {totalPages}</p>
                </div>
                <hr className="border my-3 border-gray-300" />
                <div className='flex gap-5'>
                    <p className='rounded-full text-blue-700 bg-blue-100 py-1 px-2'>Categori: {category}</p>
                    <p className='rounded-full text-yellow-700 bg-yellow-100 py-1 px-2'>Rating: {rating}</p>
                    <Link to={`/book/${bookId}`}>
                        <button className='rounded-full bg-green-700 text-white py-1 px-2'>View Details</button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

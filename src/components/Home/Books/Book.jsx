import { Link } from "react-router-dom";


export default function Book({ book }) {
    const {bookId, bookName, image, author, rating, category, tags } = book;
    return (
        <Link to={`/book/${bookId}`} className="border border-gray-200 p-5 rounded-xl">
            <div className="flex items-center justify-center mb-5 bg-gray-100 rounded-xl p-5">
                <img src={image} className="w-[70%]" alt="" />
            </div>
            <ul className="flex justify-start mb-3">
                {tags.map(li => <li className="rounded-full bg-gray-100 text-sm py-1 px-2 me-1 ">{li}</li>)}
            </ul>
            <h2 className="text-xl font-semibold">{bookName}</h2>
            <p className="font-semibold my-2">By: {author}</p>
            <hr className="border-dashed my-3 border-gray-300" />
            <div className="flex justify-between">
                <p>{category}</p>
                <p>{rating}</p>
            </div>
        </Link>
    )
}

import { useEffect, useState } from "react"
import Book from "./Book";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [more, setMore] = useState(6);

    useEffect(() => {
        fetch("data.json").then(res => res.json()).then(data => setBooks(data))
    }, [])

    const handleMore = () => {
        setMore(more + 3);
    }

    console.log(more, books.length)

    return (
        <>
            <h2 className="text-3xl text-center font-bold mb-7">Books</h2>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.slice(0, more).map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
            <div className="text-center py-8">
                {
                    books.length >= more && <button className="py-2 px-3 rounded-3xl bg-orange-700 font-semibold text-white" onClick={handleMore}>More</button>
                }
            </div>
        </>
    )
}

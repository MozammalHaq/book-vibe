import { useEffect, useState } from "react"
import Book from "./Book";

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("data.json").then(res => res.json()).then(data => setBooks(data))
    }, [])

    return (
        <>
            <h2 className="text-3xl text-center font-bold mb-7">Books</h2>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.slice(0,6).map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </>
    )
}

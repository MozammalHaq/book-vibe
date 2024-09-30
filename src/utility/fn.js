const getStoredWishedBook = () => {
    const storedBook = localStorage.getItem('wished-book');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const saveWishedBook = id => {
    const storedWishBook = getStoredWishedBook();
    const exists = storedWishBook.find(wishId => wishId === id);
    if (!exists) {
        storedWishBook.push(id);
        localStorage.setItem('wished-book', JSON.stringify(storedWishBook))
    }
}

const getStoredReadBook = () => {
    const storedBook = localStorage.getItem('read-book');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const saveReadBook = id => {
    const storedReadBook = getStoredReadBook();
    const exists = storedReadBook.find(wishId => wishId === id);
    if (!exists) {
        storedReadBook.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedReadBook))
    }
}


export { getStoredWishedBook, saveWishedBook, saveReadBook, getStoredReadBook }
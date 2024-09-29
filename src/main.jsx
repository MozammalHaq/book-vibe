import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PageToRead from './components/PageToRead/PageToRead.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Root from './components/Root/Root.jsx';
import BookDetails from './components/Home/Books/BookDetails.jsx';
import MyChoice from './components/Home/MyChoice/MyChoice.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/myChoice",
        element: <MyChoice />,
      },
      {
        path: "/liBooks",
        element: <ListedBooks />
      },
      {
        path: "/ptRead",
        element: <PageToRead />,
        loader: () => fetch("/data.json")
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("/data.json")
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

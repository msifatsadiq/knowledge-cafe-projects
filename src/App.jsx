
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);

  const handelAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handelMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setreadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelMarkAsRead={handelMarkAsRead} handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App

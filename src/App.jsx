
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState(0)

  const handelAddToBookmark = blog => {
    setBookmarks(bookmarks + 1)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmarks bookAdd={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

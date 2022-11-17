import PostLists from './features/posts/PostLists'
import AddPostForm from './features/posts/AddPostForm'
import './App.css'

function App() {

  return (
    <main className='App'>
      <AddPostForm />
      <PostLists />
    </main>
  )
}

export default App

import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"

const PostLists = () => {
    const posts = useSelector(selectAllPosts)

    const postElements = posts.map(post => {
        return <article key={post.id}>
                 <h3>{post.title}</h3>
                 <p>{post.content.substring(0, 100)}</p>
               </article>
    })

  return (
    <section>
        <h2>Posts</h2>
        {postElements}
    </section>
  )
}

export default PostLists

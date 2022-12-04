import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionsButtons from "./ReactionsButtons"
import { Link } from "react-router-dom"
// import React from "react"
// import { useMemo } from "react"
import {useSelector} from "react-redux"
import {selectPostById} from "./postsSlice"

const PostsExcerpt = ({postId}) => {
  const post = useSelector(state => selectPostById(state, postId))

  return (
    <article>
        <h2>{post.title}</h2>
        <p className="excerpt">{post.body.substring(0, 75)}...</p>
        <p className="postCredit">
            <Link to={`post/${post.id}`}>View Post </Link>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>
        </p>
         <ReactionsButtons post={post}/>
    </article>
  )
}

// PostsExcerpt = useMemo(PostsExcerpt) //it allows not to re-render components if incoming props do not change

export default PostsExcerpt
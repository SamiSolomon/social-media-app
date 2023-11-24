import Profile from '../posts/profile'
import Post from '../posts/posts'
import { Posts } from '../dummyData'

export default function Feed() {
  return (
     <div className='col-span-2'>
       <Profile />
       {Posts.map((post)=> (
           <Post key={post.id} post={post} />
       ))}
     </div>
  )
}

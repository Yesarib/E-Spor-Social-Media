import React from 'react'
import Share from '../Share/Share'
import Post from '../Posts/Post'
import { Posts } from '../../datas/Posts'


const Flow = () => {
  return (
    <div>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
    </div>
  )
}

export default Flow
import React, { useState, useEffect } from 'react';

function PostList(){
    const[posts,setposts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>
            response.json())
        .then(data=>setposts(data))
    },[])
return(<div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
);

}
export default PostList;
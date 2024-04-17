import React, { useState, useEffect } from 'react';

function PostList(){
    const[posts,setposts]=useState([]);
    const[loading,setLoading]=useState('true');
    const[error,setError]=useState('');
    useEffect(()=>{
 
        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok){
                    throw new Error('Something went wrong');
                }
                const data = await response.json();
                setposts(data);
                setLoading(false);
            }
            catch(err){
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();

    },[]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
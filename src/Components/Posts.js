import React from 'react';
import Post from './Post';

function Posts(props) {
	return(
		<ul className='post-grid'>
			{props.posts.map((post, idx) => <Post key={idx} post={post} />)}
		</ul>
	)
}


export default Posts
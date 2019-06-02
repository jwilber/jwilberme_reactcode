import React from 'react';

function Post(props) {
	const blogpost = props.post
	return(
		<li className='post'>
			<a href={blogpost.link}>
				{blogpost.blogpost}
			</a>
		</li>
	)
}

export default Post
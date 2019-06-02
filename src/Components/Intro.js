import React from 'react';
import {Link} from 'react-router-dom';

class Intro extends React.Component {

	render(){
		return(
			<div className='intro'>
				<h1 className='intro-title'>jared wilber</h1>
				<div className="topnav" id="myTopnav">
				 	<Link className="active data_science" to="/">projects</Link>
				 	<Link className="active software" to="/blog">blog</Link>
				 	<Link className="information" to="/about">about me</Link>
				 	{/*<a href="javascript:void(0);" className="icon" onClick="myFunction()">
				    	<i className="fa fa-bars"></i>
				 	</a>*/}
				</div> 
				 <hr className="hr-width"/>
			</div>
		)
	}
}

export default Intro

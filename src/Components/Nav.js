import React from 'react';

function Nav(){
	return (
		<div className="topnav" id="myTopnav">
		  <a href="/" className="active">projects</a>
		  <a href="" class="active">about me</a>
		  <a href="">blog</a>
		  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
		    <i className="fa fa-bars"></i>
		  </a>
		</div> 
	)

}

export default Nav;
import React from 'react';
import {Route} from 'react-router-dom';
import Intro from './Intro';
import Projects from './Projects';
import Axis from './Axis';
import Posts from './Posts';
import Nav from './Nav';
import About from './About'
import Jared from './Jared'

import blocks from "../Images/blocks.png";
import berkeley from "../Images/berkeley.png";
import gnarly from "../Images/gnarly.jpg";
import nest from '../Images/nest.png';
import permtest from "../Images/permtest.jpeg";
import pomo from '../Images/pomo.jpg';

class Main extends React.Component {

	constructor() {
		super()
		this.state = {
			projects: [{
				link: "https://pudding.cool/2018/06/skate-music/",
				img: gnarly,
				title: "The Good, the Rad, and the Gnarly",
				description: "'An exploration into the music of skateboarding'. Visual essay I created for <b>The Pudding</b>."
			},
			{
				link: "./permutationtest",
				img: permtest,
				title: "The Permutation Test",
				description: "A 'scrolly-telling' visual tutorial of statistical testing with hand-drawn SVG aesthetics."
			},
			{
				link: "/datasets",
				img: pomo,
				title: "Cool Datasets",
				description: "A curated list of some datasets that I created."
			},
			// {
			// 	link: "/nest",
			// 	img: nest,
			// 	title: "Nested Machine Learning Workflows",
			// 	description: "An introduction to nested machine learning workflows in R with <b>tidyr</b> & <b>purrr</b>."
			// },
			{
				link: "/berkeley_salary",
				img: berkeley,
				title: "U.C. Berkeley: Professor Salaries",
				description: "Interactively explore the salaries of U.C. Berkeley faculty."
			},
		
			{
				link: "https://bl.ocks.org/jwilber",
				img: blocks,
				title: "blocks",
				description: "In-browser collection of my shareable d3.js examples."
			},
			],
			posts: [
			// {'blogpost': 'Efficient Base R'},
			{
				blogpost: 'Nested Machine-Learning Workflows in R with purrr & tidyr',
				link: '/nest'
			},	
			// {
			// 	'blogpost': 'Cool Shit to Follow: Data Visualization',
			// 	link: 'https://example.com'
			// },
			]
		}
	}

	render(){
		return(
			<div>
				<Jared />
				<Route exact path="/" render={() =>(
					<div>
						<Intro />
						<Projects projects={this.state.projects}/>
					</div>
				)}/>

				<Route path="/blog" render={() => (
					<div>
						<Intro />
						<Posts posts={this.state.posts}/>
					</div>
				)}/>


				<Route path="/about" render={() => (
					<div>
						<Intro />
						<About />
					</div>
				)}/>


			</div>
		)
	}
}


export default Main
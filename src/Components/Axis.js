import React from 'react';
import { scaleLinear } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

class Axis extends React.Component {
	componentDidMount() { this.renderAxis() }
	componentDidUpdate() { this.renderAxis() }
	renderAxis() {
		const node = this.node
		const scale = scaleLinear()
	                  .domain([0, 10])
	                  .range([0, 200]);
	   	const axis = axisBottom(scale);
		select(node)
		  .call(axis);  
	}
	render() {
	   	return <svg className='svg' ref={node => this.node = node}
      width={500} height={100}>
      </svg>
	}
}

export default Axis
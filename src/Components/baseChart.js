class Chart {
  
  constructor(opts) {
    this.element = opts.element;
    this.x = opts.x;
    this.y = opts.y;
    d3.csv(opts.data, (d) => {
      this.data = d;
      this.draw();
    });
  }
  
  draw() {
    this.width = 750;
    this.height = this.width / 1.5;
    this.margin = {
      top: 50,
      bottom: 50,
      right: 50,
      left: 50
    };
    
   this.element.innerHTML = '';
   const svg = d3.select(this.element).append('svg');
    svg.attr('width', this.width);
    svg.attr('height', this.height);
    
    this.plot = svg.append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
    
    this.createScales();
    this.addAxes();
    this.addScatter();
  }
  
  createScales() {
    const xExtent = d3.extent(this.data, d => +d[this.x]);
    const yExtent = d3.extent(this.data, d => +d[this.y]);
    
    // force zero baseline if all data is positive
    if (yExtent[0] > 0) { yExtent[0] = 0; };
    if (xExtent[0] > 0) { xExtent[0] = 0; };
    
    this.xScale = d3.scaleLinear()
                    .range([0, this.width - (this.margin.right*2)])
                    .domain(xExtent);
    
    this.yScale = d3.scaleLinear()
                    .range([this.height - (this.margin.top + this.margin.bottom), 0])
                    .domain(yExtent);
  };
  
  addAxes() {
    const xAxis = d3.axisBottom()
                    .scale(this.xScale);
    const yAxis = d3.axisLeft()
                    .scale(this.yScale);
    
    this.plot.append('g')
        .attr('class', 'x_axis')
        .attr('transform', `translate(0, ${this.height - (this.margin.top + this.margin.bottom)})`)
        .call(xAxis);
    
    this.plot.append('g')
        .attr('class', 'y_axis')
        .call(yAxis);
  };
  
  addScatter() {
    this.plot.selectAll('circle')
      .data(this.data).enter()
      .append('circle')
      .attr("cx", d => this.xScale(+d[this.x]))
      .attr("cy", d => this.yScale(+d[this.y]))
      .attr("r", 4);
      
    
  };

}